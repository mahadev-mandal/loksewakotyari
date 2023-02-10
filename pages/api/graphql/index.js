// import { nextHandler } from "apollo-server-nextjs";
import { ApolloServer } from '@apollo/server';
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import db_conn from "../../../helpers/db_conn";
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import userModel from '../../../models/userSchema'
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

db_conn();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection:true,
  playground:true,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req) => {

    const token = req.headers.authorization.split('Bearer ')[1];
    if (token) {
      const tokenPayload = jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
        if (err) {
          console.log(err)
          throw new GraphQLError("you must be logged in to query this schema", {
            extensions: {
              code: 'UNAUTHENTICATED',
            },
          });
        }
        return decoded // bar
      });
      const user = await userModel.findOne({ _id: tokenPayload._id, "tokens.token": token }, { tokens: 0 });
      if (!user)
        throw new GraphQLError("you must be logged in to query this schema", {
          extensions: {
            code: 'UNAUTHENTICATED',
          },
        });
      return { user, token }
    }
    return { user: {} }
  },
});

