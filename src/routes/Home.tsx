import Codepic from "../components/Codepic";
import Form from "../components/Form";

export default function Home() {
  return(
    <div className="flex justify-evenly sm:flex-row flex-col items-center space-y-4">
      <Codepic/>
      <Form/>
    </div>
  )
}
