import React from 'react'
import { useTodo } from '../../contexts/TodoContext'
import ListItem from './ListItem';

let filtered = null

const List = () => {

    const { todos, filters } = useTodo();

    filtered = todos;
    if (filters !== "all") {
        filtered = todos.filter((todo) => filters === 'active' ? todo.completed === false : todo.completed === true)
    }

    return (
        <ul className="todo-list">
            {
                filtered.map(todo => (
                    <ListItem todo={todo} key={todo.id} />
                ))
            }
        </ul>
    )
}

export default List