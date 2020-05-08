const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');

const users = [{
  id: 1,
  name: 'João',
  email: "joao@hotmail.com",
  age: 28,
  profile_id: 1
}, {
  id: 2,
  name: 'ana',
  email: "ana@hotmail.com",
  age: 27,
  profile_id: 2
}, {
  id: 3,
  name: 'Carla',
  email: "carla@hotmail.com",
  age: 22,
  profile_id: 1
},{
  id: 4,
  name: 'Carlos',
  email: "carlos@hotmail.com",
  age: 21,
  profile_id: 1
}]

const profiles = [
  {id: 1, type: 'Common'},
  {id: 2, type: 'Adm' }
]

const resolvers = {
  Product: {
    priceWithDiscount(product) {
      if(product.discount) {
        return product.price * (1 - product.discount)
      }else {
        return product.price
      }
    }
  },

  User: {
    profile(user) {
      const profile = profiles.filter(p => p.id == user.profile_id)
      return profile ? profile[0] : null
    }
  },

  Query: {
    hello() {
      return 'Bom dia!'
    },

    now() {
      return new Date()
    },

    userLogged() {
      return {
        id: 1,
        name: 'Ana',
        email: 'ana@hotmail.com',
        age: 23,
        salary: 1000.00,
        vip: true
      }
    },

    productShow() {
      return {
        name: 'Bolacha',
        price: 5.50,
        discount: 0.50
      }
    },

    numbers() {
      const numbers = (a, b) => a - b
      return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 + 1))
        .sort(numbers)
    },

    users() {
      return users;
    },

    user(_, args) {
      const sels = users.filter(u => u.id == args.id)
      return sels ? sels[0] : null
    },

    profiles() {
      return profiles;
    },

    profile(_, args) {
      const profile = profiles.filter(p => p.id == args.id)
      return profile ? profile[0] : null
    }
  }
}

const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.graphql'),
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})