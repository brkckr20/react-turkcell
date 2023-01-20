import React from 'react'
import { useTodo } from '../contexts/TodoContext'

const ContentFooter = () => {
    const { todos, filters, setFilters, setTodos } = useTodo();

    const clearCompleted = () => {
        const cloned_todos = [...todos];
        const new_todos = cloned_todos.filter(todo => !todo.completed);
        setTodos(new_todos);

    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length} </strong>
                item{todos.length > 1 && 's'} left
            </span>
            <ul className="filters">
                <li>
                    <a onClick={() => setFilters("all")} href="#/" className={filters === 'all' && 'selected'}>All</a>
                </li>
                <li>
                    <a onClick={() => setFilters("active")} href="#/" className={filters === 'active' && 'selected'}>Active</a>
                </li>
                <li>
                    <a onClick={() => setFilters("completed")} href="#/" className={filters === 'completed' && 'selected'}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
            </button>
        </footer>
    )
}

export default ContentFooter