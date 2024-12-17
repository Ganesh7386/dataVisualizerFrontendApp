import React , {useMemo , useContext} from 'react';
import {io} from 'socket.io-client';

export const SocketContext = React.createContext({
    socket : null
});

export const SocketContextProvider = ({children})=> {
    const socket = useMemo(()=>(io("http://localhost:5001" ,  {
        transports: ['websocket'], // Optional: ensure WebSocket transport
      })),[]);
    console.log(socket);

    return (
        <SocketContext.Provider value = {{socket}}>
            {children}
        </SocketContext.Provider>
    )
}
