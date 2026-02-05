import React from 'react'
import {useDispatch} from 'react-redux'
import authservice from '../../AppWrite_Services/Auth.js'
import { logout } from "../../ReduxConfiguration/authSlice.js";

function LogoutBtn() {
  const dispatch=useDispatch();

  const handleLogout=async()=>{
    authservice.Logout()
      .then(()=>{
        dispatch(logout());
      })
      .catch((error)=>{
        console.log("Logout Error:",error);
      });
  };


  return (
    <button
    onClick={handleLogout}
    className="bg-gradient-to-r from-rose-500 to-red-500 text-white font-medium px-5 py-2 rounded-lg hover:from-rose-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
    >Logout</button>
  )
}

export default LogoutBtn