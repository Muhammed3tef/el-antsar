"use client";
import Image from "next/image";
import { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { NavLink } from "./nav-link";
import { navLinks } from "@/data/nav-links";
import mainLogo from "../../../../public/imgs/mainLogo.svg";
import CallYellowBtn from "@/components/ui/buttons/call-yellow-btn";
import WhatsappButton from "@/components/ui/buttons/whatsapp-btn";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="lg:hidden">
          <IoMenuOutline size={35} className="text-green-800 cursor-pointer" />
        </button>
      )}

      {/* Overlay + Sidebar */}
      <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
        {/* backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
        />

        {/* sidebar */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-white flex flex-col overflow-y-auto
          transform transition-transform duration-300 ease-in-out px-5 pt-32 pb-24
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          ${isOpen ? "pointer-events-auto" : ""}`}
        >
          {/* Logo */}
          <Image
            src={mainLogo}
            alt="logo"
            priority
            width={100}
            height={100}
            className="absolute top-7 inset-s-5 "
          />

          {/* close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-10 inset-e-5 text-black cursor-pointer"
          >
            <IoClose size={35} />
          </button>

          <ul
            onClick={(event) => event.stopPropagation()}
            className="flex flex-col gap-6 ps-5"
          >
            {navLinks.map((link, idx) => (
              <NavLink key={idx} link={link} onClick={() => setIsOpen(false)} />
            ))}
          </ul>

          <div
            onClick={() => setIsOpen(false)}
            className="mt-8 flex w-full flex-col gap-3"
          >
            <WhatsappButton
              showText={true}
              iconSize={25}
              className="w-full!"
            />
            <CallYellowBtn
              showText={true}
              iconSize={25}
              className="w-full!"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const DesktopMenu = () => {
  return (
    <ul className="hidden lg:flex items-center gap-6">
      {navLinks.map((link, idx) => (
        <NavLink key={idx} link={link} />
      ))}
    </ul>
  );
};

export const NavbarMenu = () => {
  return (
    <>
      <MobileMenu />
      <DesktopMenu />
    </>
  );
};
