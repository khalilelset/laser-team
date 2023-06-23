import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";
function Socket() {
const [response, setResponse] = useState(0);
useEffect(() => {
  const socket = socketIOClient(ENDPOINT);
  socket.on("connection", count => {
    setResponse(count);
  });
  return () => socket.disconnect();
}, []);
return (
<h1 style={{ backgroundColor: 'gray', paddingBottom: '300px', textAlign: 'center', fontSize: '100px', paddingTop:"300px", 
fontFamily: 'Helvetica', color: 'white',}}>
The number of people who visited the store <br /> <br />{response}
</h1>
);
}
export default Socket;
