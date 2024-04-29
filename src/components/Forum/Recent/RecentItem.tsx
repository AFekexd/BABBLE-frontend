import { Avatar, Card } from "@nextui-org/react";
import React from "react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";

const RecentItem = ({ item }) => {
  /*    {
          forumName: "forum3",
          lastPost: "post3",
          lastPostTime: "time3",
          lastPostUser: "user3",
          lastPostUserAvatar: "avatar3",
          numComments: 13,
          numViews: 14,
          numLikes: 15,
          numDislikes: 16,
          numShares: 17,
          numFollowers: 18,
          type: "type3",
      }*/
  return (
    <Card className="flex flex-row p-2">
      <div className="RecentPosterInfo">
      <Avatar src={item.lastPostUserAvatar} showFallback />
      <div>{item.lastPostUser}</div>
      </div>
      
      <div className="RecentItemContent">
        <div className="RecentItemMain">
          <div>{item.forumName}</div>
        </div>
        <div className="RecentItemSubInfo">
          <div>{item.numShares}</div>
          <div>{item.numFollowers}</div>
        </div>
      </div>

      <div>{item.postType}</div>
     

      <div>{item.numComments}</div>
      <div>{item.numViews}</div>
      <div className="itemLNDL">
        <div className="likeIcon">
          <BiSolidLike />
          {item.numLikes}
        </div>
        <div className="dislikeIcon">
          <BiSolidDislike />
          {item.numDislikes}
        </div>
      </div>
    </Card>
  );
};

export default RecentItem;
