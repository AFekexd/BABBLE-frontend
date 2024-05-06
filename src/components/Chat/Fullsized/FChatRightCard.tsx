import {
  Card,
  Avatar,
  ButtonGroup,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
} from "@nextui-org/react";
import { MdCall, MdVideoCall, MdWarning, MdAdd, MdSend } from "react-icons/md";
import ChatItem from "../ChatItem";

const FChatRightCard = () => {
  return (
    <Card className="w-5/6">
      <div className="chat">
        <div className="chat-header">
          <div className="chat-header-left">
            <Avatar
              size="md"
              isBordered
              color="success"
              src="https://i.imgur.com/7k12EPD.png"
            />
            <h2>TESZT ELEK</h2>
          </div>
          <div className="chat-header-right">
            <ButtonGroup size="lg" variant="light">
              <Button color="primary" isIconOnly aria-label="Call">
                <MdCall />
              </Button>
              <Button color="primary" isIconOnly aria-label="Video call">
                <MdVideoCall />
              </Button>
              <Popover placement="bottom">
                <PopoverTrigger>
                  <Button color="warning" isIconOnly aria-label="Warning">
                    <MdWarning />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Button className="text-tiny" color="secondary" radius="none">
                    Felhasználónév másolása
                  </Button>
                  <Button className="text-tiny" color="danger" radius="none">
                    Felhasználó jelentése
                  </Button>
                </PopoverContent>
              </Popover>
            </ButtonGroup>
          </div>
        </div>
        <div className="chat-messages">
          {Array.from({ length: 10 }).map((_, index) => (
            <ChatItem />
          ))}
        </div>
      </div>
      <div className="chat-footer">
        <div className="chat-input">
          <Input
            startContent={
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => console.log("asd")}
              >
                <MdAdd />
              </button>
            }
            endContent={
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => console.log("asd")}
              >
                <MdSend />
              </button>
            }
            type="text"
          />
        </div>
      </div>
    </Card>
  );
};

export default FChatRightCard;
