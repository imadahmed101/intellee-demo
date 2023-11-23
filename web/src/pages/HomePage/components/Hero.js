import { Link, routes } from '@redwoodjs/router'

const Hero = () => {
  return (

    <div className='mx-4'>
      <img src='/1.png' className='right-0 rotate-180 min-w-[400px] absolute opacity-30 -z-10' />

      {/* <div className='flex flex-row py-32 mx-32'>
        <div className='flex-1'>

          <div className='max-w-[700px]'>

          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            The college that gets you <span className='text-[#0071dc]'>
              future-ready
            </span>
          </h1>

          <p className='mt-8 text-gray-800 font-semibold mb-12'>
            Start your journey towards your dream career with inTellee's flagship courses designed to make you industry-ready and land you jobs at top companies all over the world. To book an in-person meeting, please call us at +1-647-741-0309.
          </p>

          <Link to={routes.courses()} className='bg-[#0071dc] text-white font-semibold p-4 rounded-md'>Find courses</Link>
          </div>
        </div>
        <div className='flex-1'>
        </div>
      </div> */}

      {/* <div className='max-w-[1280px] py-16 md:py-32 mx-auto text-center'>
        <div className='max-w-[900px] mx-auto'>

          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            The college that gets you <br className='hidden sm:flex'/><span className='text-[#0071dc]'>
              future-ready
            </span>
          </h1>

          <p className='max-w-[600px] mx-auto mt-8 text-gray-800 font-semibold mb-12'>
            Start your journey towards your dream career with inTellee's flagship courses designed to make you industry-ready and land you jobs at top companies all over the world. To book an in-person meeting, please call us at +1-647-741-0309.
          </p>

          <Link to={routes.courses()} className='bg-[#0071dc] text-white font-semibold px-4 py-2 rounded-full mr-4'>Find courses</Link>
          <Link to={routes.courses()} className='border-black border-[1px] font-semibold px-4 py-2 rounded-full'>Register</Link>
        </div>


      </div> */}


      <div className='max-w-[1280px] py-16 md:py-32 mx-auto text-left'>
        <div className='max-w-[900px] mx-auto'>

          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            The college that gets you <br className='hidden sm:flex'/><span className='text-[#0071dc]'>
              future-ready
            </span>
          </h1>

          <p className='max-w-[600px] mt-8 text-gray-800 font-semibold mb-12'>
            Start your journey towards your dream career with inTellee's flagship courses designed to make you industry-ready and land you jobs at top companies all over the world. To book an in-person meeting, please call us at +1-647-741-0309.
          </p>

          <Link to={routes.courses()} className='bg-[#0071dc] border-[#0071dc] border-[1px] text-white font-semibold px-4 py-2 rounded-full mr-1 hover:bg-black hover:border-black'>Find courses</Link>
          <Link to={routes.courses()} className='border-black border-[1px] font-semibold px-4 py-2 rounded-full hover:bg-black hover:text-white'>Register</Link>
        </div>


      </div>




    </div>
  )
}

export default Hero