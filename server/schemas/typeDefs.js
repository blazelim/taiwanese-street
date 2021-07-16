const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }

    type Product {
        _id: ID
        name: String
        description: String
        image: String
        quantity: Int
        price: Float
        category: Category
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
        price: Float
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [Order] 
    }

    type Auth {
        token: ID
        user: User
    }

    type Checkout {
        session: ID
    }

    type Query {
        categories: [Category]
        products(category: ID, name: String): [Product]
    }
`