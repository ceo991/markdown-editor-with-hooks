
import React from 'react'

function DisplayModeButton({changeDisplayMode, mode}) {
  return (
    <button onClick={()=>changeDisplayMode(mode)} style={{display:"block"}}>Change</button>
  )
}

export default DisplayModeButton