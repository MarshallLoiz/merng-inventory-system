const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const StaffDocument = require('./models/Staff')
const StoreDocument = require('./models/Store')
const ProductDocument = require('./models/Product')
const SalesDocument = require('./models/Sales')

const Staff = require('./resolvers/Staff')
const Store = require('./resolvers/Store')
const Product = require('./resolvers/Product')
const Sales = require('./resolvers/Sales')

const connectDB = require('./config/db')

const options = {
  credentials: true,
  port: process.env.PORT,
  origin: ['http://localhost:3000'],
}

const server = new GraphQLServer({
  typeDefs: `${__dirname}/schema.graphql`,
  resolvers: {
    Query,
    Mutation,
    Staff,
    Store,
    Sales,
    Product,
  },
  context(request) {
    return {
      StaffDocument,
      StoreDocument,
      ProductDocument,
      SalesDocument,
      request,
    }
  },
})

server.start(
  {
    cors: options,
  },
  () => connectDB()
)
