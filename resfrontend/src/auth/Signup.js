import React from 'react'
import { useRef } from 'react';
import "./Signup.css";
import {UserClient} from "../Api/user-client.js";

export const Signup = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const handleClick = async()=>{
        if(nameRef.current.value && emailRef.current.value && passwordRef.current.value && typeof passwordRef.current.value === 'number'){
            const obj = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            };
            const response = await UserClient.signup(obj);
            alert(response, " Please login");
        }
        else if(passwordRef.current.value && typeof passwordRef.current.value === 'string'){
            alert("Please fill password between 0 to 9 digit");
        }
        else{
            alert("Please fill all the fields");
        }
    }
  return (
    <div className='container-fluid'>
        <form className='signup'>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">User Name</label>
                <input type="text" placeholder="User Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={nameRef}/>
            </div>
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
