import React, { useState } from 'react'

function Selection(props) {
  const { nextBackground,applyColor } = props;  
  const [backgroundColor, setBackgroundColor] = useState(nextBackground);
  
  //console.log(nextBackground)  
  return (
    <div className='fix-box subheading' style={{backgroundColor: `${backgroundColor.background}` }}
      onClick={() => { applyColor(setBackgroundColor)}} >
      Selection
    </div>
  )
}

export default Selection

<<<<<<< HEAD

=======
>>>>>>> f6a3245d5cd255190ff10ad19c782cd63cd469a3
