'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void; // Add this line
};

const NavLink = ({
  href,
  className,
  children,
  onClick,
}: NavLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === href || (href !== '/' && pathName.startsWith(href));
  return <Link className={cn("transition-colors text-sm duration-200 text-gray-600 hover:text-rose-500", className, isActive && 'text-rose-600')} href={href} onClick={onClick}> 
    {children}
  </Link>;
};

export default NavLink;
