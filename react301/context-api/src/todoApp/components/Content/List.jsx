import React from 'react'
import { useTodo } from '../../contexts/TodoContext'
import ListItem from './ListItem';

const List = () => {

    const { todos } = useTodo();

    return (
        <ul className="todo-list">
            {
                todos.map(todo => (
                    <ListItem todo={todo} key={todo.id} />
                ))
            }
        </ul>
    )
}

export default List