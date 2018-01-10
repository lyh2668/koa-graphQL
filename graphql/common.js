import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

// createdAt & updatedAt
export const objType = new GraphQLObjectType({
  name: 'meta',
  fields: {
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  }
})