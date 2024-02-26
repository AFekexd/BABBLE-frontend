import {
    Avatar,
    Badge,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Input,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Tab,
    Tabs,
    Tooltip,
} from "@nextui-org/react";
import {
    MdAdd,
    MdCall,
    MdGroup,
    MdPerson,
    MdSend,
    MdVideoCall,
    MdWarning,
} from "react-icons/md";
import ChatItem from "../components/Chat/ChatItem";
import "../components/Chat/Fullsized/fullsizedChat.css";
const Messages = () => {
    const dummyMessages = [
        {
            id: 1,
            content: "Hello",
            recieved: true,
            type: "text",
            name: "User1",
            timestamp: "2021-09-01T12:00:00",
        },
        {
            id: 2,
            content: "Hi",
            recieved: false,
            type: "text",
            name: "User2",
            timestamp: "2021-09-01T12:00:00",
        },
        {
            id: 3,
            content: "How are you?",
            recieved: true,
            type: "text",
            name: "User1",
            timestamp: "2021-09-01T12:00:00",
        },
        {
            id: 4,
            content:
                "I'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fineI'm fine",
            recieved: false,
            type: "text",
            name: "User2",
            timestamp: "2021-09-01T12:00:00",
        },
        {
            id: 5,
            content: "https://i.imgur.com/7k12EPD.png",
            recieved: true,
            type: "image",
            name: "User1",
            timestamp: "2021-09-01T12:00:00",
        },
        //url
        {
            id: 6,
            content: "https://www.youtube.com/watch?v=3zrSoHgAAWo",
            recieved: false,
            type: "video",
            name: "User2",
            timestamp: "2021-09-01T12:00:00",
        },
        //link
        {
            id: 7,
            content: "https://www.youtube.com/watch?v=3zrSoHgAAWo",
            recieved: true,
            type: "link",
            name: "User1",
            timestamp: "2021-09-01T12:00:00",
        },
    ];

    return (
        <div className="chat-container">
            <div className="chat-left">
                <Tabs className="chat-tabs">
                    <Tab
                        title={
                            <Tooltip content="Barátok" placement="bottom">
                                <div className="chat-tab">
                                    <Badge
                                        color="danger"
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
                                <div className="chat-friendlist">asd</div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab
                        title={
                            <Tooltip content="Csoportok" placement="bottom">
                                <div className="chat-tab">
                                    <Badge
                                        color="danger"
                                        content="10"
                                        placement="bottom-right"
                                    >
                                        <MdGroup size={30} />
                                    </Badge>
                                </div>
                            </Tooltip>
                        }
                    >
                        <Card>
                            <CardBody>
                                <div className="chat-group-list">
                                    <div className="group-list-item">
                                        <Badge color="success" content="10">
                                            <Avatar
                                                size="md"
                                                isBordered
                                                src="https://i.imgur.com/7k12EPD.png"
                                            />
                                        </Badge>
                                        <div className="group-info">
                                            <h3>User1, User2, User3</h3>
                                            <p>
                                                teszt szöveg ami hosszú nagyon
                                                nagyon
                                            </p>
                                        </div>
                                    </div>
                                    <div className="group-list-item">
                                        <Badge color="success" content="10">
                                            <Avatar
                                                size="md"
                                                isBordered
                                                src="https://i.imgur.com/7k12EPD.png"
                                            />
                                        </Badge>
                                        <h3>TESZT ELEK</h3>
                                    </div>
                                    <div className="group-list-item">
                                        <Badge color="success" content="10">
                                            <Avatar
                                                size="md"
                                                isBordered
                                                src="https://i.imgur.com/7k12EPD.png"
                                            />
                                        </Badge>
                                        <h3>TESZT ELEK</h3>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
            <div className="chat-right">
                <div className="chat">
                    <div className="chat-header">
                        <div className="chat-header-left">
                            <Avatar
                                size="md"
                                isBordered
                                color="success"
                                src="https://i.imgur.com/7k12EPD.png"
                            />
                            <h2>TESZT ELEK</h2>
                        </div>
                        <div className="chat-header-right">
                            <ButtonGroup size="lg" variant="light">
                                <Button
                                    color="primary"
                                    isIconOnly
                                    aria-label="Call"
                                >
                                    <MdCall />
                                </Button>
                                <Button
                                    color="primary"
                                    isIconOnly
                                    aria-label="Video call"
                                >
                                    <MdVideoCall />
                                </Button>
                                <Popover placement="bottom">
                                    <PopoverTrigger>
                                        <Button
                                            color="warning"
                                            isIconOnly
                                            aria-label="Warning"
                                        >
                                            <MdWarning />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <Button
                                            className="text-tiny"
                                            color="secondary"
                                            radius="none"
                                        >
                                            Felhasználónév másolása
                                        </Button>
                                        <Button
                                            className="text-tiny"
                                            color="danger"
                                            radius="none"
                                        >
                                            Felhasználó jelentése
                                        </Button>
                                    </PopoverContent>
                                </Popover>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="chat-messages">
                        {dummyMessages.map((message) => (
                            <ChatItem key={message.id} chat={message} />
                        ))}
                    </div>
                </div>
                <div className="chat-footer">
                    <div className="chat-input">
                        <Input
                            startContent={
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={() => console.log("asd")}
                                >
                                    <MdAdd />
                                </button>
                            }
                            endContent={
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={() => console.log("asd")}
                                >
                                    <MdSend />
                                </button>
                            }
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
