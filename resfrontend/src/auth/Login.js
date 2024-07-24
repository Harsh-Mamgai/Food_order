import React, {useRef} from 'react'
import './Login.css';
import {UserClient} from '../Api/user-client.js';

export const Login = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleClick = async()=>{
    const obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    const response = await UserClient.login(obj);
    if(response.message === "User Loged in successfully !"){
      props.setToken(response.token);
    }
    alert(response.message);
  }
  return (
    <div className='container-fluid1'>
      <h1 className='heading'>New User please sign up to our site</h1>
      <br/>
      <form className='login'>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" ref={passwordRef}/>
            </div>
            <button type="button" className="btn btn-outline-success" onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}
