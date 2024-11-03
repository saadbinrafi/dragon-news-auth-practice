import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();

        
        
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // oltarnetive system is
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'))
        console.log(form.get('password'))
    }



    return (
        <div>
            <NavBar></NavBar>

            <div className="card bg-base-100 w-full max-w-mb shrink-0 shadow-2xl lg:w-1/2 mx-auto ">
                <h2 className='text-2xl p-4 my-5 text-center'>Please Register</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='email' placeholder="Photo URL" className="input input-bordered" required />
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className='text-center font-bold'>All Ready have an account  :  <Link to="/" className='text-yellow-400 hover:text-green-500'> Login.</Link> </p>
            </div>
        </div>
    );
};

export default Register;