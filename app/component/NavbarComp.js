"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavbarComp() {
  const [scrollPosisition, setScorllPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScorllPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    transition: "background-color 0.6s ease",
    backgroundColor:
      scrollPosisition > 0 ? "rgba(44, 83, 100, 0.9)" : "transparent",
    backdropFilter: "blur(4px)",
  };

  const textStyle = {
    color: scrollPosisition > 0 ? "white" : "#2c5364",
    textShadow: scrollPosisition > 0 ? "none" : "1px 1px 2px #000000",
  };
  return (
    <div
      className="fixed top-0 z-50 w-screen bg-transparent bg-opacity-80 backdrop-blur-sm"
      style={navbarStyle}
    >
      <Navbar
        fluid
        className="container mx-auto max-w-7xl bg-transparent px-4 py-4"
      >
        <Link href={"/"}>
          <Image
            src="/logoNav.png"
            alt="Logo Navbar"
            width={150}
            height={60}
          ></Image>
        </Link>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink
            as={Link}
            href="/about"
            className="self-center whitespace-nowrap text-xl font-semibold"
            style={textStyle}
          >
            About
          </NavbarLink>
          <NavbarLink
            as={Link}
            href="/product"
            className="self-center whitespace-nowrap text-xl font-semibold"
            style={textStyle}
          >
            Our Work
          </NavbarLink>
          <NavbarLink
            as={Link}
            href="/teams"
            className="self-center whitespace-nowrap text-xl font-semibold"
            style={textStyle}
          >
            Teams
          </NavbarLink>
          <NavbarLink
            as={Link}
            href="/contact"
            className="self-center whitespace-nowrap text-xl font-semibold"
            style={textStyle}
          >
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
