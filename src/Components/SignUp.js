
import  React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import Login from './Login';

const SignUp=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
e.preventDefault()
try{
   await  createUserWithEmailAndPassword(auth,email,password);
    console.log('account created');
    navigate('/');
}catch(err){
    console.log(err)
}
    }
    return(
        <div className='container'>
            <form className='signup-form' onSubmit={handleSubmit}>
<h2>Sign Up</h2>
<label htmlFor='email'>
    Email:
<input type='text' onChange={(e)=>setEmail(e.target.value)}/>
</label>
<label htmlFor='password'>
    Password:
<input type='password' onChange={(e)=>setPassword(e.target.value)} />
</label>
<button type='sumbit'>Sign Up</button>
<p>Already Register? <Link to='/'>Login</Link> </p>
            </form>

        </div>
    )
}
export default SignUp;