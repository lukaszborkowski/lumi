import { cn } from "@/lib/utils";
import React from "react";
import { ShadowRectBackground } from "../ui/ShadowRectBackground";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className={cn(
        "relative  w-full overflow-hidden",
        // "bg-gradient-to-tr from-[#08102b] via-[#EAEEFE] to-[#EAEEFE]"
      )}
    >
      {/* <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-tr from-[#183EC2] to-[#EAEEFE]">

      </div> */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <ShadowRectBackground rows={15} columns={40} />
      </div>
      {/* 
      <svg
        viewBox="0 0 130 90"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[0px] bottom-[0px] w-[1300px] h-[900px]  fill-blue-700 blur-[230px] "
      >
        <path d="M 20 10 L 20 70 L 130 70 L 130 90 L 0 90 L 0 0 Z" />
      </svg> */}

      {/* <svg
        width={72 * 30}
        height={29 * 30}
        viewBox="0 0 72 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[0px] bottom-[0px] fill-purple-500 opacity-20 blur-[150px]"
      >
        <path d="M0 28.5V2.5L9 0.5L24 3.5L35.5 19.5L72 28.5H0Z" />
      </svg> */}

      <div className="absolute left-0 bottom-0 h-[800px] w-[1200px] -translate-x-[20%] translate-y-[50%] rounded-full bg-blue-500 opacity-50 blur-[190px]"></div>
      <div className="absolute right-0 bottom-0 h-[800px] w-[1200px] translate-x-[20%] translate-y-[50%] rounded-full bg-blue-500 opacity-50 blur-[320px]"></div>
      
      {/* <Image
          src="/bg.png"
          alt="Shape"
          width={1500}
          height={1000}
          className="absolute left-[0px] top-[0] w-full h-full  object-cover"
        /> */}
      <div className="relative min-h-screen mx-auto max-w-7xl py-48">
        <Image
          // src="/Visual.png"
          src="/shape2.png"
          alt="Shape"
          width={648}
          height={648}
          className="absolute -right-[0px] top-[15%]  object-cover"
        />

        <div className="py-24">
          <div className="px-4">
            <h1 className="text-4xl md:text-5xl lg:text-8xl tracking-wide font-bold mb-6 md:mb-8 relative ">
              <span
                className={cn(
                  "relative bg-clip-text text-transparent transition-all bg-gradient-to-b from-neutral-900 to-neutral-900 z-10",
                  "dark:from-neutral-50 dark:to-neutral-400"
                )}
              >
                Pathway to<br/>
                productivity
              </span>
            </h1>

            <h2 className="relative font-regular text-base md:text-lg lg:text-xl text-neutral-900 dark:text-neutral-100 tracking-wide mb-6 md:mb-8 max-w-3xl antialiased">
              Copy paste the most trending components <br /> and use them in your websites.
            </h2>
            <div className="relative flex flex-wrap gap-2 mb-6 md:mb-8">
              <button className="bg-black text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-150 ease-in-out">
                Browse components
              </button>
            </div>

            <div className="relative flex text-neutral-800 dark:text-neutral-300">
              <div className="flex items-center space-x-2 mr-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 md:h-10 md:w-10 flex-shrink-0 stroke-1"
                  >
                    <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                    <path d="M15 12v-3"></path>
                  </svg>
                </span>
                <span className="text-sm font-semibold flex-shrink-0">Next.js</span>
              </div>

              <div className="flex items-center space-x-2 mr-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="md:h-10 md:w-10 h-4 w-4 flex-shrink-0 stroke-1"
                  >
                    <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                    <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                    <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                    <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                    <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                    <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                    <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                  </svg>
                </span>
                <span className="text-sm font-semibold flex-shrink-0">React</span>
              </div>

              <div className="flex items-center space-x-2 mr-4">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="md:h-10 md:w-10 h-4 w-4 flex-shrink-0 stroke-[0.5px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                  </svg>
                </span>
                <span className="text-sm font-semibold flex-shrink-0">TailwindCSS</span>
              </div>

              <div className="flex items-center space-x-2 mr-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="md:h-10 md:w-10 h-4 w-4 flex-shrink-0 stroke-1"
                  >
                    <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                    <path d="M20 12l-8 8l-4 -4"></path>
                  </svg>
                </span>
                <span className="text-sm font-semibold flex-shrink-0">Framer Motion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
