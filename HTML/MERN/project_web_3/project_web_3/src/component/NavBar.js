import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>

      <div className="wrapper">
        {/* <div className="multi_color_border" /> */}
        <div className="top_nav">
          <div className="left">
            <div className="logo"><p><span>SIX </span>SEASONS </p></div>
            <div className="search_bar">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="right">
            <ul>
              <li><a href="#">Whats Next</a></li>
              <li><a href="#">LogIn</a></li>
              <li><a href="../Pages/Log_in.js">SignUp</a></li>
              <li><a href="#">You Cart
                <img src='' />
              </a></li>
            </ul>
          </div>
        </div>
        <div className="bottom_nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Top Offers</a></li>
            <li><a href="#">Fruits</a></li>
            <li><a href="#">Vegetables</a></li>
            <li><a href="#">Beverages</a></li>
            <li><a href="#">Snacks</a></li>
            <li><a href="#">Kitchen</a></li>
          </ul>
        </div>
        {/* <div className="banner">
          <img src="https://i.imgur.com/iFaKR9k.png" alt="banner_img" />
        </div> */}
      </div>




    </div>
  )
}

export default NavBar
