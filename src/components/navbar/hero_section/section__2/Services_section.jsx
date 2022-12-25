import React from 'react'
import St_section from './St_section';
import Scard1_section from './Scard1_section';
import Scard2_section from './Scard2_section';
import Scard3_section from './Scard3_section';

function Services_section() {
  return (
    <>
        <section id="services" class="services section-padding">
           <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <St_section />
                  </div>
              </div>

              <div class="row">
                  <div class="col-12 col-md-12 col-lg-4">
                    <div class="card text-white text-center bg-dark pb-2">
                       <Scard1_section />
                    </div>
                  </div>
                  
                  <div class="col-12 col-md-12 col-lg-4">
                    <div class="card text-white text-center bg-dark pb-2">
                      <Scard2_section />
                    </div>
                  </div>

                  <div class="col-12 col-md-12 col-lg-4">
                    <div class="card text-white text-center bg-dark pb-2">
                      <Scard3_section />
                    </div>
                  </div>
              </div>
           </div>
      </section>
    </>
  )
}

export default Services_section;