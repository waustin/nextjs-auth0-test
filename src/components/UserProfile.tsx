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

  function handleSaveProfile() {
    console.log("Saving profile...");
  }

  function handleUpdatePassword() {
    console.log("Updating password...");
  }

  return (
    <div className="userProfile">
      {user && (
        <div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <input
                type="text"
                defaultValue={user.name ?? ""}
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <input
                type="text"
                defaultValue={user.email ?? ""}
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-0">
              <button
                onClick={handleSaveProfile}
                className="rounded-md bg-purple-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save Profile
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              Update Password
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-0">
                <button
                  onClick={handleUpdatePassword}
                  className="rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
