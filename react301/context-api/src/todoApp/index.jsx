import React from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { TodoProvider } from './contexts/TodoContext';

import './todo.css'

const Todo = () => {
    return (
        <TodoProvider>
            <section className='todoapp'>
                <Header />
                <Content />

            </section>
            <Footer />
        </TodoProvider>
    )
}

export default Todo