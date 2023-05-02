"use client";
import React from "react";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Nav() {
  const { user, error, isLoading } = useUser();
  function isUserLoggedIn() {
    if (user && !isLoading && !error) {
      return true;
    }
    return false;
  }
  return (
    <nav className="flex items-center justify-end px-24 py-8 gap-4">
      <Link href="/">Home</Link>
      {isUserLoggedIn() ? (
        <>
          <Link href="/profile">Profile</Link>
          <a href="/api/auth/logout">Logout</a>
        </>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}
    </nav>
  );
}
