"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { usePathname } from "next/navigation";
import type { NavLink as NavLinkType } from "@/types/nav-link";

type Props = {
  link: NavLinkType;
  onClick?: () => void;
};

export const NavLink = ({ link, onClick }: Props) => {
  const pathname = usePathname();
  const itemRef = useRef<HTMLLIElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hasChildren = Boolean(link.children?.length);
  const handleNavigate = () => {
    setIsDropdownOpen(false);
    onClick?.();
  };

  useEffect(() => {
    if (!hasChildren || !isDropdownOpen) return;

    const handleOutsideClick = (event: PointerEvent) => {
      if (!itemRef.current?.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [hasChildren, isDropdownOpen]);

  const isActive =
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

  return (
    <li ref={itemRef} className="relative w-full cursor-pointer lg:w-auto">
      <div className="flex items-center gap-1">
        {hasChildren ? (
          <button
            type="button"
            aria-label={`فتح قائمة ${link.name}`}
            aria-expanded={isDropdownOpen}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className={`flex items-center gap-1 text-xl font-medium capitalize whitespace-nowrap text-gray-500 transition-all duration-300 lg:text-base ${
              isActive ? "font-bold text-green-600" : ""
            }`}
          >
            <span>{link.name}</span>
            <IoChevronDown
              size={18}
              className={`transition duration-300 ${
                isDropdownOpen ? "rotate-180 text-green-600" : ""
              }`}
            />
          </button>
        ) : (
          <Link
            href={link.href}
            onClick={handleNavigate}
            className={`text-xl font-medium capitalize whitespace-nowrap text-gray-500 transition-all duration-300 lg:text-base ${isActive ? "font-bold text-green-600" : ""}`}
          >
            {link.name}
          </Link>
        )}
      </div>

      {hasChildren && (
        <ul
          className={`mt-3 flex flex-col gap-3 overflow-hidden ps-4 transition-all duration-300 lg:absolute lg:right-0 lg:top-full lg:z-50 lg:mt-4 lg:min-w-60 lg:gap-0 lg:overflow-visible lg:rounded-2xl lg:border lg:border-gray-100 lg:bg-white lg:p-2 lg:ps-2 lg:shadow-xl ${
            isDropdownOpen
              ? "max-h-96 opacity-100 lg:visible"
              : "max-h-0 opacity-0 lg:invisible lg:max-h-none"
          }`}
        >
          {link.children?.map((child) => (
            <li key={child.name}>
              <Link
                href={child.href}
                onClick={handleNavigate}
                className="block whitespace-nowrap rounded-xl px-4 py-2 text-lg font-medium text-gray-500 transition duration-300 hover:bg-green-50 hover:text-green-700 lg:text-sm"
              >
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
