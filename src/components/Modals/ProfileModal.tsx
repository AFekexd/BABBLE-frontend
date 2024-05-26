import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Card,
} from "@nextui-org/react";
import { useState } from "react";
import { User } from "../../types/User";

const ProfileModal = ({ isOpen, onOpenChange }) => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    id: 1,
    name: "tesztelek",
    email: "teszt@teszt.hu",
  } as User);
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      size="lg"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 bg-primary">
              Profil megtekintése
            </ModalHeader>
            <ModalBody>
              {editMode ? (
                <>
                  <Input
                    label="Név"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                  <Input
                    label="Email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-2 p-">
                    <Card></Card>
                    <Card>
                      <p>Név: {user.name}</p>
                      <p>Email: {user.email}</p>
                    </Card>
                  </div>
                </>
              )}

              <button onClick={() => setEditMode(!editMode)}>
                {editMode ? "Mentés" : "Szerkesztés"}
              </button>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProfileModal;
