import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType
} from 'graphql'
import InfoModel from '../models/info'
import { objType } from './common'

export const InfoType = new GraphQLObjectType({
  name: 'Info',
  fields: {
    _id: {
      type: GraphQLID
    },
    height: {
      type: GraphQLString
    },
    weight: {
      type: GraphQLString
    },
    hobby: {
      type: new GraphQLList(GraphQLString)
    },
    meta: {
      type: objType
    }
  }
})

export const infos = {
  type: new GraphQLList(InfoType),
  args: {},
  resolve (root, params, options) {
    return InfoModel.find({}).exec()
  }
}

export const info = {
  type: InfoType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    return InfoModel.findOne({_id: params.id}).exec()
  }
}
