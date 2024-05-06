import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import "../components/Chat/Fullsized/fullsizedChat.css";
import FChatLeftCard from "../components/Chat/Fullsized/FChatLeftCard";
import FChatRightCard from "../components/Chat/Fullsized/FChatRightCard";
import MobileChat from "../components/Chat/Mobile/MobileChat";
const Messages = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="hidden sm:flex flex-row p-1 md:p-3 lg:p-10  h-[92dvh] gap-5">
        <FChatLeftCard onOpen={onOpen} />
        <FChatRightCard />
      </div>
      <div className="flex sm:hidden h-[90dvh]">
        <MobileChat />{" "}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2>Új csoport</h2>
                <p>Adja meg a csoport nevét és tagjait</p>
              </ModalHeader>
              <ModalBody>
                <Input label="Csoport neve" placeholder="Csoport neve" />
                <Input label="Tagok" placeholder="Felhasználók" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Mégse
                </Button>
                <Button color="primary" onPress={onClose}>
                  Létrehozás
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Messages;
