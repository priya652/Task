import  React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate(); 
    
    const handleSubmit=async(e)=>{
e.preventDefault()
try{
   await  signInWithEmailAndPassword(auth,email,password);
    console.log('login Succesfully');
    navigate('/main');
}catch(err){
    console.log(err)
}
    }
    return(
        <div className='container'>
            <form className='signup-form' onSubmit={handleSubmit}>
<h2>Login</h2>
<label htmlFor='email'>
    Email:
<input type='text' onChange={(e)=>setEmail(e.target.value)}/>
</label>
<label htmlFor='password'>
    Password:
<input type='password' onChange={(e)=>setPassword(e.target.value)} />
</label>
<button type='sumbit'>Login</button>
<p>Don1t have account? <Link to='/signup'>Sign Up</Link> </p>
            </form>

        </div>
    )
}
export default Login;