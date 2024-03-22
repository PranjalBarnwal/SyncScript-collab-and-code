import { useState } from "react";
import Editor from "./Editor";
import OutputBox from "./OutputBox";
import Panel from "./Panel";
import Toolbar from "./Toolbar";
import Audio from "./Audio";

export default function Space() {
  const [ editorConfig, setEditorConfig ] = useState({
    theme: 'nord',
    lang: 'java',
  });


  return (
    <div className="main flex flex-col h-full w-full space-y-3">
      <div className="top space-x-7 flex w-full h-[75%]">
        <div className="editor w-[70%]">
          <Editor editorConfig={ editorConfig } />
        </div>
        <div className="topleft flex flex-col w-[30%] h-[100%]">
          <div className="panel h-[20%]">
            <Panel />
          </div>
          <div className="output h-[80%]">
            <OutputBox />
          </div>
        </div>
      </div>
      <div className="bottom flex space-x-7">
        <div className="toolbar w-[70%]">
          <Toolbar setEditorConfig={ setEditorConfig }/>
        </div>
        <div className="audio w-[30%]">
          <Audio/>
        </div>
      </div>
    </div>
  );
}
