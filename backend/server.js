const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const Staff = require('./models/Staff')
const Store = require('./models/Store')
const Product = require('./models/Product')
const Sales = require('./models/Sales')

const connectDB = require('./config/db')

const server = new GraphQLServer({
  typeDefs: `${__dirname}/schema.graphql`,
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    Staff,
    Store,
    Product,
    Sales,
  },
})

server.start(connectDB())
