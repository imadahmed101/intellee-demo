import type { FindCourseQuery, FindCourseQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Course from 'src/components/Course'

export const QUERY = gql`
  query FindCourseQuery($id: Int!) {
    course: course(id: $id) {
      id
      name
      description
      duration
      Fee
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCourseQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  course,
}: CellSuccessProps<FindCourseQuery, FindCourseQueryVariables>) => {
  return <Course course={course}/>
}
