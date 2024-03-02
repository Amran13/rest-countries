import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Login = () => {
    const contextInfo = useContext(authContext)
    const {logIn} = contextInfo;
    const navigate = useNavigate()
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        //firebase
        logIn(email, password)
        .then(res => {
            console.log('logedIn Successfully', res.user)
            navigate('/countries')
        })
        .catch(err => console.error(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 lg:w-[550px] w-[400px] shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary"> Login </button>
                        </div>
                        <Link className='underline mt-2' to="/register">Don't have account?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;