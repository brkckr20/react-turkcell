import React, { useState, createContext, useContext } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "React Öğren",
            completed: false
        },
        {
            id: 2,
            text: "Redux Öğren",
            completed: false
        }
    ]);

    const values = {
        todos,
        setTodos
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