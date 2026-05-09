"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import site from "../data/siteConfig.json";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll Effect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-lg border-b border-gray-200/60"
            : "bg-white/60 backdrop-blur-md"
        }
      `}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border
              border-gray-200
              bg-white
              shadow-sm
            "
          >
            <img
              src={site.logo}
              alt="logo"
              className="h-8 w-8 object-contain"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-gray-900">
              {site.siteName}
            </span>

            <span className="text-xs text-gray-500">
              Laundry & Dry Cleaning
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul
          className="
            hidden
            items-center
            gap-2
            rounded-full
            border
            border-gray-200/80
            bg-white/70
            px-2
            py-2
            shadow-sm
            backdrop-blur-lg
            md:flex
          "
        >
          <NavItem href="/" label="Home" />
          <NavItem href="/about" label="About" />
          <NavItem href="/services" label="Services" />
          <NavItem href="#contact" label="Contact Us" />
        </ul>

       
        {/* Mobile Button */}
        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-gray-200
            bg-white/80
            text-gray-800
            shadow-sm
            backdrop-blur-md
            transition
            hover:bg-gray-100
            md:hidden
          "
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="
            border-t
            border-gray-200
            bg-white/95
            px-4
            py-5
            backdrop-blur-xl
            md:hidden
          "
        >
          <ul className="flex flex-col gap-2">

            <MobileNavItem
              href="/"
              label="Home"
              onClick={setOpen}
            />

            <MobileNavItem
              href="/about"
              label="About"
              onClick={setOpen}
            />

            <MobileNavItem
              href="/services"
              label="Services"
              onClick={setOpen}
            />

            <MobileNavItem
              href="#contact"
              label="Contact Us"
              onClick={setOpen}
            />
          </ul>

   
        </div>
      )}
    </header>
  );
}

/* ---------- Desktop Nav Item ---------- */

function NavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="
          rounded-full
          px-4
          py-2
          text-sm
          font-medium
          text-gray-700
          transition
          duration-300
          hover:bg-gray-100
          hover:text-black
        "
      >
        {label}
      </Link>
    </li>
  );
}

/* ---------- Mobile Nav Item ---------- */

function MobileNavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: (v: boolean) => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={() => onClick(false)}
        className="
          flex
          items-center
          rounded-2xl
          px-4
          py-3
          text-base
          font-medium
          text-gray-700
          transition
          duration-300
          hover:bg-gray-100
          hover:text-black
        "
      >
        {label}
      </Link>
    </li>
  );
}