import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { MdReportProblem } from "react-icons/md";
import { RiUserUnfollowFill, RiUserFollowFill } from "react-icons/ri";

const MessageButtons = () => {
  const screenSize = window.innerWidth;
  const [isFriend, setIsFriend] = useState(false);
  const { isOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <ButtonGroup>
        <Button
          size="md"
          isIconOnly={screenSize < 768}
          onPress={() => onOpenChange()}
          color={isFriend ? "danger" : "success"}
          startContent={
            isFriend ? <RiUserUnfollowFill /> : <RiUserFollowFill />
          }
        >
          {screenSize > 768 && "Follow"}
        </Button>
        <Button
          size="md"
          isIconOnly={screenSize < 768}
          onPress={() => onOpenChange()}
          color="warning"
          startContent={<MdReportProblem />}
        >
          {screenSize > 768 && "Message"}
        </Button>
      </ButtonGroup>
      <Modal size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>
            <h2>{isFriend ? "Unfollow" : "Follow"}</h2>
          </ModalHeader>
          <ModalBody>
            <p>
              Are you sure you want to {isFriend ? "unfollow" : "follow"} this
              user?
            </p>
            <Button
              color={isFriend ? "danger" : "success"}
              onPress={() => {
                setIsFriend(!isFriend);
                onOpenChange();
              }}
            >
              {isFriend ? "Unfollow" : "Follow"}
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MessageButtons;

/*
 <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
        */
