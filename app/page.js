import Image from "next/image";
import Dashboard from "@/components/MainComponents/Dashboard";
import FullPost from "@/components/ProjectComponents/FullPost";
import MakePost from "@/components/MainComponents/UpdatePost";
import ProjectCard from "@/components/ProjectComponents/ProjectCard";
import Signup from "@/app/pages/registration/Signup";

//bg-gradient-to-br from-gray-700 from-0% via-emerald-500 via-25% via-emerald-500 via-50% to-cyan-900 to-90% 

// secondary colour: [#7A2410]?

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-700 from-0% via-cyan-900 via-40%  to-gray-900 to-90% flex min-h-screen flex-row flex-wrap items-center justify-between p-24 w-full h-full">
      <div className="flex-grow w-full h-full items-center justify-center">
        
        <Dashboard />
      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

    </main>

    
  )
}
