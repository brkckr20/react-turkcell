import React from 'react';
import { useFormik } from 'formik';
import validations from './validations';
import { useTodo } from '../../../contexts/TodoContext';

const NewTodoForm = () => {

    const { addTodo } = useTodo();

    const formik = useFormik({
        initialValues: {
            text: ""
        },
        onSubmit: (values, bag) => {
            addTodo(values.text)
            bag.resetForm();
        },
        validationSchema: validations
    })
    return (

        <form onSubmit={formik.handleSubmit}>
            <input value={formik.values.text} onChange={formik.handleChange} name="text" className="new-todo" placeholder="What needs to be done?" autoFocus />
        </form>
    )
}

export default NewTodoForm