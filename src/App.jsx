import React from "react";

import Chat from "~/components/Chat";
import MessagesContextProvider from "~/contexts/MessagesContext";
import "./App.css";

const App = () => {
    return (
        <MessagesContextProvider>
            <Chat />
        </MessagesContextProvider>
    );
};

export default App;
