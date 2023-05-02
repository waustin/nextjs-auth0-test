"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function UserProfile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    console.log("User", user);
  }

  return (
    <div className="userProfile">
      <h3>User Profile</h3>
      {user && (
        <div>
          {user.name} ({user.email})<br />
          Tenant: {user.tenant}
          <br />
          User ID: {user.user_id}
          <br />
          Username: {user.username}
          <br />
          Login Count: {user.logins_count}
          <br />
          Last Login: {user.last_login}
          <br />
        </div>
      )}
    </div>
  );
}
