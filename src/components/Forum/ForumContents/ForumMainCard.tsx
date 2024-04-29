import { Card, Divider, Skeleton } from '@nextui-org/react'
import React from 'react'

const ForumMainCard = () => {
  return (
    <Card className="m-3 space-y-5 p-4 mb-8">
    <div className="flex flex-row gap-2">
      <div className="w-1/6">
        <div className="flex flex-row">
          <Skeleton className="rounded-full w-1/3">
            <div className="h-24  rounded-lg bg-default-300"></div>
            
          </Skeleton>
  
          <div className="flex flex-col gap-2 ml-2 w-2/3">
            
          <Skeleton className="h-6  rounded-lg">
              <div className="h-2 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="h-6 w-2/4 rounded-lg">
              <div className="h-2 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        </div>

        <div className="space-y-4 mt-3 ">
          <Skeleton className="w-3/6 rounded-lg">
            <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
   
          <Skeleton className="w-3/6 rounded-lg">
            <div className="h-6 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-3/6 rounded-lg">
            <div className="h-6 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </div>

      <div className="w-5/6 ">
        <Skeleton className="rounded-lg">
          <div className="h-12 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Divider className="mt-2 mb-12" />
        <div className="space-y-4 mt-3">
          <Skeleton className="w-1/7 rounded-lg">
            <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-5/5 rounded-lg">
            <div className="h-6 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-5/5 rounded-lg">
            <div className="h-6 w-2/5 rounded-lg bg-default-300">
                
            </div>
          </Skeleton>
        </div>
      </div>
    </div>
  </Card>
  )
}

export default ForumMainCard