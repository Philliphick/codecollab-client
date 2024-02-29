/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
  return (
    <div className="bg-orange-200 relative h-screen">
      <img
        src="/images/hero.jpg"
        alt="hero"
        className="absolute w-full h-full object-cover"
      />
      


      <div className="absolute top-[50%] left-1/3 w-1/3 flex flex-col items-center justify-center">
        <div className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg text-center">
          <h1 className="text-white text-4xl text-center md:text-3xl">Where Ambitious Projects Meet Passionate Coders</h1>
        </div>
         <Link href="/registration"> <button className="bg-orange-700 hover:bg-orange-600 text-white font-extrabold py-4 px-8 text-2xl rounded md:py-2 md:px-4 md:text-xl mt-4">
            Sign Up
          </button></Link>
          <div className="">
        <Link href="/login"><button className="bg-orange-700 hover:bg-orange-600 text-white font-extrabold py-4 px-8 text-2xl rounded md:py-2 md:px-4 md:text-xl mt-4">
            Login
          </button></Link>
      </div>
        
      </div>


    </div>
  );
}