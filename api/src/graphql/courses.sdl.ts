export const schema = gql`
  type Course {
    id: Int!
    name: String!
    code: String!
    description: String
    duration: Int
    Fee: Int
  }

  type Query {
    courses: [Course!]! @skipAuth
    course(id: Int!): Course @skipAuth
  }

  input CreateCourseInput {
    name: String!
    code: String!
    description: String
    duration: Int
    Fee: Int
  }

  input UpdateCourseInput {
    name: String
    code: String
    description: String
    duration: Int
    Fee: Int
  }

  type Mutation {
    createCourse(input: CreateCourseInput!): Course! @requireAuth
    updateCourse(id: Int!, input: UpdateCourseInput!): Course! @requireAuth
    deleteCourse(id: Int!): Course! @requireAuth
  }
`
