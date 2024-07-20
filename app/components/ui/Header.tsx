"use client";

import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { commonProps } from "../../../types/common";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

const links = [
  {
    label: "Services",
    route: "#services",
  },
  {
    label: "Portfolio",
    route: "#portfolio",
  },
  {
    label: "About",
    route: "#about",
  },
];

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((link, index) => {
        return (
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
            {...commonProps}
            key={index}
          >
            <Link
              href={link.route}
              className="flex items-center text-[#F7F7FC] hover:text-blue-500 transition-colors uppercase"
            >
              {link.label}
            </Link>
          </Typography>
        );
      })}
    </ul>
  );
}

// profile menu component
const profileMenuItems = [
  {
    label: "Documentation",
    route: "/documentation",
  },
  {
    label: "Article",
    route: "/article",
  },
  {
    label: "Sign Out",
    route: "",
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSignOut = () => {
    closeMenu();
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          {...commonProps}
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="/assets/user.jpg"
            {...commonProps}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1" {...commonProps}>
        {profileMenuItems.map(({ label, route }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={isLastItem ? handleSignOut : closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
              {...commonProps}
            >
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
                {...commonProps}
              >
                {isLastItem ? label : <Link href={route}>{label}</Link>}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export interface HeaderProps {}
export const Header: FC<HeaderProps> = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      className={`mx-auto max-w-full px-10 py-3 border-none bg-[#32325D] rounded-none ${
        isSticky ? "fixed top-0 z-[10000] shadow-lg" : ""
      }`}
      {...commonProps}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          className="mr-4 cursor-pointer py-1.5 logo"
          {...commonProps}
        >
          <Link href="/">
            WEB<span className="logo_span">3</span>MIO
          </Link>
        </Typography>
        <div className="hidden gap-12 lg:flex">
          <NavList />
          {/* {session && <ProfileMenu />} */}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-[#F7F7FC] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          {...commonProps}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        {/* <div className="ml-[20px] block lg:hidden">
          {session && <ProfileMenu />}
        </div> */}
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};
