import React from 'react'

const Form = () => {
  return (
    <div className='py-8'>
    <div className='bg-[#0071dc] max-w-[500px] rounded-md p-8 mx-auto'>
      <form className='flex flex-col'>
        <label className='text-white font-semibold'>Name: </label>
        <input className='p-2 mb-2'/>
        <label className='text-white font-semibold'>Email: </label>
        <input className='p-2 mb-2'/>
        <label className='text-white font-semibold'>Message: </label>
        <input className='p-2 mb-2'/>
        <button className='p-2 bg-black text-white font-semibold'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Form