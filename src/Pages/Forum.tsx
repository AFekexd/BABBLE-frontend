import React from 'react'
import ForumSearch from '../components/Forum/ForumSearch'
import ForumList from '../components/Forum/ForumList'

import RecentList from '../components/Forum/Recent/RecentList'
import '../components/Forum/Forum.css'
import { Button } from '@nextui-org/react'
const Forum = () => {
  return (
    <div id="forumContainer">
        <div id="forumHeader">
            <ForumSearch />
        </div>
        <div id="forumBody" className="w-full flex flex-row gap-4 h-full">
            <div id="forumList" className="w-5/6 h-full">
              <div id="forumListBody">
                <ForumList />
                </div>
                <div id="forumListFooter" className="flex justify-center h-20">
                <Button>Load More</Button>
                </div>
            </div>
            <div id="forumRecent" className="w-1/6  h-full">
               <RecentList />
            </div>
        </div>
    </div>
  )
}

export default Forum