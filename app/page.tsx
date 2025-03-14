//import Counter from "@/components/Counter";
import Sidebar from "@/components/Sidebar";
import SubmitButton from "@/components/SubmitButton";
import SignIn from "@/components/SignIn"
//import Image from "next/image";


// This export represents the only function that is leaving to the frontend
// these tailwind classes put our button on the  center of the screen
export default function Home() {
  return (
    <div>
      
      <div className="flex justify-between items-start">
        <Sidebar/>
        <div className="p-2"><SignIn/></div>
        
        
      </div>
      
      <div className="flex flex-col gap-4 items-center justify-center ml-5 w-full h-screen ">
        <h3 className="font-bold text-5xl">Personal Tasks</h3>
        <SubmitButton/>

      </div>
    </div>
  );
}
