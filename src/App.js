import './App.css';
import Split  from 'react-split';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { useEffect, useState } from 'react';

function App() {

  const [content, setContent] = useState("# h1\n\n## h2\n\n[Google](https://google.com)\n\n```\n\n function(){//this is a function}\n\n ``` \n\n`Array.prototype.map()` \n\n- list item\n\n> a block quote\n\n![The San Juan Mountains are beautiful!](https://live.staticflickr.com/389/31833779864_7ec0b63ffc_h.jpg 'San Juan Mountains') \n\n **a bolded text**")
  const [displayMode, setDisplayMode] = useState("default")
  const [width,setWidth] = useState(window.innerWidth)
  const [direction,setDirecton]=useState()
  const [split,setSpilt]=useState()

  useEffect(() => {
    window.addEventListener("resize", () => {setWidth(window.innerWidth)})
  },[])

  useEffect(() => {
    setDirecton(width <= 700 ? "vertical" : "horizontal")
    setSpilt(width <= 700 ? "split-mobile" : "split")
  },[width])

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
            sizes={[50, 50]} 
            direction={direction} 
            className={split}
          >
              <Editor content={content} changeState={handleOnChange} changeDisplayMode={changeDisplayMode} width={width} displayMode={displayMode}/>
              <Preview content={content} changeDisplayMode={changeDisplayMode} width={width} displayMode={displayMode}/>
          </Split> : displayMode === "editor" ? <Editor content={content} changeState={handleOnChange} changeDisplayMode={changeDisplayMode} width={width} displayMode={displayMode}/> : displayMode === "preview" ?  <Preview content={content} changeDisplayMode={changeDisplayMode} width={width} displayMode={displayMode}/> : <div><h1>Something is wrong!</h1></div>
        }
      </div>
  );
}

export default App;
