import React, { useState, useEffect, useRef } from "react";

function useWebSocket(url) {
    const [messages, setMessages] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [error, setError] = useState(null);

    const ws = useRef(null);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => {
            ws.current = socket;
            setIsReady(true);
        };

        socket.onclose = () => setIsReady(false);

        return () => {
            if (ws.current) {
                socket.close();
            }
        };
    }, []);

    useEffect(() => {
        if (!ws.current) return;

        ws.current.onmessage = (e) => {
            if (!isReady) return;

            const receivedMessage = e.data;
            setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        };
    }, [isReady]);

    const sendMessage = (message) => {
        if (isReady) {
            ws.current.send(message);
        }
    };
    return { messages, sendMessage, error };
}

export default useWebSocket;
