import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Hero from './components/Hero'
import Features from './components/Features'
import Form from './components/Form'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Hero/>
      <Features/>
      <Form/>
    </>
  )
}

export default ContactPage
