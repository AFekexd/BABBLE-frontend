import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import MCBubble from "./MCBubble";
import { useState } from "react";
import MessageButtons from "../MessageButtons";
import EmojiPicker from "../../EmojiPicker";

const MCPanel = () => {
  const [status, setStatus] = useState("danger");

  return (
    <Card className="w-full h-full">
      <CardHeader className="justify-between p-3">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="sm"
            color={status === "online" ? "success" : "danger"}
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Zoey Lang
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <MessageButtons />
      </CardHeader>
      <CardBody className="p-2">
        <div className="overflow-y-auto flex flex-col gap-2 pb-3">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="chat-card">
              <MCBubble recieved={Math.random() > 0.5} />
            </div>
          ))}
        </div>
      </CardBody>
      <CardFooter className="pb-5">
        <Input
          id="chat-input"
          placeholder="Üzenet"
          endContent={
            <>
              <div className="z-50">
                <EmojiPicker />
              </div>
              <button className="btn btn-primary">Küldés</button>
            </>
          }
        />
      </CardFooter>
    </Card>
  );
};

export default MCPanel;
