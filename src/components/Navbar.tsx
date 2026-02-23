"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navlinks } from "@/constants/navlinks";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          eBookPortal
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navlinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    data-active={link.href === pathname}
                    asChild
                  >
                    <Link className="px-4 py-2" href={link.href}>
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button>Login</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t bg-sidebar-primary-foreground px-4 py-4 space-y-3 transition-all duration-300 absolute w-full ${isOpen ? "top-16" : "-top-50"}`}
      >
        <div className="flex flex-col gap-2 w-fit">
          {navlinks.map((link) => (
            <Button
              key={link.label}
              variant={link.href === pathname ? "default" : "outline"}
              asChild
            >
              <Link href={link.href} className="block">
                {link.label}
              </Link>
            </Button>
          ))}
        </div>
        <Button className="w-full">Login</Button>
      </div>
    </nav>
  );
}
