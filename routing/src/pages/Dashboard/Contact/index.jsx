import React from 'react';
import { useFormik } from 'formik';
import validations from './validation'

const Contact = () => {

    const { values, handleChange, handleSubmit, handleBlur, isSubmitting, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            message: ""
        },
        onSubmit: async (values, bag) => {
            await new Promise((r) => setTimeout(r, 1000));
            console.log(values);

            // backend'den hatalı isteğin alınması
            if (values.email === "aynur.cevik533@gmail.com") {
                return bag.setErrors({ email: "Bu mail adresi zaten kullanılıyor." })
            }

            //form resetleme
            bag.resetForm();
        },
        validationSchema: validations
    });

    return (
        <div>
            <h1>contact</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    disabled={isSubmitting}
                />
                {errors.email && touched.email && (<div className='errors'>{errors.email}</div>)}
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    disabled={isSubmitting}
                />
                {errors.password && touched.password && (<div className='errors'>{errors.password}</div>)}
                <textarea
                    name="message"
                    placeholder='Your Message'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    disabled={isSubmitting}
                />
                {errors.message && touched.message && (<div className='errors'>{errors.message}</div>)}
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Gönderiliyor" : "Gönder"}
                </button>
            </form>
        </div>
    )
}

export default Contact