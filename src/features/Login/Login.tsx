import React from 'react'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from "../../App/stor";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup,TextField} from "@mui/material";



export const SignIn = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);

    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }
            if (!values.password) {
                return {
                    password: 'Password is required'
                }
            }

        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            /*dispatch(myLoginTC(values));*/
        },
    })

    /*if (isLoggedIn) {
        return <Redirect to={"/"} />
    }*/


    return <div>
        <h3>Sign in</h3>
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormGroup>
                    <TextField
                        label="Email"
                        margin="normal"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    <TextField
                        type="password"
                        label="Password"
                        margin="normal"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    <FormControlLabel
                        label={'Remember me'}
                        control={<Checkbox
                            {...formik.getFieldProps("rememberMe")}
                            checked={formik.values.rememberMe}
                        />}
                    />
                    <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                </FormGroup>
            </FormControl>
        </form>
    </div>
}
