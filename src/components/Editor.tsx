export default function Editor() {
  return (
    <fieldset className="flex font-poppins items-center text-primary flex-col h-full w-full border-primary border-[1px] rounded-lg">
      <legend className="text-lg ml-2 px-2 font-extralight">
        Editor
      </legend>
      <textarea
        className="h-[98%] w-[98%] p-5 resize-none focus:outline-none bg-transparent overflow-y-scroll z-20"
        name=""
        id=""
        cols={30}
        rows={10}
      ></textarea>
    </fieldset>
  );
}
