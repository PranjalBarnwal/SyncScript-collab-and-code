import Editor from "./Editor";
import Panel from "./Panel";

export default function Space() {
    return (
      <div className="grid grid-cols-6 grid-rows-4 h-[88vh] bg-gray-500 z-20">
        <div className="bg-purple-400 col-span-4 row-span-3 flex items-center justify-center p-5">
        <Editor/>
        </div>
        <div className="bg-blue-500 col-start-5 col-span-2 row-start-1 row-span-1 flex items-center p-5">
          <Panel/>
        </div>
        <div className="bg-indigo-600 col-start-5 col-span-2 row-start-2 row-span-2 flex items-center justify-center">
          Block 3
        </div>
        <div className="bg-green-600 col-span-4 row-start-4 row-span-1 flex items-center justify-center">
          Block 4
        </div>
        <div className="bg-purple-300 col-start-5 col-span-2 row-start-4 row-span-1 flex items-center justify-center">
          Block 5
        </div>
      </div>
    );
  }
  