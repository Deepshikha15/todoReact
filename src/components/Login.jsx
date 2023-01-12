import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const dispatch = useDispatch();
    const users = useSelector(state => state.users )
    function login(){
        const payload= users.find(user => user.username === username && user.password === password)
        
        if(payload){
            dispatch({
                type:'LOGIN',
                payload,
                
            })
            alert('success')
        }else{
            alert('wrong credentials')
        }
    }
    return(
        <>
        <input type='text' placeholder='User Name' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type='button' value='Login' onClick={login}/>
        </>
    )
}
export default Login;