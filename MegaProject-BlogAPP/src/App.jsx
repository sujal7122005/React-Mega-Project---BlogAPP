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
      // .catch((error) => {
      //   console.log("No user logged in", error);
      // })
      .finally(() => {
        setLoading(false);
      });
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100'>
      <div className='animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent'></div>
    </div>
  )
}

export default App
