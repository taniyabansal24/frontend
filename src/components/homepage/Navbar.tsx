"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight, Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Analytics", href: "#analytics" },
    { name: "Solutions", href: "#solutions" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
            : "bg-white py-8"
        }`}
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
                  RougeClasses
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
                    className="text-[16px] text-[#303042] hover:text-[#6FA073] relative group transition-all duration-300"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6FA073] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block"
            >
              <a
                href="mailto:contact@rougecodes.com?subject=Demo%20Request"
                className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-[#6FA073] text-white font-medium hover:bg-[#5F8E63] transition-colors"
              >
                Get Started
              </a>
            </motion.div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Open menu"
                  >
                    <Menu size={28} className="text-[#303042]" />
                  </motion.button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-75 sm:w-87.5 p-0 [&>button]:hidden"
                >
                  <SheetTitle className="sr-only">
                    Mobile Navigation Menu
                  </SheetTitle>

                  <div className="flex flex-col h-full">
                    {/* Header */}
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

                    {/* Navigation */}
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
                                className="flex items-center justify-between py-3 px-4 rounded-lg text-[#303042] hover:bg-gray-50 transition-all duration-300"
                              >
                                <span>{link.name}</span>

                                <ChevronRight
                                  size={18}
                                  className="text-gray-400"
                                />
                              </Link>
                            </SheetClose>
                          </motion.div>
                        ))}
                      </div>

                      {/* Mobile CTA */}
                      <div className="px-6 pb-6">
                        <div className="flex flex-col gap-3">
                          <a
                            href="mailto:contact@rougecodes.com?subject=Demo%20Request"
                            className="h-12 rounded-xl bg-[#6FA073] text-white flex items-center justify-center gap-2 font-medium"
                          >
                            <Mail size={18} />
                            Email Us
                          </a>

                          <a
                            href="tel:+919217327326"
                            className="h-12 rounded-xl border border-[#6FA073] text-[#6FA073] flex items-center justify-center gap-2 font-medium"
                          >
                            <Phone size={18} />
                            Call Us
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t">
                      <p className="text-xs text-gray-400 text-center">
                        © 2026 RougeClasses. All rights reserved.
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