export const typeDefs = `#graphql
  # union Abc = Entryby | Option

  scalar Date
  
  type Question {
    _id:ID!
    question: String!
    options:[String]
    correctOption:String
    description:String
    keywords:String
    entryDate:Date
    entryBy:String!
    slug:String!
    levels:[Int]
    relatedSubjects:[String]
  }

  type User{
    _id:ID!
    firstName:String!
    lastName:String
    userId:Int
    mobile:String 
    email:String! 
    role:String!
    registeredDate:Date 
    status:Boolean!
    profilePicPath:String
  }
  type GetQuestions{
    totalCount:Int
    data:[Question]
  }
  type GetUsers{
    totalCount:Int
    data:[User]
  }
  # type LoggedinUser {
  #   firstName:String
  #   lastName:String
  #   role:String
  #   token:String
  # }
  
  type Query {
    getQuestions(offset:Int,limit:Int): GetQuestions,
    getQuestion(slug:String):Question
    getUsers(offset:Int,limit:Int):GetUsers,
    getLoggedinUser:User,   
  }

  enum AllowedColor {
    RED
    GREEN
    BLUE
  }

 
  interface MutationResponse {
    code: String
    success: Boolean
    message: String
  }
  type Usr{
    token:String
    firstName:String
    lastName:String
    role:String
  }
  type LoginUser implements MutationResponse{
    code: String
    success: Boolean
    message: String
    user:Usr
  }
  type AddQuestion implements MutationResponse{
    code: String
    success: Boolean
    message: String
    question:Question
  }
  type DeleteQuestions implements MutationResponse{
    code: String
    success: Boolean
    message: String
    question:Question
  }
  type AddUser implements MutationResponse{
    code: String
    success: Boolean
    message: String
    users:User
  }

  type Mutation{
    addQuestion (
      question: String!,
      options:[String],
      correctOption:String,
      description:String,
      keywords:String,
      entryDate:Date,
      entryBy:String!,
      slug:String!,
      levels:[Int],
      relatedSubjects:[String]
    ): AddQuestion,

    deleteQuestions(ids:[String]):DeleteQuestions

    addUser(
      firstName:String!,
      lastName:String,
      mobile:String,
      email:String!,
      role:String!,
      registeredDate:Date,
      password:String!,
      profilePicPath:String,
    ):AddUser

    loginUser(username:String!,password:String!,reqRole:String):LoginUser 
  }
      
`;
