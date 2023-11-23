import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Hero from './components/Hero'
import PreEnroll from './components/PreEnroll'
import Features from './components/Features'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Hero/>
      <Features/>
      <PreEnroll/>
    </>
  )
}

export default HomePage
