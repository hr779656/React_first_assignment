import React from 'react'
import Logo_navbar from './Logo_navbar';
import Tb_navbar from './Tb_navbar';
import Item1_navbar from './Item1_navbar';
import Item2_navbar from './Item2_navbar';
import Item3_navbar from './Item3_navbar';
import Item4_navbar from './Item4_navbar';
import Item5_navbar from './Item5_navbar';
function Navbar() {
  return (
   

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <Logo_navbar />
          <Tb_navbar />
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <Item1_navbar />
              <Item2_navbar />
              <Item3_navbar />
              <Item4_navbar />
              <Item5_navbar />  
            </ul> 
          </div>
        </div>
      </nav> 
  )
}

export default Navbar;
