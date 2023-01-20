import React, { useState, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'


const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [filters, setFilters] = useState("all");

    const addTodo = (text) => {
        setTodos(prev => [...prev, { id: uuidv4(), completed: false, text }])
    }

    const toggleTodo = (id) => {
        const cloned_todos = [...todos];
        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
        const item = todos[itemIndex];
        item.completed = !item.completed;
        setTodos(cloned_todos)
    }

    const destroyTodo = (id) => {
        const cloned_todos = [...todos];
        const itemIndex = cloned_todos.findIndex(todo => todo.id === id);
        cloned_todos.splice(itemIndex, 1);
        setTodos(cloned_todos)
    }

    const values = {
        todos,
        setTodos,
        addTodo,
        toggleTodo,
        destroyTodo,
        filters,
        setFilters
    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => {
    const context = useContext(TodoContext);

    if (context === undefined) {
        throw new Error("useTodo hook must be call inside TodoProvider component")
    }

    return context;
}