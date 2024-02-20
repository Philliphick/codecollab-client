import Image from "next/image";
import Dashboard from "@/components/Dashboard";
import Login from   "@/components/Login";
import Comments from "@/components/Comments";
import FullPost from "@/components/FullPost";
import MakePost from "@/components/MakePost";
import ProjectCard from "@/components/ProjectCard";
import Signup from "@/components/Signup";

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
