import React from "react";
import UserProfile from "@/components/UserProfile";
import { getUser } from "@/utils/auth-wrapper";

const Profile = async () => {
  const user = await getUser();
  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
      <h1 className="mb-4 text-4xl">User Profile</h1>
    </div>
  );
};

export default Profile;
