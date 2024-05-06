import { Card } from "@nextui-org/react";

const MCBubble = ({ recieved }) => {
  return (
    <Card
      className={
        "" + (recieved ? "bg-primary" : "bg-success-100") + " p-2 rounded-lg"
      }
    >
      <div className="flex">
        <div className="flex-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quos.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MCBubble;
