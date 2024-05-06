import ForumSearch from "../components/Forum/ForumSearch";
import ForumList from "../components/Forum/ForumList";

import RecentList from "../components/Forum/Recent/RecentList";
import "../components/Forum/Forum.css";
import { Button, Divider } from "@nextui-org/react";
const Forum = () => {
  return (
    <div id="forumContainer">
      <div id="forumHeader">
        <ForumSearch />
      </div>
      <div
        id="forumBody"
        className="w-full flex flex-col sm:flex-row gap-4 h-95dvh sm:h-full"
      >
        <div id="forumList" className="sm:w-5/6 h-5/5">
          <div id="forumListBody">
            <ForumList />
          </div>
          <div id="forumListFooter" className="flex justify-center h-20">
            <Button>Load More</Button>
          </div>
          <Divider className="sm:hidden" />
        </div>
        <div id="forumRecent" className="sm:w-1/6  h-full">
          <h1 className="text-center text-2xl font-bold">Recent</h1>
          <RecentList />
        </div>
      </div>
    </div>
  );
};

export default Forum;
