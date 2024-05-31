import ForumItem from "./ForumItem";
import { useGetForumQuery } from "../../features/forum/mainForumApiSlice";
import { useEffect } from "react";
import { Pagination } from "@nextui-org/react";

const ForumList = () => {
  const { data, error, isLoading } = useGetForumQuery({});

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="h-[75dvh] ">
      <div className="w-full flex flex-col gap-5 p-2 overflow-y-auto min-h-[85%] max-h-[85%]">
        {data &&
          data.map((item, index) => <ForumItem key={index} item={item} />)}
      </div>
      <div className="flex justify-center p-3">
        <Pagination isCompact showControls total={10} initialPage={1} />
      </div>
    </div>
  );
};

export default ForumList;
