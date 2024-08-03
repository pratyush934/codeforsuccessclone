"use client";

import Image from "next/image";
import React from "react";
import { PrimaryButton } from "./Buttons";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const AppBar = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="flex justify-between px-2 py-2 border-b ">
      <div className="font-bold text-wrap text-xl ml-0 pr-1 pt-2 text-center md:ml-10 lg:ml-10 sm:text-xl sm:text-ellipsis ">
        Code for Peace
      </div>

      <div>
        {session?.user && (
          <div className="hidden sm:block font-bold text-2xl text-white text-center">
            Hello, {session?.user.name}
          </div>
        )}
      </div>

      <div className="flex items-center">
        <div>
          <Link href="/course" className="mr-16">
            Courses
          </Link>
        </div>
        <div className="mr-1 md:mr-10">
          {session?.user ? (
            <PrimaryButton onClick={() => signOut()}>Logout</PrimaryButton>
          ) : (
            <PrimaryButton onClick={() => signIn("google")}>
              Login
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppBar;
