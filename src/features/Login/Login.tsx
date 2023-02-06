
import { useFormik } from 'formik'
import { Navigate, NavLink } from 'react-router-dom'
import SuperInputText from '../../common/SuperInputText/SuperInputText'

import SuperButton from '../../common/SuperButton/SuperButton'
import React from 'react'
import s from './Login.module.css'
import {useDispatch, useSelector} from 'react-redux'
import SuperCheckbox from '../../common/SuperCheckbox/SuperCheckbox'
import {AppRootStateType} from "../../App/stor";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
 export const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: values => {
            const errors: FormikErrorType = {}

            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (values.password.length < 9) {
                errors.password = 'Password should be more 8 letters'
            }

            return errors
        },
        onSubmit: values => {
            // dispatch(loginTC(values))
            formik.resetForm() //зачистить поле
        },
    })
    if (isLoggedIn) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div >
            <h3>Sign in</h3>
            <form onSubmit={formik.handleSubmit}>

                <label className={formik.touched.email && formik.errors.email ? s.errorField : ''}>
                    Email
                    <SuperInputText type={'text'} {...formik.getFieldProps('email')} />
                    <div className={s.error}>{formik.touched.email && formik.errors.email && formik.errors.email}</div>
                </label>

                <label className={formik.touched.password && formik.errors.password ? s.errorField : ''}>
                    Password
                    {/*<input type="password" name="password" />*/}

                    <div className={s.error}>{formik.touched.password && formik.errors.password && formik.errors.password}</div>
                </label>

                <div className={s.checkboxField}>
                    <SuperCheckbox {...formik.getFieldProps('rememberMe')}>Remember me</SuperCheckbox>
                </div>

                <p>
                    <NavLink to="/recoveryPassword">Forgot Password?</NavLink>
                </p>
                <div className={s.sendBtn}>
                    <SuperButton xType={'default'} type="submit">
                        Sign in
                    </SuperButton>
                </div>
            </form>
            <p>Already have an account?</p>
            <NavLink to="/signUp">Sign Up</NavLink>
        </div>
    )
}
