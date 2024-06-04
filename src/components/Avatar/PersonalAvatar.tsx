import { Avatar } from "@nextui-org/react";

const PersonalAvatar = ({
  data,
  color,
}: {
  data: string;
  color: "primary" | "secondary" | "success" | "warning" | "default";
}) => {
  return (
    <>
      <Avatar src={data} size="sm" isBordered showFallback color={color} />
    </>
  );
};

export default PersonalAvatar;
