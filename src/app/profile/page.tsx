import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UserProfile from "@/components/UserProfile";

const Profile = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl">User Profile</h1>
      <UserProfile />
    </div>
  );
};

export default Profile;
