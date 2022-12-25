import React from 'react'
import H1_section from './H1_section';
import H2_section from './H2_section';
import H3_section from './H3_section';
import H4_section from './H4_section';

function H_section() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <H1_section />
        <H2_section />
        <H3_section />
        <H4_section />
      </div>
  )
}

export default H_section;