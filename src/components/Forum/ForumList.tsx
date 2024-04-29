import React from 'react'
import ForumItem from './ForumItem'

const ForumList = () => {

  return (
    <div
    
     className="w-full flex flex-col gap-5 p-2  overflow-y-auto"
    >
      {Array(5).fill(0).map((_, index) => (
        <ForumItem key={index} />
      ))}
    </div>
  )
}

export default ForumList