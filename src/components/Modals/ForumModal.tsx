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

const ForumModal = ({ isOpen, onOpenChange }) => {
  /*inputs
title
tags (array)


*/

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
              <Input label="Cím" />
              <SearchSelect />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Bezárás
              </Button>
              <Button color="primary" variant="solid" type="submit">
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
