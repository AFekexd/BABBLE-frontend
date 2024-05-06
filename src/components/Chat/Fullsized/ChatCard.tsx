import { Card, Badge, Avatar } from "@nextui-org/react";

const ChatCard = () => {
  return (
    <Card className="chat-group-card p-2  hover:bg-gray-800 cursor-pointer">
      <div className="chat-group-card-body">
        <div className="p-2 flex gap-5 align-center">
          <div>
            <Badge color="warning" content="20">
              <Avatar
                name="john doe"
                showFallback
                src="htt://i.prr.cc/150?u=a042581f4e29026024d"
                size="sm"
              />
            </Badge>
          </div>

          <div className="group-title">
            <p>Teszt Elek</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400 p-2 max-w-[300px] truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </Card>
  );
};

export default ChatCard;
