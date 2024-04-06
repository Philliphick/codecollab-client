import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return (
    <>
    <div className='h-screen border-4 border-orange-800'>
    <section class=" bg-gradient-to-br from-gray-700 from-0% via-cyan-900 via-40%  to-gray-900 to-90% h-full flex items-center justify-center px-6 dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl text-gray-300">For collaboration amongst developers</h1>
            <p class="max-w-2xl mb-6 lg:mb-8 md:text-xl lg:text-2xl text-gray-400">Code Smarter, Collaborate Better. Your Developer Hub.</p>
            <Link href="/registration" class="inline-flex text-lg md:text-xl xl:text-2xl items-center justify-center px-5 py-3 mr-36 font-medium text-center text-gray-200 rounded-lg bg-primary-700 hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link href="/login" class="inline-flex text-lg md:text-xl xl:text-xl items-center justify-center px-5 py-3 font-medium text-center text-gray-200 border border-gray-300 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Sign In
            </Link> 
        </div>
        <div class="hidden lg:mt-6 lg:col-span-5 lg:flex xl:ml-12 ">
          <h1 class="text-6xl xl:text-7xl font-extrabold text-orange-700 flex justify-center tracking-wide underline">CODECOLLAB</h1>
            {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/> */}
        </div>                
    </div>
</section>
</div>
</>
  )
}

export default Landing