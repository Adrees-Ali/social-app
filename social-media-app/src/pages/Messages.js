import React, { useState } from "react";

export default function Messages() {
  const [friends] = useState(["Ali", "Sara", "Usman", "Zara"]);
  const [selectedFriend, setSelectedFriend] = useState("Ali");

 
  const [messages, setMessages] = useState([]);

  const [newMsg, setNewMsg] = useState("");


  const sendMessage = () => {
    if (newMsg.trim() === "") return;
    setMessages([...messages, { from: "You", text: newMsg }]);
    setNewMsg("");
  };

  return (
    <div className="container-fluid">
      <div className="row">

     
        <div className="col-3 border-end vh-100 p-3 bg-light">
          <h5>Chats</h5>
          <ul className="list-group">
            {friends.map((friend, index) => (
              <li
                key={index}
                className={`list-group-item ${
                  selectedFriend === friend ? "active" : ""
                }`}
                onClick={() => setSelectedFriend(friend)}
                style={{ cursor: "pointer" }}
              >
                {friend}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Box */}
        <div className="col-9 d-flex flex-column vh-100">
          <div className="flex-grow-1 p-3 overflow-auto">
            <h6>Chat with {selectedFriend}</h6>
            <hr />
            {messages.length === 0 && (
              <p className="text-muted">No messages yet. Start chatting!</p>
            )}
            {messages.map((msg, index) => (
              <p
                key={index}
                className={`${
                  msg.from === "You" ? "text-end text-primary" : "text-start"
                }`}
              >
                <strong>{msg.from}: </strong>
                {msg.text}
              </p>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 border-top">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type a message..."
                value={newMsg}
                onChange={(e) => setNewMsg(e.target.value)}
              />
              <button className="btn btn-primary" onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
