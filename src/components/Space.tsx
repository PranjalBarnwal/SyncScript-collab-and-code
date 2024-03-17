import Editor from "./Editor";
import OutputBox from "./OutputBox";
import Panel from "./Panel";
import Toolbar from "./Toolbar";
import Audio from "./Audio";

export default function Space() {
  return (
    <div className="grid grid-cols-6 grid-rows-4 h-full z-20 ">
      <div className="col-span-4 row-span-3 flex items-center justify-center p-2">
        <Editor />
      </div>
      <div className="col-start-5 col-span-2 row-start-1 row-span-1 flex items-center p-2">
        <Panel />
      </div>
      <div className="col-start-5 col-span-2 row-start-2 row-span-2 flex items-center justify-center p-2">
        <OutputBox />
      </div>
      <div className="col-span-4 row-start-4 row-span-1 flex items-center justify-center p-2">
        <Toolbar />
      </div>
      <div className="col-start-5 col-span-2 row-start-4 row-span-1 flex items-center justify-center p-2">
        <Audio />
      </div>
    </div>
  );
}
