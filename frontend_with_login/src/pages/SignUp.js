import React from 'react'
import { Link } from 'react-router-dom'
import Header from './../components/Layout/Header';

const SignUp = () => {
    return (
        <div>
               <Header></Header> 
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-5'>Sign Up</h3>
                                <form action="" className='d-flex flex-column gap-2'>
                                    <div>
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='Name'
                                            className='form.control' />
                                    </div>
                                    <div>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            className='form.control' />
                                    </div>
                                    <div>
                                        <input
                                            type='tel'
                                            name='mobile'
                                            placeholder='Mobile Number'
                                            className='form.control' />
                                    </div>
                                    <div >
                                        <input
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            className='form.control' />
                                    </div>
                                    <div>

                                        <div className='mt-4 d-flex justify-content-center gap-5 align-items-center'>
                                            <Link to="/login" className='button2 border-0'>Create</Link>
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

export default SignUp