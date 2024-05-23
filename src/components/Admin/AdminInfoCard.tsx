import { useState, useEffect } from "react";
import { MdFlag, MdGroup } from "react-icons/md";

const AdminInfoCard = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div>
        <div className="flex flex-row gap-1 items-center p-2">
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

      <div className="flex flex-row gap-1 p-2 text-success text-lg">
        <MdGroup />

        <p>0/500</p>
      </div>
      <div className="flex flex-row gap-1 p-2 text-danger text-lg">
        <MdFlag />
        <p>0</p>
      </div>
    </div>
  );
};

export default AdminInfoCard;
