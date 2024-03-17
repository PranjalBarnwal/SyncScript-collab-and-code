import Member from "./Member"

export default function Panel() {
    return (
      <div className="flex space-x-5 overflow-y-auto">
        {/* <legend>Members</legend> */}
        <Member letter="C" />
        <Member letter="H" />
        <Member letter="U" />
        <Member letter="T" />
        <Member letter="I" />
        <Member letter="Y" />
        <Member letter="A" />
       
      </div>
    );
  }
  