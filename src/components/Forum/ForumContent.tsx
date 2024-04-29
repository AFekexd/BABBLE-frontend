import { Card, Divider, Skeleton } from "@nextui-org/react";
import React, { useState } from "react";
import ForumMainCard from "./ForumContents/ForumMainCard";
import ForumComment from "./ForumContents/ForumComment";
import ForumCommentList from "./ForumContents/ForumCommentList";
import "../Forum/Forum.css";
const ForumContent = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  return (
    <div>
      {true && (
    <ForumMainCard/>
      )}
      <Divider className=" w-5/6 h-2 rounded-lg m-auto"/>
      <ForumCommentList />
     
    </div>
  );
};

export default ForumContent;
