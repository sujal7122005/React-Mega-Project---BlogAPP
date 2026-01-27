import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'
import { useDispatch } from 'react-redux';
import  authservice  from './AppWrite_Services/Auth.js';
import { login, logout } from './ReduxConfiguration/authSlice.js';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservice.GetCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("No user logged in", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-center bg-gray-700'>
      <div className='w-full block content-center'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
