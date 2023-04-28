import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between ">
        <h1 className="text-4xl mb-4">Few Auth0 Test Application</h1>
        <p className="text-sm mb-2">
          This is a test application for setting up Auth0 with Next.js. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Eos, totam veniam?
          Mollitia maxime nihil placeat deserunt quis dolorem distinctio
          reiciendis, eius nisi eligendi illo officia perspiciatis quam delectus
          dicta sed?
        </p>
      </div>
    </main>
  );
}
