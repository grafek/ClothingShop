"use client";

import { CrossIcon, HamburgerIcon, Logo } from "@ui/icons/index";
import { useState } from "react";
import CartPopover from "@shop/components/popovers/CartPopover";
import UserPopover from "@shop/components/popovers/UserPopover";
import FavoritesPopover from "@shop/components/popovers/FavoritesPopover";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_ITEMS = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/category/men",
    name: "Men",
  },
  {
    path: "/category/women",
    name: "Women",
  },
  {
    path: "/category/kids",
    name: "kids",
  },
];

export default function Header() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const routeChangeHandler = () => {
    setIsMobileMenuVisible(false);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const currentPath = usePathname();

  return (
    <header className="hrefp-0 sticky flex flex-col gap-4 border-b bg-primary-100/60 backdrop-blur-[1px]">
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-16">
        <div className="z-[100] flex-1 shrink-0 md:hidden">
          <button onClick={() => setIsMobileMenuVisible((prev) => !prev)}>
            <Image
              alt="logo"
              src={isMobileMenuVisible ? CrossIcon : HamburgerIcon}
            />
          </button>
        </div>
        <nav className="hidden flex-1 md:block">
          <ul className="flex gap-8 capitalize">
            {NAV_ITEMS.map(({ path, name }) => (
              <Link
                key={path}
                href={`${path}`}
                className={`${path === currentPath ? "font-semibold" : ""}`}
              >
                <li className="after:-bothrefm-[2px] relative after:absolute after:left-0 after:block after:h-[3px] after:w-0 after:bg-accent-200 after:transition-all after:duration-500 hover:after:w-full">
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <HamburgerMenu
          isMobileMenuVisible={isMobileMenuVisible}
          routeChangeHandler={routeChangeHandler}
        />
        <Link href={"/"} className="flex flex-1 shrink-0 justify-center">
          <Image alt="logo" src={Logo} />
        </Link>

        {/* <SearchBar /> */}

        <div className="flex flex-1 shrink-0 justify-end gap-4">
          <CartPopover />
          <FavoritesPopover />
          <UserPopover />
        </div>
      </div>
    </header>
  );
}

type HamburgerMenuProps = {
  isMobileMenuVisible: boolean;
  routeChangeHandler: () => void;
};

function HamburgerMenu({
  isMobileMenuVisible,
  routeChangeHandler,
}: HamburgerMenuProps) {
  return (
    <div
      className={`hrefp-0 absolute z-50 h-[100dvh] w-[calc(50%-2rem)] bg-primary-200/70 px-6 py-4 transition-all duration-500 md:hidden ${
        isMobileMenuVisible
          ? "-translate-x-6"
          : "-translate-x-[calc(100%+24px)]"
      }`}
    >
      <ul className="flex flex-col gap-4 pt-12 capitalize">
        {NAV_ITEMS.map(({ path, name }) => (
          <Link
            key={path}
            href={`${path}`}
            className={`${path === name ? "font-semibold" : ""} w-fit`}
            onClick={() => routeChangeHandler()}
          >
            <li className="after:-bothrefm-[2px] relative after:absolute after:left-0 after:block after:h-[3px] after:w-0 after:bg-accent-200 after:transition-all after:duration-500 hover:after:w-full">
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
