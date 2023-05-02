"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });
/*
export const metadata = {
  title: "Few Auth0 Test Application",
  description: "Blah blah blah",
};
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <Nav />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
