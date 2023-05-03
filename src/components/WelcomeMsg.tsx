"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

interface Props {
  className?: string;
}

export default function WelcomeMsg(props: Props) {
  const { user, error, isLoading } = useUser();
  if (user) {
    return <h4 {...props}>Welcome {user.name}</h4>;
  } else if (!isLoading) {
    return (
      <div {...props}>
        Please{" "}
        <a
          href="/api/auth/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </a>
      </div>
    );
  } else {
    return null;
  }
}
