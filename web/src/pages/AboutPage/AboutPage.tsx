import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Hero from './components/Hero'
import PreEnroll from './components/PreEnroll'
import Features from './components/Features'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <Hero/>
      <PreEnroll/>
      <Features/>
    </>
  )
}

export default AboutPage
