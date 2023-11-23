import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Hero from './components/Hero'
import PreEnroll from './components/PreEnroll'
import Features from './components/Features'
import CoursesCell from 'src/components/CoursesCell'

const CoursesPage = () => {
  return (
    <>
      <MetaTags title="Courses" description="Courses page" />
      <Hero/>
      <PreEnroll/>
      <Features/>
      <CoursesCell/>
    </>
  )
}

export default CoursesPage
