"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Features",
      href: "#features",
      active: false,
      color: "#6FA073",
    },
    {
      name: "Analytics",
      href: "#analytics",
      active: false,
      color: "#303042",
    },
    {
      name: "Solutions",
      href: "#solutions",
      active: false,
      color: "#303042",
    },
    {
      name: "Contact",
      href: "#contact",
      active: false,
      color: "#303042",
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setIsSheetOpen(false);
    }
  };

  return (
    <>
      <header
        className={`
          fixed top-0 w-full z-50 transition-all duration-300
          ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
              : "bg-white py-8"
          }
        `}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/">
                <h1 className="text-[22px] lg:text-[28px] font-semibold text-[#6FA073] hover:opacity-80 transition cursor-pointer">
                  EduManage
                </h1>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`
                      text-[16px] transition-all duration-300
                      ${
                        link.active
                          ? "text-[#6FA073] font-medium"
                          : "text-[#303042] hover:text-[#6FA073]"
                      }
                      relative group
                    `}
                  >
                    {link.name}
                    {!link.active && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6FA073] transition-all duration-300 group-hover:w-full" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop Search */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="
                    w-62.5
                    h-10
                    rounded-full
                    border
                    border-[#6FA073]
                    pl-4
                    pr-12
                    text-sm
                    outline-none
                    focus:ring-2
                    focus:ring-[#6FA073]
                    focus:ring-opacity-50
                    transition-all
                    placeholder:text-gray-400
                  "
                />
                <button
                  type="submit"
                  className="
                    absolute
                    right-0
                    top-1/2
                    -translate-y-1/2
                    h-10
                    w-10
                    rounded-full
                    bg-[#6FA073]
                    flex
                    items-center
                    justify-center
                    hover:bg-[#5d8f61]
                    transition-colors
                  "
                >
                  <Search size={16} className="text-white" />
                </button>
              </form>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="
                      p-2
                      rounded-full
                      hover:bg-gray-100
                      transition-colors
                    "
                    aria-label="Open menu"
                  >
                    <Menu size={28} className="text-[#303042]" />
                  </motion.button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-75 sm:w-87.5 p-0 [&>button]:hidden"
                >
                  {/* Hidden title for accessibility */}
                  <SheetTitle className="sr-only">
                    Mobile Navigation Menu
                  </SheetTitle>

                  <div className="flex flex-col h-full">
                    {/* Mobile Header - Only ONE X button here */}
                    <div className="flex items-center justify-between p-6 border-b">
                      <h2 className="text-xl font-semibold text-[#6FA073]">
                        Menu
                      </h2>
                      <SheetClose asChild>
                        <button
                          onClick={() => setIsSheetOpen(false)}
                          className="p-2 rounded-full hover:bg-gray-100 transition"
                          aria-label="Close menu"
                        >
                          <X size={24} />
                        </button>
                      </SheetClose>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex-1 overflow-y-auto">
                      <div className="p-6 flex flex-col gap-2">
                        {navLinks.map((link, index) => (
                          <motion.div
                            key={link.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <SheetClose asChild>
                              <Link
                                href={link.href}
                                onClick={() => setIsSheetOpen(false)}
                                className={`
                                  flex items-center justify-between py-3 px-4
                                  rounded-lg transition-all duration-300
                                  ${
                                    link.active
                                      ? "bg-[#6FA073] bg-opacity-10 text-white font-medium"
                                      : "text-[#303042] hover:bg-gray-50"
                                  }
                                `}
                              >
                                <span>{link.name}</span>
                                <ChevronRight
                                  size={18}
                                  className={
                                    link.active
                                      ? "text-[#6FA073]"
                                      : "text-gray-400"
                                  }
                                />
                              </Link>
                            </SheetClose>
                          </motion.div>
                        ))}
                      </div>

                      {/* Mobile Search Section */}
                      <div className="px-6 pb-6">
                        <div className="relative">
                          <form onSubmit={handleSearch}>
                            <input
                              type="text"
                              placeholder="Search..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="
                                w-full
                                h-11
                                rounded-full
                                border
                                border-[#6FA073]
                                pl-4
                                pr-12
                                text-sm
                                outline-none
                                focus:ring-2
                                focus:ring-[#6FA073]
                                focus:ring-opacity-50
                                transition-all
                              "
                            />
                            <button
                              type="submit"
                              className="
                                absolute
                                right-0
                                top-1/2
                                -translate-y-1/2
                                h-11
                                w-11
                                rounded-full
                                bg-[#6FA073]
                                flex
                                items-center
                                justify-center
                                hover:bg-[#5d8f61]
                                transition-colors
                              "
                              aria-label="Search"
                            >
                              <Search size={18} className="text-white" />
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Footer */}
                    <div className="p-6 border-t">
                      <p className="text-xs text-gray-400 text-center">
                        © 2024 Bikesh RougeC. All rights reserved.
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </header>

      {/* Spacer */}
      <div className="h-20 lg:h-25" />
    </>
  );
}
