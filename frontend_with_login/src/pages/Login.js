import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Layout/Header";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "./../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage, currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      dispatch(signInFailure("All fields are required"));
      return;
    }
    console.log(formData);
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:9000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
    console.log(currentUser);
  };

  return (
    <div>
      <Header></Header>
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-5">Sign In</h3>
                <form
                  action=""
                  className="d-flex flex-column gap-2"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form.control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-3">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form.control"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className=" d-flex justify-content-center ">
                      <button className="button2 border-0" type="submit">
                        login
                      </button>
                    </div>
                    <div>
                      <h9>Don't have account?</h9>
                      <Link to="/signup" className="auth-card-signup">
                        Register
                      </Link>
                    </div>
                  </div>
                </form>
                {currentUser && (
                  <div>
                    <h3>Welcome, {currentUser.username}!</h3>

                    {/* Add additional user information here */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
