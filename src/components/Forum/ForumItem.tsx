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

const ForumItem = () => {
  //on card click navigate to forumContent
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className="space-y-5 p-4 hover:bg-gray-700">
      <div className="flex flex-row gap-2">
        <div className="w-1/5">
          <div className="flex flex-row">
            <Skeleton className="rounded-full w-1/3">
              <div className="h-24  rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="flex flex-col gap-2 ml-2 w-2/3">
              <Skeleton className="h-6  rounded-lg">
                <div className="h-2 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="h-6 w-2/4 rounded-lg">
                <div className="h-2 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
          </div>
        </div>

        <div className="w-4/5">
          <Link to={`/forum/asd`}>
            <Skeleton className="rounded-lg">
              <div className="h-12 rounded-lg bg-default-300"></div>
            </Skeleton>
          </Link>
        </div>

        <div className="grid justify-items-end">
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

export default ForumItem;
