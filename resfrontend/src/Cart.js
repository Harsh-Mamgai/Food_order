import React from 'react'
import { useRef } from 'react';
import OrderClient from './Api/order-client';
import './Cart.css';

export const Cart = (props) => {
    const name = useRef("");
    const phone = useRef("");
    const email = useRef("");
    const address = useRef("");

    const arr = [...props.prod];
    const order = arr.filter(obj =>{
        if(obj.quantity > 0){
            return obj;
        }
    });
    const submitOrder = async(event)=>{
        event.preventDefault();
        var item = "";
        for(const a of order){
            item = item + a.name;
            item = item + " ";
            item = item + a.quantity;
            item = item + ", ";
        }
        var price = 0;
        for(const a of order){
            price = price + (a.quantity*a.price);
        }
        const obj = {
            name: name.current.value,
            phone: phone.current.value,
            email: email.current.value,
            address: address.current.value,
            item: item,
            total: price
        }
        const config = {
            headers: {
            'Authorization': `Bearer ${props.token}`,
            'Content-Type': 'application/json'
            }
        };
        const response = await OrderClient.placeOrder(obj, config);
        alert(response);
    }
  return (
    <div className='container-fluid'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">quantity</th>
                </tr>
            </thead>
            <tbody>
            {
                order.map((obj, index)=>{
                    return <tr>
                        <th scope="row">{index+1}</th>
                        <td>{obj.name}</td>
                        <td>{obj.price}</td>
                        <td>{obj.quantity}</td>
                  </tr>
                })
            }
            </tbody>
        </table>
        <form className='details'>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" ref={name}/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Phone No.</label>
                <input type="tel" className="form-control" id="phone" ref={phone}/>
            </div>
            <div className="mb-3">
                <label for="InputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" ref={email}/>
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" ref={address}/>
            </div>
            <button type="submit" className="btn btn-outline-success" onClick={submitOrder}>Place Order</button>
        </form>
    </div>
  )
}
