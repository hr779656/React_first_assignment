import React from 'react'
import Img1_section from './Img1_section';
import Btn1_section from './Btn1_section';

function H2_k1_section() {
  return (
    <>
      <div className="carousel-item active">
            <Img1_section />
            <div className="carousel-caption">
              <h5>Front end Developer</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet consequatur, voluptas ipsa doloribus facere.</p>
              <Btn1_section />
            </div>
          </div>
    </>
  )
}

export default H2_k1_section;