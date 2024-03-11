import React from 'react'
import { Link } from 'react-router-dom'
import Header from './../components/Layout/Header';

const Resetpassword = () => {
    return (
        <div>
               <Header>
            </Header> 
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-5'>Reset Password</h3>
                                <form action="" className='d-flex flex-column gap-2'>
                                    <div >
                                        <input
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            className='form.control' />
                                    </div>
                                    <div >
                                        <input
                                            type='password'
                                            name='confpassword'
                                            placeholder='Confirm Password'
                                            className='form.control' />
                                    </div>
                                    <div>
                                        <div className='mt-4 d-flex justify-content-center gap-5 align-items-center'>
                                            <Link to="/login" className='button2 border-0'>Ok</Link>
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

export default Resetpassword