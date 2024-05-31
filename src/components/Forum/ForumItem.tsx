import {
  Button,
  Card,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import { FaFlag } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import UserAvatar from "../Avatar/UserAvatar";

const ForumItem = ({ item }: { item: any }) => {
  //on card click navigate to forumContent
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Link to={`/forum/` + item.id}>
      <Card className="space-y-4 p-1 sm:p-2 hover:bg-gray-700">
        <div className="flex flex-row gap-1 sm:gap-2 w-full">
          <div className="w-6/12 sm:2/12 flex flex-row">
            {item && (
              <>
                <div className="flex flex-row gap-2 ml-2 ">
                  <UserAvatar userID={item.userid} size="lg" />
                  <div>
                    <h2> {item.name} </h2>
                    <p className="text-sm  text-default-400">
                      @{item.username}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="w-4/12 sm:w-8/12">
            {item && (
              <h1
                className="text-lg font-bold text-white truncate"
                title={item.title}
              >
                {item.title}
              </h1>
            )}
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
    </Link>
  );
};

export default ForumItem;
