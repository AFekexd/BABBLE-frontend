import ForumItem from "./ForumItem";
import { useGetForumQuery } from "../../features/forum/mainForumApiSlice";
import { useEffect } from "react";

const ForumList = () => {
  const { data, error, isLoading } = useGetForumQuery({});

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="w-full flex flex-col gap-5 p-2  overflow-y-auto">
      {data && data.map((item, index) => <ForumItem key={index} item={item} />)}
    </div>
  );
};

export default ForumList;
