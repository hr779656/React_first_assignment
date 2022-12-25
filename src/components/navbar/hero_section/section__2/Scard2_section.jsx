import React from 'react'
import Card2_icon_section from './Card2_icon_section'
import Card2_text_sedction from './Card2_text_sedction'
import Card2_p_section from './Card2_p_section'
import Card2_btn_section from './Card2_btn_section'

function Scard2_section() {
  return (
    <>
         <div class="card-body">
                <Card2_icon_section />
                    <Card2_text_sedction />
                        <Card2_p_section />
                   <Card2_btn_section />
            </div>
    </>
  )
}

export default Scard2_section