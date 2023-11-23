import React from 'react'

const PreEnroll = () => {
  return (
    <div className='text-center py-8'>
      <img src='/3.png' className='left-0 absolute opacity-80 -z-10' />

    <h1 className='text-2xl md:text-4xl font-bold tracking-tight'>
      Pre-Enroll Today
    </h1>
    <div className='flex justify-center flex-col md:flex-row gap-4 mt-8 font-semibold'>
      <div className='border-blue-800 border-[2px] rounded-md py-8 px-4 max-w-[300px] mx-auto md:mx-0'>
        <h2 className='text-lg'>Diploma in Software Engineering</h2>
        <p className='text-gray-800 underline mt-4'>Learn More</p>
      </div>
      <div className='border-blue-800 border-[2px] rounded-md py-8 px-4 max-w-[300px] mx-auto md:mx-0'>
        <h2 className='text-lg'>Product Management Certificate</h2>
        <p className='text-gray-800 underline mt-4'>Learn More</p>
      </div>
      <div className='border-blue-800 border-[2px] rounded-md py-8 px-4 max-w-[300px] mx-auto md:mx-0'>
        <h2 className='text-lg'>Diploma in Accounting with Office Admin</h2>
        <p className='text-gray-800 underline mt-4'>Learn More</p>
      </div>
    </div>
    </div>
  )
}

export default PreEnroll