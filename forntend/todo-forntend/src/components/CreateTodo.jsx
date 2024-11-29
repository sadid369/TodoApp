// import React from "react";

import { useState } from "react";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        style={{ padding: "10px", margin: "10px" }}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Description"
        style={{ padding: "10px", margin: "10px" }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button
        style={{ padding: "10px", margin: "10px" }}
        onClick={() => {
          fetch("http://192.168.0.104:7000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((response) => {
            response.json().then((data) => {
              // console.log(data);
            });
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
