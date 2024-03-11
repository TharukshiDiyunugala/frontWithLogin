import React from 'react'
import { Link } from 'react-router-dom';
import Header from './../components/Layout/Header';


const Login = () => {
    return (
        <div>
        <Header>   
            </Header> 
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-5'>Sign In</h3>
                                <form action="" className='d-flex flex-column gap-2'>
                                    <div>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            className='form.control' />
                                    </div>
                                    <div className='mt-3'>
                                        <input
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            className='form.control' />
                                    </div>
                                    <div>
                                        <div className='d-flex align-items-center mt-2'>
                                            <input
                                                type='checkbox'
                                                name='rememberMe'
                                                className='form-check-input'
                                            />
                                            <label className='form-check-label ms-2'>Remember Me</label>

                                            <Link to="/forgot-password" className='auth-card-link d-flex'>Forgot Password?</Link>
                                        </div>
                                        <div className=' d-flex justify-content-center '>
                                            <Link to="/Myshop" className='button signIn'>Login</Link>
                                        </div>
                                        <div>
                                            <h9>Don't have account?</h9>
                                            <Link to="/signup" className='auth-card-signup' >Register</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login