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
    <main  className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <Dashboard />
      </div>
    </main>
  );
}
