import React, { useContext, useReducer, useState } from "react";

import { UserContext } from "../../util/UserContext";

async function signin() {
  return { name: "greg", age: 20, email: "dadsfd@gmail.com" };
}
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        count: state.count + 1
      };
    case "REMOVE":
      return {
        todos: state.todos.map((todo, idx) =>
          idx === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
        count: state.count
      };
    default:
      return state;
  }
}
export default () => {
  const { user, setUser } = useContext(UserContext);
  const [text, setText] = useState("");
  const [{ todos, count }, dispatch] = useReducer(reducer, {
    todos: [],
    count: 0
  });
  return (
    <div>
      <h2>{user}</h2>
      <p>The about page</p>
      {user ? (
        <button
          onClick={async () => {
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await signin();
            setUser(user.name);
          }}
        >
          login
        </button>
      )}
      <p>{count}</p>
      {todos.map((todo, idx) => (
        <p
          onClick={() => dispatch({ type: "REMOVE", id: idx })}
          key={todo.text}
          style={{ color: todo.completed ? "red" : "" }}
        >
          {todo.text}
        </p>
      ))}
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", text });
        }}
      >
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        ></input>
      </form>
    </div>
  );
};
