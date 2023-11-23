import { Link, routes } from "@redwoodjs/router"

import type { Course } from 'types/graphql'

interface Props {
  course: Course
}

const Course = ({course}: Props) => {
  return (
    <article key={course.id} className='bg-gray-300 p-4'>
    <header>
    <h2 className='text-xl'>
      <Link to={routes.viewcourse({ id: course.id })}>
      {course.name}
      </Link>
      </h2>
    </header>
    <p>{course.description}</p>
    <p>{course.duration} weeks</p>
    <p>${course.Fee}</p>
  </article>
  )
}

export default Course
