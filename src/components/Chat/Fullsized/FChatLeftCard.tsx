import { Card, Tabs, Tab, Tooltip, Badge, Button } from "@nextui-org/react";
import { MdPerson, MdGroup, MdGroupAdd } from "react-icons/md";
import ChatGroupCard from "./ChatGroupCard";
import ChatCard from "./ChatCard";

const FChatLeftCard = ({ onOpen }) => {
  return (
    <Card className="w-3/6 h-full pt-3 sm:w-2/5">
      <Tabs className="chat-tabs">
        <Tab
          title={
            <Tooltip content="Barátok" placement="bottom">
              <div className="chat-tab md:text-2xl">
                <Badge color="warning" content="10" placement="bottom-right">
                  <MdPerson />
                </Badge>
              </div>
            </Tooltip>
          }
        >
          <div className="chat-friendlist p-2">
            <ChatCard />
          </div>
        </Tab>
        <Tab
          className="h-full"
          title={
            <Tooltip content="Csoportok" placement="bottom">
              <div className="chat-tab">
                <Badge color="warning" content="10" placement="bottom-right">
                  <MdGroup />
                </Badge>
              </div>
            </Tooltip>
          }
        >
          <div className="GroupCards p-2 h-full">
            <ChatGroupCard />
            <div className="chat-group-card-footer w-full">
              <Button
                color="warning"
                size="lg"
                startContent={<MdGroupAdd />}
                onPress={onOpen}
              >
                Új csoport
              </Button>
            </div>
          </div>
        </Tab>
      </Tabs>
    </Card>
  );
};

export default FChatLeftCard;
