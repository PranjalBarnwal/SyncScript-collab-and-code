import { useState } from "react";
export default function Form() {
  const [input, setInput] = useState("");
  return (
    <form className="flex justify-center flex-col z-10 text-primary font-poppins items-center space-y-3">
  <p className="text-gray-400 tracking-wider text-sm md:text-base text-[0.8rem]">
    Share &#38; Collaborate Code{" "}
    <span className="text-primary">instantly</span> with
  </p>
  <p className="text-5xl md:text-6xl uppercase">SyncSpace</p>
  <input
    className="h-8 md:h-10 w-[17.6rem] md:w-[22rem] p-4 md:p-5 rounded-lg border-primary border-2 border-opacity-40 bg-transparent text-sm md:text-base"
    type="text"
    placeholder="Enter space code"
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button className="h-8 md:h-10 w-[17.6rem] md:w-[22rem] rounded-lg border-transparent bg-primary focus:bg-opacity-70 text-sm md:text-base">
    <span className="text-black">Join Space</span>
  </button>

  <p className="text-lg md:text-xl opacity-60">OR</p>
  <button className="h-8 md:h-10 w-[17.6rem] md:w-[22rem] rounded-lg border-primary border-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:bg-opacity-20 active:bg-opacity-30 hover:bg-primary hover:bg-opacity-10 text-sm md:text-base">
    <span className="text-primary opacity-80 ">Create Space</span>
  </button>
</form>

  );
}
