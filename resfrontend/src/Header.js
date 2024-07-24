import React from 'react'
import "./Header.css";
import { NavLink } from 'react-router-dom';
import {ApiClient} from './Api/api-client.js';

export const Header = (props) => {
    const getItems = async()=>{
        const arr = [...props.prod];
        if(arr.length > 0){
            const pre = arr.filter((obj)=>{
                if(obj.quantity > 0){
                    return obj;
                }
            });
            const response = await ApiClient.read();
            for(var a of pre){
                for(var b of response){
                    if(a.name === b.name){
                        b.quantity = b.quantity + a.quantity;
                    }
                }
            }
            props.setProd(response);
        }
        else{
            const response = await ApiClient.read();
            props.setProd(response);
        }
    }
    const getAppetizers = async()=>{
        const config = {
            headers: {
            'Authorization': `Bearer ${props.token}`
            }
        };
        const response = await ApiClient.readAppetizers(config);
        if(typeof response === 'object'){
            props.setProd(response);
        }
        else{
            alert(response);
        }
    }
    const getMainCourse = async()=>{
        const config = {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        };
        const response = await ApiClient.readMainCourse(config);
        if(typeof response === 'object'){
            props.setProd(response);
        }
        else{
            alert(response);
        }
    }
    const getDeserts = async()=>{
        const config = {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        };
        const response = await ApiClient.readDeserts(config);
        if(typeof response === 'object'){
            props.setProd(response);
        }
        else{
            alert(response);
        }
    }
    const getDrinks = async()=>{
        const config = {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        };
        const response = await ApiClient.readDrinks(config);
        if(typeof response === 'object'){
            props.setProd(response);
        }
        else{
            alert(response);
        }
    }
  return (
    <div className='header'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKv1mnUnZJlMHK6_e2vokcP7Mo-61LLv5zQ&s" alt="Network issue"/>
                <h1 className="navbar-brand">Restaurant Website</h1>
                <div className="custom" id="navbarSupportedContent">
                    <ul className="custom-harsh">
                        <li className="nav-item">
                            <NavLink to=""><button className="bg-body-tertiary btn1" onClick={getItems}><a className="nav-link" href="#">All items</a></button></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to=""><button className="bg-body-tertiary btn1" onClick={getAppetizers}><a className="nav-link" href="#">Appetizers</a></button></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to=""><button className="bg-body-tertiary btn1" onClick={getMainCourse}><a className="nav-link" href="#">Main Course</a></button></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to=""><button className="bg-body-tertiary btn1" onClick={getDeserts}><a className="nav-link" href="#">Deserts</a></button></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to=""><button className="bg-body-tertiary btn1" onClick={getDrinks}><a className="nav-link" href="#">Drinks</a></button></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hy d-grid gap-2 d-md-flex justify-content-md-end">
                    <NavLink to="cart"><button type="button" className="btn btn-outline-success">View Cart</button></NavLink>
                    <NavLink to="signup"><button type="button" className="btn btn-outline-success">SignUp</button></NavLink>
                    <NavLink to="login"><button type="button" className="btn btn-outline-success">Login</button></NavLink>
                </div>
            </div>
        </nav>
    </div>
  )
}
