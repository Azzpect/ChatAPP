import React, { useState } from 'react';
import "../css/messageArea.css";
import SendIcon from '../assets/SendIcon';

export default function MessageArea() {

    const [message, setMessage] = useState("");
    const [allMessages, setAllMessages] = useState<string[]>([]);

  return (
    <div id="message-area-container">
        <div id="message-container">
          {
            allMessages.map((msg, index) => (
              <h2 id={`${index}`}>{msg}</h2>
            ))
          }
        </div>
        <div id="message-box">
            <input type="text" value={message} name="message" id="message-box" onChange={(e) => {
                setMessage(e.target.value)
            }} placeholder='Type your message....'/>
            <SendIcon onClick={() => {
              let temp: string[] = allMessages;
              temp.push(message)
              setAllMessages(temp)
              setMessage("")
            }}></SendIcon>
        </div>
    </div>
  )
}
