import { Link, routes } from '@redwoodjs/router'

const Hero = () => {
  return (
    <div className='max-w-[750px] py-16 mx-auto text-center'>
    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
      The college that gets you
      <br />
      <span className='text-[#0071dc]'>
      future-ready
      </span>
    </h1>

    <p className='mt-8 text-gray-800 font-semibold mb-12'>
      Start your journey towards your dream career with inTellee's flagship courses designed to make you industry-ready and land you jobs at top companies all over the world. To book an in-person meeting, please call us at +1-647-741-0309.
    </p>

    <Link to={routes.courses()} className='bg-[#0071dc] text-white font-semibold p-4 rounded-md'>Find courses</Link>

<div>
  <img src='/1.png' className=' w-full'/>
</div>

  </div>
  )
}

export default Hero