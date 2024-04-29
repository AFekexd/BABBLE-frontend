import React from 'react'
import ForumComment from './ForumComment'

const ForumCommentList = () => {
  return (
    <div className="flex flex-col gap-4 mt-12">
         {Array(5).fill(0).map((_, i) => (
            <ForumComment key={i} 
            length={
              Math.floor(Math.random() * 20) + 1
            }
            />

      ))}
    </div>
  )
}

export default ForumCommentList