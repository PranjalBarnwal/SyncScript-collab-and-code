import Codepic from "./Codepic";
import Form from "./Form";

export default function Home() {
  return(
    <div className="flex justify-evenly sm:flex-row flex-col items-center space-y-4">
      <Codepic/>
      <Form/>
    </div>
  )
}
