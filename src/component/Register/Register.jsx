import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Register = () => {
    const contextInfo = useContext(authContext)
    const {createUser} = contextInfo
    const navigate = useNavigate()
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        //firebase
        createUser(email, password)
        .then(res => {
            console.log('register successfully', res.user)
            navigate('/countries')

        })
        .catch(err => console.error(err))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <div className="card shrink-0 lg:w-[550px] w-[400px] shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered"/>
                        </div>
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
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary"> Register </button>
                        </div>
                        <Link className='underline mt-2' to="/login"> Already have account? </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;