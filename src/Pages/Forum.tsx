import ForumList from "../components/Forum/ForumList";

import RecentList from "../components/Forum/Recent/RecentList";

import {
  Button,
  Card,
  Divider,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";
import ForumModal from "../components/Modals/ForumModal";

import "../components/Forum/Forum.css";
import { useLazyGetForumQuery } from "../features/forum/mainForumApiSlice";
import { useEffect, useState } from "react";
import ForumSearch from "../components/Forum/ForumSearch";
const Forum = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [trigger, { isLoading }] = useLazyGetForumQuery({});
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!isOpen) getData();
  }, [isOpen, page]);

  const getData = () => {
    trigger({
      offset: (page - 1) * 6,
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

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
      <div className="w-[70%] m-auto ">
        <div
          id="forumBody"
          className=" flex flex-col sm:flex-row gap-4 h-95dvh sm:h-50dvh"
        >
          <div id="forumList" className="sm:w-9/12 ">
            <div id="forumHeader">
              <ForumSearch />
            </div>
            <ForumList
              data={data}
              isLoading={isLoading}
              page={page}
              setPage={setPage}
            />

            <div className="p-2 sm:hidden mb-2">
              <Button className="w-full" color="primary" variant="solid">
                Load More
              </Button>
            </div>
            <Divider className="sm:hidden" />
          </div>
          <Card className="sm:w-3/12 bg-transparent rounded m-2 ">
            <h1
              className="text-center text-2xl font-bold rounded
          sticky top-0 bg-primary-100 sm:bg-primary-100 p-2 sm:p-4 z-20 
          "
            >
              Recent
            </h1>
            TODO
            <div className="invisible">
              <RecentList />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Forum;
