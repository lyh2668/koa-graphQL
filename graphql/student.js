import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType
} from 'graphql'
import StudentModel from '../models/student'
import { objType } from './common'
import { InfoType } from './info'

export const StudentType = new GraphQLObjectType({
  name: 'Student',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    sex: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    info: {
      type: InfoType
    }
  }
})

export const student = {
  type: new GraphQLList(StudentType),
  args: {},
  resolve (root, params, options) {
    return StudentModel.find({}).populate({
      path: 'info',
      select: 'hobby height weight'
    }).exec()
  }
}
