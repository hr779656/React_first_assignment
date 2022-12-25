import React from 'react'
import H2_k1_section from './H2_k1_section';
import H2_k2_section from './H2_k2_section';
import H2_k3_section from './H2_k3_section';
function H2_section() {
  return (
    <>
    <div className="carousel-inner">
        <H2_k1_section />
        <H2_k2_section />
        <H2_k3_section />
    </div>
    </>
  )
}

export default H2_section;