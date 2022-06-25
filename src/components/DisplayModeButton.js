
import { faExpand, faMinimize } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function DisplayModeButton({changeDisplayMode, mode, displayMode}) {
  return (
  <button onClick={()=>changeDisplayMode(mode)} style={{position:"absolute", background:"none", border: "none", top:"0",right:"0"}}>
    {displayMode === "default" ? <FontAwesomeIcon icon={faExpand} size="2x"/> : <FontAwesomeIcon icon={faMinimize} size="2x"/>}
  </button>
  )
}

export default DisplayModeButton