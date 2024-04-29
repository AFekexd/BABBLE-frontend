import React from 'react'
import RecentItem from './RecentItem'

const RecentList = () => {
    /*recent forum updates, forum name, last post, last post time, last post user, last post user avatar, number of comments, number of views, number of likes, number of dislikes, number of shares,
      number of followers, 
      */
    const dummyData = [
        {
            forumName: "forum1",
            postType: "post1",
            lastPostTime: "time1",
            lastPostUser: "user1",
            lastPostUserAvatar: "avatar1",
            numComments: 1,
            numViews: 2,
            numLikes: 3,
            numDislikes: 4,
            numShares: 5,
            numFollowers: 6
        },
        {
            forumName: "forum2",
            postType: "post2",
            lastPostTime: "time2",
            lastPostUser: "user2",
            lastPostUserAvatar: "avatar2",
            numComments: 7,
            numViews: 8,
            numLikes: 9,
            numDislikes: 10,
            numShares: 11,
            numFollowers: 12
        },
        {
            forumName: "forum3",
            postType: "post3",
            lastPostTime: "time3",
            lastPostUser: "user3",
            lastPostUserAvatar: "avatar3",
            numComments: 13,
            numViews: 14,
            numLikes: 15,
            numDislikes: 16,
            numShares: 17,
            numFollowers: 18
        },
        {
            forumName: "forum1",
            postType: "post1",
            lastPostTime: "time1",
            lastPostUser: "user1",
            lastPostUserAvatar: "avatar1",
            numComments: 1,
            numViews: 2,
            numLikes: 3,
            numDislikes: 4,
            numShares: 5,
            numFollowers: 6
        },
        {
            forumName: "forum2",
            postType: "post2",
            lastPostTime: "time2",
            lastPostUser: "user2",
            lastPostUserAvatar: "avatar2",
            numComments: 7,
            numViews: 8,
            numLikes: 9,
            numDislikes: 10,
            numShares: 11,
            numFollowers: 12
        },
        {
            forumName: "forum2",
            postType: "post2",
            lastPostTime: "time2",
            lastPostUser: "user2",
            lastPostUserAvatar: "avatar2",
            numComments: 7,
            numViews: 8,
            numLikes: 9,
            numDislikes: 10,
            numShares: 11,
            numFollowers: 12
        },
    ]
         
  return (
    <div className="RecentList">
        {dummyData.length > 0 &&
        dummyData.map((item, index) => (
            <RecentItem key={index} item={item} />
        ))}
        {dummyData.length === 0 && <div>No recent forum updates</div>}
    </div>
  )
}

export default RecentList