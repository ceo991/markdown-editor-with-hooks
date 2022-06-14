import './App.css';
import  Split  from 'react-split';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { useState } from 'react';

function App() {

  const [content, setContent] = useState("# h1\n\n## h2\n\n[Google](https://google.com)\n\n```\n\n function(){//this is a function}\n\n ``` \n\n`Array.prototype.map()` \n\n- list item\n\n> a block quote\n\n![The San Juan Mountains are beautiful!](https://live.staticflickr.com/389/31833779864_7ec0b63ffc_h.jpg 'San Juan Mountains') \n\n **a bolded text**")
  const [displayMode, setDisplayMode] = useState("default")


  const handleOnChange = (content)=>{
    setContent(content)
  }

  const changeDisplayMode = (mode) => {
    if(displayMode !== "default"){
      mode="default"
    }
    setDisplayMode(mode)
  }

  return (
    <div>
      {displayMode === "default" ?
          <Split
            sizes={[60, 40]} 
            direction="horizontal" 
            className="split"
          >
              <Editor content={content} changeState={handleOnChange} changeDisplayMode={changeDisplayMode}/>
              <Preview content={content} changeDisplayMode={changeDisplayMode}/>
          </Split> : displayMode === "editor" ? <Editor content={content} changeState={handleOnChange} changeDisplayMode={changeDisplayMode}/> : displayMode === "preview" ?  <Preview content={content} changeDisplayMode={changeDisplayMode}/> : <div><h1>Something is wrong!</h1></div>
        }
      </div>
  );
}

export default App;
