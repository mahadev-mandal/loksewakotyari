import questionModel from '../../../../models/questionSchema'
import userModel from '../../../../models/userSchema'
import { dateScalar } from '../customScalars';
import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';

export const resolvers = {
  // Abc: {
  //   __resolveType(obj) {
  //     if (obj.name) return 'Entryby'
  //     return 'Option'
  //   }
  // },
  Date: dateScalar,
  Query: {
    getQuestions: async (parent, args) => {
      const { offset, limit } = args
      try {
        const data = await questionModel.find().skip(limit * offset).limit(limit)
        const totalCount = await questionModel.estimatedDocumentCount();
        return { data, totalCount }
      } catch (err) {
        throw new GraphQLError(err)
      }

    },
    getQuestion: async (parent, args) => {
      try {
        const { slug } = args;
        const data = await questionModel.findOne({ slug });
        return data
      } catch (err) {
        throw new GraphQLError(err)
      }
    },
    getUsers: async (parent, args) => {
      const { offset, limit } = args
      try {
        const data = await userModel.find().skip(limit * offset).limit(limit)
        const totalCount = await userModel.estimatedDocumentCount();
        return { data, totalCount }
      } catch (err) {
        throw new GraphQLError(err)
      }

    },
    getLoggedinUser(root, args, context) {
      // console.log(context.token)
      return context.user
    }

  },
  Mutation: {
    addQuestion: async (parent, args) => {
      try {
        const lastDoc = await questionModel.findOne().sort({ _id: -1 });
        const newQuestion = new questionModel({ ...args, questionId: lastDoc.questionId + 1, });
        const result = await newQuestion.save()
        if (result) {
          return {
            code: 200,
            success: true,
            message: 'Question saved sucessfully',
            question: { result }
          }
        }
      } catch (err) {
        // console.error(err.message)
        return {
          code: 500,
          success: false,
          message: err?.message ?? 'Something went wrong.',
          question: {}
        }
      }
    },
    deleteQuestions: async (parent, args) => {
      const { ids } = args;
      try {
        const result = await questionModel.deleteMany({ _id: { $in: ids } });
        if(result.deletedCount>0){
          return {
            code: 200,
            success: true,
            message: `${result?.deletedCount} questions deleted sucessfully.`,
          }
        }else{
          return {
            code: 409,
            success: true,
            message: `Something went wrong.`,
          }
        }
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: err?.message ?? 'Something went wrong.',
        }
      }
    },

    addUser: async (parent, args) => {
      try {
        const lastDoc = await userModel.findOne().sort({ _id: -1 });
        const newUser = new userModel({ ...args, userId: lastDoc.userId, });
        const result = await newUser.save()
        if (result) {
          return {
            code: 200,
            success: true,
            message: 'User saved sucessfully',
            user: { result }
          }
        }

      } catch (err) {
        return {
          code: 500,
          success: false,
          message: err?.message ?? 'Something went wrong.',
          question: {}
        }
      }
    },
    deleteUsers:async(parent, args)=>{
      const { ids } = args;
      try {
        const result = await userModel.deleteMany({ _id: { $in: ids } });
        if(result.deletedCount>0){
          return {
            code: 200,
            success: true,
            message: `${result?.deletedCount} users deleted sucessfully.`,
          }
        }else{
          return {
            code: 409,
            success: true,
            message: `Something went wrong.`,
          }
        }
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: err?.message ?? 'Something went wrong.',
        }
      }
    },

    loginUser: async (root, args) => {
      try {
        const { username, password, reqRole } = args
        const user = await userModel.findOne({ email: username, role: reqRole },)
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          const token = await user.generateAuthToken();
          return {
            code: 200,
            success: true,
            message: 'User found',
            user: { ...user._doc, token }
          }
        }
        return {
          code: 401,
          success: false,
          message: 'Either username or password is incorrect',
          user: {}
        }

      } catch (err) {
        return {
          code: 401,
          success: false,
          message: 'Either username or password is incorrect',
          user: {}
        }
      }

    }
  },

};
