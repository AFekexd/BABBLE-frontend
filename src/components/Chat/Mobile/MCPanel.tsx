import { Card, Input } from "@nextui-org/react";
import MCBubble from "./MCBubble";

const MCPanel = () => {
  return (
    <Card className="w-full h-full flex flex-col">
      <div className="h-[85%] overflow-y-auto flex flex-col gap-2 pb-3">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="chat-card">
            <MCBubble recieved={Math.random() > 0.5} />
          </div>
        ))}
      </div>
      <div className="flex h-[15%]">
        <Input placeholder="Üzenet" />
      </div>
    </Card>
  );
};

export default MCPanel;
