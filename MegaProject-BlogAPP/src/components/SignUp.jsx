import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import authservice from '../AppWrite_Services/Auth.js'
import Butten from './Butten.jsx'
import Input from './Input.jsx'
import Logo from './Logo.jsx'
import {useNavigate, useDispatch} from 'react-router-dom'
import {login as authlogin} from '../ReduxConfiguration/authSlice.js'
import {useForm} from "react-hook-form";

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();

    const signup = async (data) => {
        setError('');
        try {
            const user = await authservice.CreateAccount(data);
            if (user) {
                const userData = await authservice.GetCurrentUser();
                if (userData) {
                    dispatch(authlogin(userData));
                    navigate('/');                   
                }               
            }
            
        } catch (error) {
            setError(error.message);
        }
    }
  return (
    <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        // Logo
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-100px'>
                <Logo width='100%'/>
            </span>

        </div>
        // Title-SignUp to your account
        <h2 className='text-center text-2xl font-bold          leading-tight' >
            Sign up to Create your account
        </h2>
        // Link to Login
        <p className='mt-2 text-center text-base text-black/60'>
            Already have an account?&nbsp;
            <Link 
            to='/login' 
            className='font-medium text-primary transition-all duration-200 hover:underline'>
                Login
            </Link>
        </p>
        //error message
        {
        error &&
        <p className="text-red-600 mt-8 text-center">
            {error}
        </p>
        }
        // Form
        <form 
        onSubmit={handleSubmit(signup)}
        >
            <div className='space-y-5'>
                // Name Input
                <Input 
                label="Name"
                placeholder="Enter your name"
                {...register("name", {required: true})}
                />
                // Email Input
                <Input 
                label="Email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { 
                    required: true,
                    validate: {matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                        .test(value) ||
                        "Email address must be a valid address"}, 
                })}
                />
                // Password Input
                <Input 
                label="Password"
                placeholder="Enter your password"
                type="password"
                {...register("password", {required: true})}
                />
                // Submit Butten
                <Butten
                type="submit"
                className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200'
                >
                    Sign Up
                </Butten>
            </div>

        </form>

        </div>
    </div>
  )
}

export default SignUp