"use client";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/AnimatedModal";
import Link from "next/link";
import { Logo } from "./Logo";

const menuItems = [
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Templates",
    href: "/templates",
  },
  {
    title: "About",
    href: "/templates",
  },
  {
    title: "Pricing",
    href: "/templates",
  },
];

export function Navbar({ className }: { className?: string }) {
  return (
    <header className="fixed top-0 z-[2] bg-[white]  w-full border-b dark:border-neutral-900 border-gray-neutral-400">
      <div className="flex w-full h-[60px] max-w-7xl mx-auto px-4">
        <div className="border-gray-alpha-400 dark:border-neutral-900 gap-4 py-4 w-[260px] ">
          <Logo />
        </div>
        <div className="flex items-center justify-between p-4 grow">
          <div></div>
          <button
            data-youform-open="whbhvgwx"
            data-youform-position="center"
          className="bg-black text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-150 ease-in-out"
          style={{whiteSpace: "nowrap"}}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </header>
  );
}

export function MobileNav() {
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="group/modal-btn">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-black dark:text-white h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
          </svg>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div className="mb-8">
              <Logo />
            </div>
            <div className="mb-4">
              <ul className="text-neutral-500 text-md ">
                {menuItems.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
