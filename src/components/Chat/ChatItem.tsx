import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const ChatItem = ({ recieved }) => {
  return (
    <Card
      className={
        "w-fit drop-shadow-md " +
        (recieved ? "bg-gray-700 self-start" : "bg-primary self-end")
      }
    >
      <CardHeader className="p-2">{recieved ? "Zoey Lang" : "You"}</CardHeader>
      <CardBody className="w-full p-2">
        {Array.from({ length: Math.floor(Math.random() * 10) + 1 }).map(
          (_, index) => (
            <div key={index} className="w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quae.
            </div>
          )
        )}
      </CardBody>
      <CardFooter className="p-1">12:12</CardFooter>
    </Card>
  );
};

export default ChatItem;
