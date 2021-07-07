const { ApolloServer, gql } = require('apollo-server')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  type Customer {
    id: ID!
    name: String
  }
  
  type Equipment {
    id: ID!
    name: String,
    customerId: Int
  }

  type Query {
    customers: [Customer],
    equipments: [Equipment],
    customerById(id: ID!): Customer,
    equipmentsByCustomer(customerId: String!): [Equipment]
  }
`

const equipments = [
    {
        id: '1',
        name: 'Mobilt bredband',
        customerId: '1'
    },
    {
        id: '2',
        name: 'Iphone X',
        customerId: '1'
    },
    {
        id: '3',
        name: 'Bredband unlimited',
        customerId: '2'
    },
    {
        id: '4',
        name: 'Nokia 2233',
        customerId: '2'
    }
]

const customers = [
    {
        id: '1',
        name: 'Adam Anderson'
    },
    {
        id: '2',
        name: 'Bo Bertilsson'
    },
    {
        id: '3',
        name: 'Charlie Chaplin'
    },
    {
        id: '4',
        name: 'David Dahlgren'
    },
    {
        id: '5',
        name: 'Allan Andersson'
    }
]

const resolvers = {
    Query: {
        customers: () => customers,
        equipments: () => equipments,
        customerById: (parent, args, context, info) => customers.find(customer => customer.id === args.id),
        equipmentsByCustomer: (parent, args, context, info) => equipments.map(equipment => equipment.customerId === args.customerId && equipment)
    }
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});