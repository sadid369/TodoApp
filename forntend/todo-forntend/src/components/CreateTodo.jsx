// import React from "react";

export default function CreateTodo() {
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        style={{ padding: "10px", margin: "10px" }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Description"
        style={{ padding: "10px", margin: "10px" }}
      />
      <br />
      <br />
      <button style={{ padding: "10px", margin: "10px" }}>Add a todo</button>
    </div>
  );
}
