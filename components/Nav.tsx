"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import Logo from "./Logo";

export default function Navbar() {
  const [IsOpened, setIsOpened] = useState(false);
  const pathName = usePathname();
  const Links = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "Features",
      path: "#features",
    },
    {
      name: "Accessories",
      path: "#accessories",
    },
    {
      name: "Models",
      path: "#models",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];
  return (
    <nav className={` absolute top-0 left-0 w-full z-50 bg-primary`}>
      <div className=" text-sm z-50 bg-dark">
        <div className=" md:h-20 h-20 w-full flex justify-between  items-center flex-row px-4 md:px-20 text-accent z-30">
          <div className="flex items-center text-lg">
            <Logo className="md:text-3xl text-xl" />
          </div>
          <div className="sm:flex justify-center items-center gap-5 hidden">
            {Links.map((link, idx) => {
              return (
                <div key={idx}>
                  <Link
                    href={link.path}
                    className={`${
                      link.path === pathName && " !font-[600]"
                    }  capitalize transition-all  p-1  text-accent`}
                  >
                    <p className="text-accent/50 hover:text-accent duration-300">
                      {link.name}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className=" flex gap-2">
            <button>
              <CiUser size={22} />
            </button>
            <button>
              <IoCartOutline size={22} className="text-white/80" />
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsOpened(!IsOpened)}>
            {IsOpened ? <IoCloseOutline size={25} /> : <HiBars3 size={25} />}
          </button>
        </div>
        <div
          className={`${
            IsOpened ? " top-14" : "-top-44"
          } w-[100vw] flex flex-col items-center justify-center pb-3 overflow-hidden navs sm:hidden  -z-20 bg-dark text-xs text-center gap-2 font-semibold fixed  transition-all ease duration-700`}
        >
          <div className=" -mt-10 mb-10"></div>
          {Links.map((link) => {
            return (
              <Link
                onClick={() => setIsOpened(!IsOpened)}
                key={link.name}
                href={link.path}
                className={`${
                  link.path === pathName && " font-bold text-secondary"
                }  capitalize text-white text-xs p-1 $`}
              >
                <p> {link.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
