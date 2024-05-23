import { Card, CardBody, CardHeader } from "@nextui-org/react";

const MCBubble = ({ recieved }) => {
  return (
    <Card
      className={
        "" +
        (recieved ? " bg-gray-700 mr-3" : "bg-primary ml-3") +
        "  p-1  rounded-lg"
      }
    >
      <CardHeader className="p-0 pl-1">
        <div className="flex flex-row gap-1 items-start justify-center">
          <h4 className="text-small font-semibold leading-none text-default-600">
            {recieved ? "Zoey Lang" : "You"}
          </h4>
        </div>
      </CardHeader>
      <CardBody className="p-1 text-sm">
        <div className="flex-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default MCBubble;
