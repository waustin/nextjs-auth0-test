// Code from: https://github.com/auth0/nextjs-auth0/issues/889
// Make Auth0 API calls from the Next13 app dir
import { cookies } from "next/headers";

const getUser = async () => {
  // What About Errors
  const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/auth/me`, {
    headers: {
      cookie: `appSession=${cookies().get("appSession")?.value}`,
    },
  });
  const user = await res.json();
  return user;
};

const isUserLoggedIn = async () => {
  const user = await getUser();
  // Not sure this is correct check. Maybe check for a user ID?
  return user && user.email;
};

export { getUser, isUserLoggedIn };
