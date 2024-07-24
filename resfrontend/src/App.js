import './App.css';
import {Header} from "./Header.js";
import {Body} from "./Body.js";
import {Routes, Route} from 'react-router-dom';
import { Login } from './auth/Login.js';
import { Signup } from './auth/Signup.js';
import { useState } from 'react';
import {Cart} from './Cart.js';

function App() {
  const [token, setToken] = useState("");
  const [prod, setProd] = useState([]);
  return (
    <div className="App">
      <Header token = {token} setToken = {setToken} prod={prod} setProd={setProd}/>
      <Routes>
        <Route path="" element = {<Body prod={prod} setProd={setProd}/>}/>
      </Routes>
      <Routes>
        <Route path="signup" element = {<Signup/>}/>
        <Route path="login" element = {<Login token = {token} setToken = {setToken}/>}/>
      </Routes>
      <Routes>
        <Route path="cart" element={<Cart prod={prod} setProd={setProd} token={token} setToken={setToken}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
