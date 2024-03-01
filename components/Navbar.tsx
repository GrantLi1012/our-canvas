"use client";
import Image from "next/image";
import { memo } from "react";

import ActiveUsers from "./users/ActiveUsers";
import { ActiveElement, NavbarProps } from "@/types/type";

const Navbar = ({ activeElement }: NavbarProps) => {
    const isActive = (value: string | Array<ActiveElement>) => {
       return  (activeElement && activeElement.value === value) || (Array.isArray(value) && value.some((val) => val?.value === activeElement?.value));
    };

    return (
        <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white">
            <Image src="/assets/logo.png" alt="Our Canvas" width={170} height={35} />
            <ActiveUsers />
        </nav>
    );
}

export default memo(Navbar, (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement);