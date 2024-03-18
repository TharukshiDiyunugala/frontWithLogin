import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './../components/Layout/Header';

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username === '' || formData.email === '' || formData.mobileNumber === '' || formData.password === '') {
      setErrorMessages('All fields are required');
      return;
    }
    try {
      setLoading(true);
      setErrorMessages(null);
      const res = await fetch("http://localhost:9000/api/auth/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessages(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setErrorMessages("An error occurred, please try again");
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-5'>Sign Up</h3>
                <form className='d-flex flex-column gap-2' onSubmit={handleSubmit}>
                  <div>
                    <input
                      type='text'
                      name='username'
                      placeholder='Username'
                      className='form.control'
                      onChange={handleChange} />
                  </div>
                  <div>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className='form.control'
                      onChange={handleChange} />
                  </div>
                  <div>
                    <input
                      type='tel'
                      name='mobileNumber'
                      placeholder='Mobile Number'
                      className='form.control'
                      onChange={handleChange} />
                  </div>
                  <div >
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      className='form.control'
                      onChange={handleChange} />
                  </div>
                  <div>
                    <div className='mt-4 d-flex justify-content-center gap-5 align-items-center'>
                      <button className='button2 border-0' type='submit'>Create</button>
                    </div>
                  </div>
                </form>
                {errorMessages && <p className="text-danger">{errorMessages}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
