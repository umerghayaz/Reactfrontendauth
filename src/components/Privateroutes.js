import React from 'react'
import AuthUser from './AuthUser'
import { Navigate,Route,Outlet } from 'react-router-dom';

function Privateroutes({ children }) {
    const {getToken} = AuthUser();

  return (

    getToken !='null'? children : <Navigate to='/login'/>       
  )
}

export default Privateroutes
