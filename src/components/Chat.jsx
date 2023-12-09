import React from "react";
import useWebSocket from "~/hook/useWebSocket";

const Chat = () => {
    const url = import.meta.env.VITE_WEBSOCKET_URL;
    const { messages, sendMessage, error } = useWebSocket(url);

    const handleSubmit = (event) => {
        event.preventDefault();
        const messageInput = event.target.elements.message;
        sendMessage(messageInput.value);
        messageInput.value = "";
    };

    if (error) {
        return <div>Error: {error.message} </div>;
    }

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input name="message" /> <button type="submit"> Send </button>
            </form>
        </div>
    );
};

export default Chat;
