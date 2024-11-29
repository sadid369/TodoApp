// import React from "react";

export default function Todos({ todos }) {
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item._id}>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
            <button
              onClick={() => {
                console.log(item.id);
                fetch(`http://localhost:7000/completed`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ id: item._id }),
                });
              }}
            >
              {item.completed == true ? "completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
