import Button from "./Button";

export default function Toolbar() {


  return (
    <fieldset className="flex flex-row font-poppins  items-center text-primary h-full w-full border-primary border-[1px] rounded-lg  z-20 px-5 space-x-5">
      <legend className="text-lg px-2 font-extralight">Toolbar</legend>
      <Button title="Languages" />
      <Button title="Theme" />
      <Button title="Share snippet" />
      <Button title="Run Code" />
    </fieldset>
  );
}
