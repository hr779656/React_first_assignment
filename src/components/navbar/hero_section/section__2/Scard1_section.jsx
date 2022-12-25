import React from 'react'
import Card1_icon_section from './Card1_icon_section'
import Card1_text_section from './Card1_text_section'
import Card1_p_section from './Card1_p_section'
import Card1_btn_section from './Card1_btn_section'

function Scard1_section() {
  return (
    <>
        <div class="card-body">
            <Card1_icon_section />
                  <Card1_text_section />
                    <Card1_p_section />
                    <Card1_btn_section />
         </div>
    </>
  )
}

export default Scard1_section