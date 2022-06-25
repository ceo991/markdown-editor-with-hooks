import React from 'react'
import DisplayModeButton from './DisplayModeButton'
import { marked } from 'marked';

function Preview({changeDisplayMode, content,width}) {
    return (
        <div className={width<=700 ? "preview-mobile":"preview"} >
            <h1>Preview</h1>
            <DisplayModeButton  changeDisplayMode={changeDisplayMode} mode={"preview"}/>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(content)}}/>
        </div>
    )
}

export default Preview