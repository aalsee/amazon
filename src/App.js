import React from 'react';
import './App.css';
import logo from "./logo.svg"
import amazonLogo from './amazon.png';
function Template(){
  return(
    <div className='Template'>
      <h2>Heading</h2>
      <div className='SmallGrid'>
        <div className='Cell'>
          <img src={logo} alt='abc'></img>
          <p>Name</p>
        </div>
        <div className='Cell'>
          <img src={logo} alt='abc'></img>
          <p>Name</p>
        </div>
        <div className='Cell'>
          <img src={logo} alt='abc'></img>
          <p>Name</p>
        </div>
        <div className='Cell'>
          <img src={logo} alt='abc'></img>
          <p>Name</p>
        </div>
      </div>
      <a href='www.google.com'>link</a>
    </div>
  )
}
function App() {
  return (
    <div>
      <div className="NavBar">
        <img src={amazonLogo} alt="Amazon Logo" />
        <div className="NavButtons">
          <p style={{ fontSize: '14px' }}>Delivering to Delhi 110011</p>
          <p style={{ fontWeight: 'bold' }}>Update Location</p>
        </div>
        <input type="text" placeholder="Search Amazon.in" />
        <div className="Drop">
          <button className="DropButton">Language</button>
          <div className="Drop-content">
            <a href="www.google.com">EN</a>
            <a href="www.google.com">HI</a>
            <a href="www.google.com">TA</a>
          </div>
        </div>
        <div className="NavButtons">
          <p style={{ fontSize: '14px' }}>Hello, sign in</p>
          <p style={{ fontWeight: 'bold' }}>Accounts & Lists</p>
        </div>
        <div className="NavButtons">
          <p style={{ fontSize: '14px' }}>Returns</p>
          <p style={{ fontWeight: 'bold' }}>& Orders</p>
        </div>
      </div>
      <div className="Nav2">
        <p>All</p>
        <p>Fresh</p>
        <p>Amazon miniTV</p>
        <p>Sell</p>
        <p>Best Sellers</p>
        <p>Mobiles</p>
        <p>Today's Deals</p>
        <p>Fashion</p>
        <p>Electronics</p>
        <p>Prime</p>
        <p>Home & Kitchen</p>
        <p>New Releases</p>
        <p>Customer Services</p>
        <p>Amazon Pay</p>
        <p>Computers</p>
      </div>
      <div className='Categories'>
        <Template /><Template /><Template /><Template /><Template /><Template /><Template /><Template />
      </div>
      
    </div>
  );
}

export default App;
