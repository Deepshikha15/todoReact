import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
function Register(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [verifyp,setVerifyp]=useState('')
    const dispatch = useDispatch()

    function register(){
        dispatch({
            type:'REGISTER',
            payload:{
                id:new window.Date().getTime(),
                username,
                password,
            }
        })
    }
    return(
        <>
        <input type='text' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type='password' placeholder='Confirm Password' value={verifyp} onChange={(e)=>setVerifyp(e.target.value)}/>
        <input type='button' value='Register' onClick={register}/>
        </>
    )
}
export default Register;