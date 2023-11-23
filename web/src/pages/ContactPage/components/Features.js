import React from 'react'

const Features = () => {
  return (
    <div className='py-8'>
      <div className='flex justify-center flex-col md:flex-row gap-4 mt-8 font-semibold'>
      <div className='py-8 px-4 max-w-[300px] mx-auto md:mx-0'>
        <h2 className='text-lg'>Address</h2>
        <p className='text-gray-800 mt-4'>Unit #215, 1515 Matheson Blvd E, Mississauga, ON, Canada</p>
      </div>
      <div className='py-8 px-4 max-w-[300px] mx-auto md:mx-0'>
        <h2 className='text-lg'>Contact</h2>
        <p className='text-gray-800 mt-4'>Mobile: +1-647-741-0309 Mail: programs@intelleecollege.com</p>
      </div>
      <div className='py-8 px-4 max-w-[300px] mx-auto md:mx-0'>
        <h2 className='text-lg'>Hour of operation</h2>
        <p className='text-gray-800 mt-4'>Monday - Friday: 9:00am - 5:00pm Sunday & Saturday: 9:00 - 5:00 pm *Subject to changes due to Holidays</p>
      </div>
    </div>
    </div>
  )
}

export default Features