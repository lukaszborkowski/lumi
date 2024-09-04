//@ts-nocheck
"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { AnimatedTooltip } from "../ui/AnimatedTooltip";
// import { ShadowRectBackground } from "../backgrounds/ShadowRectBackground";
import Link from "next/link";
import { LogoIcon } from "./Logo";

export const Hero1 = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "relative bg-neutral-50  mx-auto w-full border-b overflow-hidden mt-12",
        "",
        className
      )}
    >
      <script src="https://app.youform.com/widgets/widget.js"></script>

      {/* <div className="absolute w-full h-full z-1">
        <ShadowRectBackground />
      </div> */}

      <div className="absolute bottom-auto right-auto left-[100px] top-[100px] h-[300px] w-[300px] -translate-x-[30%] translate-y-[20%] rounded-full bg-blue-200 opacity-50 blur-[80px]"></div>
      <div className="absolute bottom-auto right-auto left-[350px] top-0 h-[200px] w-[300px] -translate-x-[30%] translate-y-[20%] rounded-full bg-blue-400 opacity-50 blur-[80px]"></div>

      <div className="absolute bottom-auto left-auto -right-[100px] top-[100px] h-[300px] w-[300px] -translate-x-[30%] translate-y-[20%] rounded-full bg-blue-400 opacity-50 blur-[80px]"></div>
      <div className="absolute bottom-auto left-auto right-32 top-0 h-[200px] w-[300px] -translate-x-[30%] translate-y-[20%] rounded-full bg-blue-200 opacity-50 blur-[80px]"></div>

      <div className="py-24 ">
        <div className="px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold mb-6 md:mb-8 relative text-center text-neutral-800  max-w-6xl mx-auto">
            <span className="block pb-2">Turn Your Logo into a</span> Stunning 3D Masterpiece
          </h1>

          <h2 className="relative font-regular text-base md:text-lg lg:text-xl text-neutral-600  tracking-wide mb-6 md:mb-8 text-center max-w-3xl mx-auto antialiased">
            Effortlessly Convert Your SVG File into a 3D Obiect with Custom Materials, Lighting and
            Other Settings
          </h2>
          <div className="relative flex justify-center flex-wrap gap-2 mb-16 md:mb-16">
            {/* <Link href={"/components/3d-card-effect"}>
              <button className="bg-black text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-150 ease-in-out">
                Demo
              </button>
            </Link> */}
            <button
              data-youform-open="whbhvgwx"
              data-youform-position="center"
              className="bg-black text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-150 ease-in-out"
            >
              Join Waitlist
            </button>
          </div>

          {[
           
            {
              icon: (
                <div className="w-[100px]">
                  <svg
                    width="100%"
                    viewBox="0 0 544 544"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="272"
                      cy="136.235"
                      r="96"
                      transform="rotate(45 272 136.235)"
                      fill="black"
                    />
                    <circle
                      cx="407.765"
                      cy="272"
                      r="96"
                      transform="rotate(45 407.765 272)"
                      fill="black"
                    />
                    <circle
                      cx="136.235"
                      cy="272"
                      r="96"
                      transform="rotate(45 136.235 272)"
                      fill="black"
                    />
                    <circle
                      cx="272"
                      cy="407.764"
                      r="96"
                      transform="rotate(45 272 407.764)"
                      fill="black"
                    />
                  </svg>
                </div>
              ),
              image: (
                <Image
                  // src="/Visual.png"
                  src="/shape20.png"
                  alt="Shape"
                  width={348}
                  height={348}
                  className="object-cover"
                />
              ),
            },
            {
              icon: (
                <div className="w-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 255 231"
                    width="100%"
                  >
                    <path
                      d="M 0.00 0.00 L 255.00 0.00 L 255.00 231.00 L 0.00 231.00 L 0.00 0.00 Z"
                      fill="#f7f7f7"
                    />
                    <path
                      d="M 79.01 16.15 C 112.29 16.20 145.80 16.13 179.08 16.19 C 182.77 16.16 185.82 18.14 187.59 21.32 C 204.18 50.02 220.81 78.93 237.41 107.61 C 238.86 110.23 240.84 112.87 240.76 116.00 C 240.87 119.24 238.54 122.28 237.03 125.02 C 220.67 153.35 204.31 181.68 187.98 210.03 C 186.87 211.92 185.68 213.63 183.68 214.67 C 181.13 216.17 177.86 215.79 174.99 215.85 C 143.66 215.81 112.33 215.84 81.00 215.83 C 77.68 215.71 73.35 216.39 70.38 214.69 C 68.36 213.66 67.13 211.94 66.02 210.03 C 49.70 181.69 33.32 153.35 16.97 125.02 C 15.46 122.26 13.13 119.25 13.23 116.00 C 13.12 112.77 15.46 109.72 16.97 106.98 C 32.83 79.51 48.70 52.04 64.53 24.55 C 66.18 21.81 67.41 18.84 70.38 17.31 C 72.91 15.84 76.17 16.21 79.01 16.15 Z"
                      fill="#000000"
                    />
                    <path
                      d="M 117.45 65.70 C 127.15 63.87 137.33 64.85 146.45 68.64 C 158.30 73.49 168.11 82.94 173.45 94.57 C 180.36 109.37 179.59 127.26 171.40 141.39 C 165.42 151.89 155.66 160.14 144.27 164.19 C 131.31 168.90 116.53 168.02 104.22 161.81 C 92.01 155.75 82.46 144.70 78.31 131.70 C 73.44 116.75 75.89 99.82 84.91 86.93 C 92.47 75.95 104.34 68.17 117.45 65.70 Z"
                      fill="#f7f7f7"
                    />
                  </svg>
                </div>
              ),
              image: (
                <Image
                  // src="/Visual.png"
                  src="/shape5.png"
                  alt="Shape"
                  width={348}
                  height={348}
                  className="  object-cover"
                />
              ),
            },
            {
              icon: (
                <div className="w-[100px]">
                  <LogoIcon />
                </div>
              ),
              image: (
                <Image
                  // src="/Visual.png"
                  src="/shape2.png"
                  alt="Shape"
                  width={348}
                  height={348}
                  className="  object-cover"
                />
              ),
            },
            
            // {
            //   icon: (
            //     <div className="w-[140px]">
            //       <Image
            //         src="/lummi.png"
            //         alt="Shape"
            //         width={198}
            //         height={198}
            //         className="  object-cover"
            //       />
            //     </div>
            //   ),
            //   image: (
            //     <Image
            //       // src="/Visual.png"
            //       src="/untitled3.png"
            //       alt="Shape"
            //       width={648}
            //       height={448}
            //       className="  object-cover"
            //     />
            //   ),
            // },
            
          ].map((i, index) => {
            return (
              <div
                key={index}
                className="mx-auto flex flex-col md:flex-row  justify-center items-center pl-0 md:pl-16 mb-16"
              >
                {i.icon}
                <div className="pl-12 pr-8 w-[120px] text-neutral-400">
                  <svg
                    data-testid="geist-icon"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="100%"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.8536 8.7071C13.2441 8.31657 13.2441 7.68341 12.8536 7.29288L9.03034 3.46966L8.50001 2.93933L7.43935 3.99999L7.96968 4.53032L11.4393 7.99999L7.96968 11.4697L7.43935 12L8.50001 13.0607L9.03034 12.5303L12.8536 8.7071ZM7.85356 8.7071C8.24408 8.31657 8.24408 7.68341 7.85356 7.29288L4.03034 3.46966L3.50001 2.93933L2.43935 3.99999L2.96968 4.53032L6.43935 7.99999L2.96968 11.4697L2.43935 12L3.50001 13.0607L4.03034 12.5303L7.85356 8.7071Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>

                {i.image}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
