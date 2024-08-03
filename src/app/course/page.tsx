'use client'

import { useSession } from 'next-auth/react'
import React from 'react'

const Courses = () => {
    const {data: session} = useSession();
  return (
    <div className='flex flex-auto justify-center items-center text-4xl font-bold mt-10'>Courses, Welcome {session?.user?.name}</div>
  )
}

export default Courses