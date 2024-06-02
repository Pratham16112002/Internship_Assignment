import { configureStore } from "@reduxjs/toolkit";

const todos = [];

const todoReducer = (state = todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTask = {
        id: action.payload.id,
        title: action.payload.title,
      };
      console.log(newTask);
      return [...state, newTask];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
