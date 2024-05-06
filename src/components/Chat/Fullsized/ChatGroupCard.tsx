import { Card, Badge, AvatarGroup, Avatar } from "@nextui-org/react";

const ChatGroupCard = () => {
  return (
    <Card className="chat-group-card p-2 hover:bg-gray-800 cursor-pointer">
      <div className="chat-group-card-body">
        <div className="p-2 flex justify-between">
          <div>
            <Badge color="warning" content="20">
              <AvatarGroup isBordered max={2} total={2} size="sm">
                <Avatar
                  name="john doe"
                  showFallback
                  src="htt://i.prr.cc/150?u=a042581f4e29026024d"
                />
                <Avatar
                  name="john doe"
                  showFallback
                  src="htt://i.prr.cc/150?u=a042581f4e29026024d"
                />
              </AvatarGroup>
            </Badge>
          </div>

          <div className="group-title">
            <p>Nagymenok</p>
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

export default ChatGroupCard;
