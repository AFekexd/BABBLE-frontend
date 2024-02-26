const ChatItem = ({ key, chat }) => {
    const sent = (timestamp) => {
        const date = new Date(timestamp);
        return `${date.getHours()}:${date.getMinutes()}`;
    };
    const contentRender = (chat) => {
        switch (chat.type) {
            case "text":
                return <p className="text-sm text-gray-200">{chat.content}</p>;
            case "image":
                return (
                    <img
                        src={chat.content}
                        alt="chat"
                        className="w-36 h-36 object-cover"
                    />
                );
            case "video":
                return (
                    <video
                        src={chat.content}
                        controls
                        className="w-36 h-36 object-cover"
                    ></video>
                );
            default:
                return <p className="text-sm text-gray-200">{chat.content}</p>;
        }
    };

    const ChatRender = (chat) => {
        return (
            <div
                key={key}
                className={
                    chat.recieved ? "msg message-recieved" : "msg message-sent"
                }
            >
                <div className="flex-1">
                    <h2 className="font-semibold">{chat.name}</h2>
                    {contentRender(chat)}
                </div>
                <p className="text-xs text-gray-400">{sent(chat.timestamp)}</p>
            </div>
        );
    };

    return ChatRender(chat);
};

export default ChatItem;
