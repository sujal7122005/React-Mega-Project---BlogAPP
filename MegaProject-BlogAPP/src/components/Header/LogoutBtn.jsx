import React from 'react'
import {useDispatch} from 'react-redux'
import {Logout} from '../../AppWrite_Services/Auth.js'
import authservice from '../../AppWrite_Services/Auth.js'

function LogoutBtn() {
  const dispatch=useDispatch();

  const handleLogout=async()=>{
    authservice.Logout()
      .then(()=>{
        dispatch(Logout());
      })
      .catch((error)=>{
        console.log("Logout Error:",error);
      });
  };


  return (
    <button
    onClick={handleLogout}
    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >Logout</button>
  )
}

export default LogoutBtn