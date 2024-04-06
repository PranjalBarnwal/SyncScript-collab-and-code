

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


export default function Editor() {
 
  
  const code: string = `
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Element not found
}
`;



  return (
    <fieldset className="flex font-poppins items-center text-primary flex-col h-full w-full border-primary border-[1px] rounded-lg">
      <legend className="text-lg ml-2 px-2 font-extralight">
        Editor
      </legend>
      <div className="h-[98%] w-[98%] p-5 resize-none focus:outline-none bg-transparent overflow-y-scroll z-20">
      <CodeMirror extensions={[javascript({ jsx: true })]}  />
      </div>
    </fieldset>
  );
}
