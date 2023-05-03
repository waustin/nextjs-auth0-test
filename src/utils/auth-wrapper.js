import { cookies } from "next/headers";

const getUser = async () => {
  const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/auth/me`, {
    headers: {
      cookie: `appSession=${cookies().get("appSession")?.value}`,
    },
  });
  const user = await res.json();
  return user;
};

export { getUser };
