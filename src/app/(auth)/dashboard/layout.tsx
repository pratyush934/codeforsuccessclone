import React from 'react'

const DashBoardLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex justify-evenly '>
        <div className='mt-10 '>
        {children}
        </div>
    </div>
  )
}

export default DashBoardLayout