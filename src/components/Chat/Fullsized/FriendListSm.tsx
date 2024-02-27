import {
    Avatar,
    Badge,
    Button,
    Card,
    CardBody,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Tab,
    Tabs,
    Tooltip,
    useDisclosure,
} from "@nextui-org/react";
import { MdGroup, MdPerson } from "react-icons/md";

const FriendListSm = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="menu">
            <Button onPress={onOpen}>Open Modal</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Keresés
                            </ModalHeader>
                            <ModalBody>
                                <Tabs>
                                    <Tab
                                        title={
                                            <Tooltip
                                                content="Barátok"
                                                placement="bottom"
                                            >
                                                <div className="chat-tab">
                                                    <Badge
                                                        color="warning"
                                                        content="10"
                                                        placement="bottom-right"
                                                    >
                                                        <MdPerson size={30} />
                                                    </Badge>
                                                </div>
                                            </Tooltip>
                                        }
                                    >
                                        <Card>
                                            <CardBody>
                                                <div className="chat-friendlist">
                                                    asdasd
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Tab>
                                    <Tab
                                        title={
                                            <Tooltip
                                                content="Csoportok"
                                                placement="bottom"
                                            >
                                                <div className="chat-tab">
                                                    <Badge
                                                        color="warning"
                                                        content="10"
                                                        placement="bottom-right"
                                                    >
                                                        <MdGroup size={30} />
                                                    </Badge>
                                                </div>
                                            </Tooltip>
                                        }
                                    >
                                        <div className="">
                                            <div className="chat-group-card-body">
                                                <div className="chat-group-list">
                                                    <div className="group-list-item">
                                                        <Badge
                                                            color="warning"
                                                            content="10"
                                                        >
                                                            <Avatar
                                                                size="md"
                                                                isBordered
                                                                src="https://i.imgur.com/7k12EPD.png"
                                                            />
                                                        </Badge>
                                                        <div className="group-info">
                                                            <h3>
                                                                User1, User2,
                                                                User3
                                                            </h3>
                                                            <p>
                                                                teszt szöveg ami
                                                                hosszú nagyon
                                                                nagyon
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};
export default FriendListSm;
