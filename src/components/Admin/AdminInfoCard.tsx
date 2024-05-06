import { Card } from "@nextui-org/react";
import { useState, useEffect } from "react";

const AdminInfoCard = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <div className="flex flex-row gap-1 justify-center items-center p-2">
          <h1 className="text-2xl font-bold"> {time}</h1>
        </div>

        <p
          className="text-sm 
        text-gray-500
        "
        >
          Adminisztrátori panel
        </p>
      </div>

      <Card
        className="w-full h-fit p-3 outline-primary"
        style={{ marginTop: "1rem" }}
      >
        Felhasználók: 0
      </Card>
      <Card
        className="w-full h-fit p-3 outline-danger"
        style={{ marginTop: "1rem" }}
      >
        Jelentések: 0
      </Card>
    </div>
  );
};

export default AdminInfoCard;
