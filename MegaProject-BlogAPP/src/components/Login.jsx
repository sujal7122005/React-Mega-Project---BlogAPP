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
                const userData = await authservice.GetCurrentUser();
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
    <div className='flex items-center justify-center w-full min-h-[80vh] py-12 px-4'>
        <div className='mx-auto w-full max-w-md bg-white rounded-2xl p-8 shadow-xl border border-slate-100'>
        <div className='mb-6 flex justify-center'>
            <span className='inline-block w-20'>
                <Logo width='100%'/>
            </span>
        </div>
        <h2 className="text-center text-3xl font-bold text-slate-800 mb-2">
            Welcome back
        </h2>
        <p className="text-center text-slate-500 mb-8">
                Don&apos;t have an account?&nbsp;
                <Link to="/signup" 
                className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                    Sign up 
                </Link>
        </p>
        {
        error && 
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 text-center text-sm">
            {error}
        </div>
        }
        <form 
        onSubmit={handleSubmit(login)}
        >
            <div className='space-y-5'>
                <Input 
                label="Email"
                type="email"
                placeholder="you@example.com"
                {...register("email", { 
                    required: true,
                    validate: {matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                        .test(value) ||
                        "Email address must be a valid address"}, 
                })}
                />
                <Input 
                label="Password"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                />
                <Butten 
                type="submit"
                className="w-full py-3"
                >
                    Sign in               
                </Butten>

            </div>

        </form>
        </div>
    </div>
  ) 
}

export default Login