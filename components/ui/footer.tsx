"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const publicNavItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const privateNavItems = [
  { label: "Wallet", href: "/wallet" },
  { label: "My Trips", href: "/trips" },
  { label: "Book Trip", href: "/booking" },
  { label: "Routes", href: "/routes" },
];

export const Footer: React.FC = () => {
  const { user } = useAuth();
  const navItems = user ? privateNavItems : publicNavItems;

  return (
    <footer className="border-t border-border bg-gradient-to-b from-background/80 to-background mt-20">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + description */}
        <div>
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <img
              src="images/logo.jpg"
              alt="Logo"
              className="h-20 w-20 rounded-lg"
            />
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Seamless urban mobility at your fingertips. Easy, affordable, and
            time-convenient.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm text-muted-foreground hover:text-primary transition-colors"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>support@anygo.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Cyber City, Gurgaon, India</span>
            </li>
          </ul>
        </div>

        {/* Social + Support */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">Stay Connected</h4>
          <div className="flex space-x-4 mb-6">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>

          <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-primary">
              Terms & Conditions
            </Link>
            <Link href="/support" className="hover:text-primary">
              Help & Support
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AnyGo. All rights reserved.
      </div>
    </footer>
  );
};
