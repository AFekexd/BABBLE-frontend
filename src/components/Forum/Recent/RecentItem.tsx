import {
  Button,
  Card,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
} from "@nextui-org/react";
import { useState } from "react";
import { FaFlag } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
const RecentItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
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
    <Card className="space-y-5 p-2 sm:p-4 hover:bg-gray-700">
      <div className="flex flex-row gap-1 sm:gap-2 w-full">
        <div className="w-5/12 sm:w-1/5">
          <div className="flex flex-row ">
            <Skeleton className="rounded-full sm:w-1/3 min-w-[50px] w-4/12">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="flex flex-col gap-2 ml-2 md:w-2/3 w-8/12">
              <Skeleton className="h-6  rounded-lg">
                <div className="h-2 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="h-6 w-2/4 rounded-lg">
                <div className="h-2 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/5">
          <Link to={`/forum/asd`}>
            <Skeleton className="rounded-lg">
              <div className="h-12 rounded-lg bg-default-300"></div>
            </Skeleton>
          </Link>
        </div>

        <div className="w-1/12 grid justify-items-end">
          <Popover
            isOpen={isOpen}
            onOpenChange={(open) => setIsOpen(open)}
            placement="bottom"
            backdrop="blur"
          >
            <PopoverTrigger>
              <Button isIconOnly variant="light">
                <HiDotsVertical />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="mt-2 flex flex-col gap-2 w-full">
                <Button>Open</Button>
                <Button>Follow</Button>
                <Divider />
                <Button color="danger" startContent={<FaFlag />}>
                  Report
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </Card>
  );
};

export default RecentItem;
