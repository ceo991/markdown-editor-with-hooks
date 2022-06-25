import React from 'react'
import DisplayModeButton from './DisplayModeButton'

function Editor({changeDisplayMode, changeState, content,width ,displayMode}) {
    return (
        <div className={width<=700 ? "editor-mobile":"editor"}>
            <h1>Markdown Editor</h1>
            <DisplayModeButton changeDisplayMode={changeDisplayMode} mode={"editor"} displayMode={displayMode}/>
            <textarea id="editor" rows="50" cols="90" onChange={(e)=>changeState(e.target.value)} value={content}>{content}</textarea>
        </div>
    )
}
export default Editor