import { Link } from "@nextui-org/react";

const ChatItem = ({ key, chat }: { key: number; chat: any }) => {
    const sent = (timestamp: Date) => {
        const date = new Date(timestamp);
        return `${date.getHours()}:${date.getMinutes()}`;
    };

    const checkEmbed = (url: string) => {
        if (url.includes("spotify")) {
            const embed = url.replace("open.spotify.com", "embed.spotify.com");
            return (
                <>
                    <Link href={url} color="primary">
                        {" "}
                        {url}{" "}
                    </Link>
                    <iframe
                        src={embed}
                        width="100%"
                        height="152"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="spotify-embed"
                    ></iframe>
                </>
            );
        } else {
            const embed = url.replace("watch?v=", "embed/");
            return (
                <>
                <div className="mediaContainer">
                <Link href={url} color="primary">
                        {" "}
                        {url}{" "}
                    </Link>
                    <iframe

                        src={embed}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                </>
            );
        }
    };
    const contentRender = (chat: any) => {
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
            case "link":
                return chat.content.includes("youtube") ||
                    chat.content.includes("spotify") ? (
                    checkEmbed(chat.content)
                ) : (
                    <a href={chat.content} className="text-sm text-blue-400">
                        {chat.content}
                    </a>
                );
            default:
                return <p className="text-sm text-gray-200">{chat.content}</p>;
        }
    };

    const ChatRender = (chat: any) => {
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
