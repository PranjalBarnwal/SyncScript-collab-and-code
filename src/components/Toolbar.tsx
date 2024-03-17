export default function Toolbar() {
    return (
      <fieldset className="flex flex-row font-poppins  items-center text-primary h-full w-full border-primary border-[1px] rounded-3xl  z-20 px-5 space-x-5">
        <legend className="text-lg ml-6 px-2 font-extralight">Toolbar</legend>
        <button className="border-primary border-[1px] p-3 bg-primary bg-opacity-20 rounded-xl hover:bg-opacity-30">
          Language
        </button>
        <button className="border-primary border-[1px] p-3 bg-primary bg-opacity-20 rounded-xl hover:bg-opacity-30">
          Theme
        </button>
        <button className="border-primary border-[1px] p-3 bg-primary bg-opacity-20 rounded-xl hover:bg-opacity-30">
          Share snippet
        </button>
        <button className="border-primary border-[1px] p-3 bg-primary bg-opacity-20 rounded-xl hover:bg-opacity-30">
          Run Code
        </button>
      
      </fieldset>
    );
  }
  