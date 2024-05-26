//@ts-nocheck

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import SearchSelect from "../Search/SearchSelect";
import { useCreateThreadMutation } from "../../features/forum/mainForumApiSlice";
import { useState } from "react";
import { DecodeToken } from "../../features/jwt";
import { useSelector } from "react-redux";

const ForumModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  const [trigger] = useCreateThreadMutation();
  const jwt = useSelector((state: any) => state.user.jwt);
  const decoded = DecodeToken(jwt);

  const [Thread, setThread] = useState<{
    title: string;
    tags: string[];
    userID: string;
  }>({
    title: "",
    tags: ["123"],
    userID: "",
  });

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 bg-primary">
              <h1 className="text-white text-xl">Új Fórum Poszt</h1>
              <p className="text-white text-sm">
                Kérjük töltsd ki az alábbi mezőket.
              </p>
            </ModalHeader>
            <ModalBody>
              <Input
                label="Cím"
                value={Thread.title}
                onChange={(e) =>
                  setThread({ ...Thread, title: e.target.value })
                }
              />
              <SearchSelect />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Bezárás
              </Button>
              <Button
                color="primary"
                variant="solid"
                onPress={() => {
                  trigger({
                    title: Thread.title,
                    tags: Thread.tags,
                    userID: decoded.sub,
                  }).then((res) => {
                    if (res.error) {
                      console.log(res.error);
                    } else {
                      console.log(res.data);
                    }

                    onClose();
                  });
                }}
              >
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ForumModal;
