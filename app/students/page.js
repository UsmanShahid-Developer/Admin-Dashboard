import React from 'react'

export default function page() {
  return (
    <div className='text-center'>
      <h1 className='text-6xl mb-2'>Student INFO</h1>
      <h3 className='mb-2 text-xl  text-blue-500' >Name</h3>
        <input type="text"  className='	 rounded-full shadow-xl w-96 h-10 text-center mb-5' placeholder='Enter your Name'/>
        <br/>
        <h3 className='mb-2 text-xl text-blue-500 ' >StudentID</h3>

        <input type="text"  className='rounded-full shadow-xl w-96 h-10 text-center mb-5' placeholder='Enter studentID '/>
        <br />
        <h3 className='mb-2 text-xl  text-blue-500' >Phone no.</h3>

        <input type="text"  className='rounded-full shadow-xl w-96 h-10 text-center mb-5' placeholder='Enter Phone no.'/>
        <br />
        <h3 className='mb-2 text-xl text-blue-500 ' >EmailID</h3>

        <input type="text"  className='rounded-full shadow-xl w-96 h-10 text-center mb-5' placeholder='Enter Email ID'/>
        <br />

        <div>
          <button className='bg-red-500 p-3 w-32 h-10 rounded-full shadow-xl mt-10'>
            Submit
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
    </div>
    
    
  )
}
