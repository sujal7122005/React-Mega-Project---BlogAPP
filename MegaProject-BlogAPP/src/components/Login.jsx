import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import authservice from '../AppWrite_Services/Auth.js'
import Butten from './Butten.jsx'
import Input from './Input.jsx'
import Logo from './Logo.jsx'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login as authlogin} from '../ReduxConfiguration/authSlice.js'
import {useForm} from "react-hook-form";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();

    const login = async (data) => {
        setError('');
        try {
            const user = await authservice.Login(data.email, data.password);
            if (user) {
                const userData = await authservice.GetUserData();
                if (userData) {
                    dispatch(authlogin(userData));
                    navigate('/');
                }                
            }            
        } catch (error) {
            setError(error.message);
        }
    };

  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        // Logo
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-100px'>
                <Logo width='100%'/>
            </span>
        </div>
        // Title-SignIn to your account
        <h2 className="text-center text-2xl font-bold leading-tight">
            Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link to="/signup" 
                className="font-medium text-black hover:underline">
                    Sign up
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
        onSubmit={handleSubmit(login)}
        className='mt-8'
        >
            <div className='space-y-5'>
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
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                />
                // Submit Butten
                <Butten 
                type="submit"
                className="w-full"
                text="Sign In"
                />

            </div>

        </form>
        </div>
    </div>
  ) 
}

export default Login