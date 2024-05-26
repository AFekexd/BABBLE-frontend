import ForumSearch from "../components/Forum/ForumSearch";
import ForumList from "../components/Forum/ForumList";

import RecentList from "../components/Forum/Recent/RecentList";
import "../components/Forum/Forum.css";
import { Button, Divider, Tooltip, useDisclosure } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";
import ForumModal from "../components/Modals/ForumModal";
const Forum = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <ForumModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <Tooltip content="Új fórum poszt készítése" placement="left">
        <div
          className="fixed z-5 bottom-5 right-5 rounded-full bg-primary p-2 hover:bg-primary-300 cursor-pointer hover:animate-pulse"
          onClick={onOpen}
        >
          <FaPlus className="text-white" size={25} />
        </div>
      </Tooltip>
      <div id="forumContainer">
        <div id="forumHeader">
          <ForumSearch />
        </div>
        <div
          id="forumBody"
          className="w-full flex flex-col sm:flex-row gap-4 h-95dvh sm:h-full"
        >
          <div id="forumList" className="sm:w-5/6 h-5/12">
            <div id="forumListBody">
              <ForumList />
            </div>
            <div className="p-2 sm:hidden mb-2">
              <Button className="w-full" color="primary" variant="solid">
                Load More
              </Button>
            </div>
            <Divider className="sm:hidden" />
          </div>
          <div
            id="forumRecent"
            className="sm:w-1/6 sm:bg-default-100 rounded h-full m-2"
          >
            <h1
              className="text-center text-2xl font-bold rounded
          sticky top-0 bg-primary-100 sm:bg-primary-100 p-2 sm:p-4 z-20
          "
            >
              Recent
            </h1>
            <RecentList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Forum;
