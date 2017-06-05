import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql'

let UserType = new GraphQLObjectType({
  name: 'User',
  description: '用户信息',
  fields: () => ({
    _id: {
      type: GraphQLID,
      description: 'id'
    },
    account: {
      type: GraphQLString,
      description: '账号'
    },
    name: {
      type: GraphQLString,
      description: '用户昵称'
    },
    email: {
      type: GraphQLString,
      description: '邮箱'
    },
    avatar: {
      type: GraphQLString,
      description: '头像'
    },
    profile: {
      type: GraphQLString,
      description: '概况'
    },
    location: {
      type: GraphQLString,
      description: '位置'
    },
    github: {
      type: GraphQLString,
      description: 'Github'
    },
    website: {
      type: GraphQLString,
      description: '个人网站'
    },
    admin: {
      type: GraphQLBoolean,
      description: ' 是否管理员'
    },
    active: {
      type: GraphQLBoolean,
      description: ' 邮箱是否已激活'
    }
  })
})

export default UserType