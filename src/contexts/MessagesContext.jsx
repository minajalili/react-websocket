import React, { createContext, useContext, useEffect, useState } from "react";

const initMessages = {
    messages: [],
};

const getInitialState = () => {
    const messages = localStorage.getItem("messages");
    return messages ? JSON.parse(messages) : initMessages;
};

export const MessagesContext = createContext();

const MessagesContextProvider = (props) => {
    const [messages, setMessages] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(messages));
    }, [messages]);

    const addMessages = (newMessage) => {
        console.log(newMessage);
        setMessages((prev) => ({
            ...prev,
            messages: [...prev.messages, newMessage],
        }));
    };

    return <MessagesContext.Provider value={{ addMessages, ...messages }}>{props.children}</MessagesContext.Provider>;
};

export const useMessages = () => useContext(MessagesContext);

export default MessagesContextProvider;
