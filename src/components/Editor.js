import React from 'react'
import DisplayModeButton from './DisplayModeButton'

function Editor({changeDisplayMode, changeState, content}) {
    return (
        <div className="editor">
            <h1>Markdown Editor</h1>
            <DisplayModeButton changeDisplayMode={changeDisplayMode} mode={"editor"}/>
            <textarea id="editor" rows="50" cols="90" onChange={(e)=>changeState(e.target.value)} value={content}>{content}</textarea>
        </div>
    )
}
export default Editor