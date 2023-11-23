import Course from 'src/components/Course'

import type { CoursesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query CoursesQuery {
    courses {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ courses }: CellSuccessProps<CoursesQuery>) => {
  return (
    <>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

      {courses.map((course) => (
        <Course key={course.id} course={course} />
      )
      )}
      </div>
    </>
  )
}
