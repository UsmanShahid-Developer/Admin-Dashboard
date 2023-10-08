import React from 'react'

export default function page() {
  return (
    <div> <div className='text-center'>
    <h1 className='text-6xl mb-2'>Attendanse INFO</h1>
    <h3 className='mb-2 text-xl  text-blue-500' >AttendanceID</h3>
      <input type="text"  className='	 rounded-full shadow-xl w-96 h-10 text-center mb-5' placeholder='Enter AttendanceID'/>
      <br/>
      <h3 className='mb-2 text-xl text-blue-500 ' >StudentID</h3>

      <input type="text"  className='rounded-full shadow-xl w-96 h-10 text-center mb-5' placeholder='Enter studentID '/>
      <br />
      <h3 className='mb-2 text-xl  text-blue-500' >CourseID</h3>

      <input type="text"  className='rounded-full shadow-xl w-96 h-10 text-center mb-5' placeholder='Enter CourseID'/>
      <br />
      <h3 className='mb-2 text-xl text-blue-500 ' >Date</h3>

      <input type="text"  className='rounded-full shadow-xl w-96 h-10 text-center mb-5' placeholder='dd/mm/yy'/>
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
  </div></div>
  )
}
