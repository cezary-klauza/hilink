"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const menuToggle = () => {
    setHiddenMenu(hiddenMenu ? false : true);
  };
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter
                            cursor-pointer pb-1.5 transition-all
                            hover:font-bold "
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          title="Login"
          icon="/user.svg"
          type={"button"}
          variant={"btn_dark_green"}
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden z-50"
        onClick={menuToggle}
      />

      <ul
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl pt-24 flex flex-col gap-6
                    ${
                      hiddenMenu ? "-translate-x-[-100%]" : ""
                    } transition-all duration-300`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter
                            cursor-pointer pb-1.5 transition-all
                            hover:font-bold "
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
