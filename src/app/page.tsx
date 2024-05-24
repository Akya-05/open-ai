"use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  return (
    <div>
      <h1>ASK ME</h1>

      <div className="flex">
        <div>
          <h1></h1> chat History
          <div>
            {messages.map((message) => {
              return <>{message}</>;
            })}
          </div>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
