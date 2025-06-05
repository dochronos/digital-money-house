"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

import LogoSimbolo from "@/components/common/Logos/LogoSimbolo";
import HamburguesaIcon from "@/components/common/Icons/HamburguesaIcon";
import CloseIcon from "@/components/common/Icons/CloseIcon";
import Sidebar from "@/components/layout/Sidebar";

type LinkType = {
  href: string;
  text: string;
  outline?: boolean;
  solid?: boolean;
};

interface NavbarProps {
  logoClassName: string;
  logoLink: string;
  navbarClassName?: string;
  buttonsLinks?: LinkType[];
  isLogged?: boolean;
  userName?: string;
}

export default function Navbar({
  logoClassName,
  logoLink,
  navbarClassName,
  buttonsLinks = [],
  isLogged,
  userName,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <header className={clsx("w-full px-5", navbarClassName)}>
        <div className="max-w-screen-xl mx-auto h-[64px] flex justify-between items-center">
          {/* Logo */}
          <div className="w-[67px] h-[25px] md:w-[87px] md:h-[33px]">
            <LogoSimbolo className={logoClassName} href={logoLink} />
          </div>

          {/* Botones o usuario */}
          <div className="flex items-center gap-4">
            {buttonsLinks.length > 0 &&
              buttonsLinks.map((link, index) => (
                <Link
                  key={`${link.text}-${index}`}
                  href={link.href}
                  className={clsx(
                    "border-2 px-3 py-1 md:px-5 md:py-2 rounded-[5px] font-bold text-sm",
                    {
                      "bg-green text-black border-none": !link.outline,
                      "border-green text-green": link.outline,
                      "bg-secondary text-white": link.solid,
                    }
                  )}
                >
                  {link.text}
                </Link>
              ))}

            {isLogged && userName && (
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center p-1.5 bg-green rounded-[12px]">
                  <span className="text-base md:text-xl font-bold text-dark1">
                    {userName
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
                <Link href="/dashboard" className="hidden md:block">
                  <p className="text-white text-base font-bold">
                    Hola, {userName}
                  </p>
                </Link>
                <button
                  aria-label="Abrir menú móvil"
                  className="block md:hidden"
                  onClick={toggleMobileMenu}
                >
                  <HamburguesaIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Menú mobile lateral */}
      {isOpen && (
        <>
          <div
            onClick={toggleMobileMenu}
            className="fixed inset-0 z-30 bg-black/50 transition-opacity duration-300"
          />

          <aside
            role="dialog"
            aria-modal="true"
            className="md:hidden fixed top-0 right-0 h-full w-64 max-w-[80vw] bg-dark2 z-40 p-6 flex flex-col gap-6 transition-transform"
          >
            <div className="flex justify-end">
              <button aria-label="Cerrar menú móvil" onClick={toggleMobileMenu}>
                <CloseIcon />
              </button>
            </div>
            <p className="text-green font-bold text-lg">Hola, {userName}</p>
            <Sidebar />
          </aside>
        </>
      )}
    </>
  );
}
