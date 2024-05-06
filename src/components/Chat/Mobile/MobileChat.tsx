import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Badge,
  Tab,
  Tabs,
  Tooltip,
  Divider,
} from "@nextui-org/react";
import { MdChat, MdGroup, MdGroupAdd, MdPerson } from "react-icons/md";
import ChatCard from "../Fullsized/ChatCard";
import ChatGroupCard from "../Fullsized/ChatGroupCard";
import MCPanel from "./MCPanel";

const MobileChat = () => {
  const { isOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="w-full h-95dvh p-2 flex flex-col gap-1">
        <Button
          className="h-[8%] w-full cursor-pointer font-bold"
          onClick={onOpenChange}
          startContent={<MdChat size={30} />}
          color="warning"
        >
          BESZÉLGETÉSEK
        </Button>
        <Divider />
        <div className="h-[90%]">
          <MCPanel />
        </div>
      </div>
      <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2>Beszélgetések</h2>
              </ModalHeader>
              <ModalBody className="p-0">
                <Tabs className="chat-tabs">
                  <Tab
                    title={
                      <Tooltip content="Barátok" placement="bottom">
                        <div className="chat-tab">
                          <Badge
                            color="warning"
                            content="10"
                            placement="bottom-right"
                          >
                            <MdPerson size={25} />
                          </Badge>
                        </div>
                      </Tooltip>
                    }
                  >
                    <div className="chat-friendlist">
                      <ChatCard />
                    </div>
                  </Tab>
                  <Tab
                    className="h-full"
                    title={
                      <Tooltip content="Csoportok" placement="bottom">
                        <div className="chat-tab text-sm">
                          <Badge
                            color="warning"
                            content="10"
                            placement="bottom-right"
                          >
                            <MdGroup size={25} />
                          </Badge>
                        </div>
                      </Tooltip>
                    }
                  >
                    <div className="GroupCards  h-full">
                      <ChatGroupCard />
                      <div className="chat-group-card-footer w-full">
                        <Button
                          className="w-full"
                          color="warning"
                          size="lg"
                          startContent={<MdGroupAdd />}
                        >
                          Új csoport
                        </Button>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Bezárás
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MobileChat;
