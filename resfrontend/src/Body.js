import React from 'react'
import "./Body.css";

export const Body = (props) => {
  function decrement(index){
    const updated = [...props.prod];
    if(updated[index].quantity > 0){
      updated[index].quantity = updated[index].quantity - 1;
      props.setProd(updated);
    }
  }
  function increment(index){
    const updated = [...props.prod];
    updated[index].quantity = updated[index].quantity + 1;
    props.setProd(updated);
  }
  return (
    <div className="container-fluid">
        {props.prod.map((item, index)=>{
          return <div className="card" key={index}>
            <img src={item.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">Price :- {item.price}Rs.</p>
              <p className="card-text">{item.type}</p>
            </div>
            <div className='flex'>
                <button onClick={()=>{decrement(index)}}>-</button>
                <input type="text" value={item.quantity}/>
                <button onClick={()=>{increment(index)}}>+</button>
              </div>
          </div>
        })}
    </div>
  )
}
