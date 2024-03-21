import {io} from "socket.io-client";

export const initSocket=async()=>{
    const options={
        "force new connection":true,
        reconnectionAttempt:"Infinity",
        timeout:1000,
        transports:["websocket"]
    };
    // import.meta.env.REACT_APP_BACKEND_URL,options
    return io(import.meta.env.REACT_APP_BACKEND_URL,options);
}