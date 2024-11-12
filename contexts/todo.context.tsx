import React, { createContext, useContext, useState } from 'react';

export interface Todo {
  id: number;
  title: string;
  desc: string;
  isDone: boolean;
}

interface TodoContextProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleAddTodo: (title: string) => void;
  handleUpdateTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextProps>({
  todoList: [],
  setTodoList: () => {},
  handleAddTodo: () => {},
  handleUpdateTodo: () => {},
  handleDeleteTodo: () => {},
});

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      desc: 'Todo description...',
      isDone: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
  };

  const handleUpdateTodo = (id: number) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodoList(newTodoList);
  };

  const handleDeleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        handleAddTodo,
        handleDeleteTodo,
        handleUpdateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
