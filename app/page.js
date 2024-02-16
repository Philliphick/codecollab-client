import Image from "next/image";
import Dashboard from "@/components/Dashboard";
import Login from   "@/components/Login";
import Comments from "@/components/Comments";
import FullPost from "@/components/FullPost";
import MakePost from "@/components/MakePost";
import ProjectCard from "@/components/ProjectCard";
import Signup from "@/components/Signup";


export default function Home() {
  return (
    <main className="bg-gray-400 flex min-h-screen flex-row flex-wrap items-center justify-between p-24 w-full h-full">
      <div className="flex-grow w-full h-full items-center justify-center">
        
        <Dashboard />
      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

    </main>

    
  )
}
