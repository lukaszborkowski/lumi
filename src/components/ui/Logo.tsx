import React from "react";
import LogoIcon from "@/assets/logo.svg";
import Image from "next/image";

export const Logo = () => {
  return <Image src={LogoIcon} alt="Logo" width={100} height={40} />;
};
