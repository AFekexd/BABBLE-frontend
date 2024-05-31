import { Avatar } from "@nextui-org/react";

const PersonalAvatar = ({ data, color }) => {
  return (
    <>
      <Avatar src={data} size="sm" isBordered showFallback color={color} />
    </>
  );
};

export default PersonalAvatar;
