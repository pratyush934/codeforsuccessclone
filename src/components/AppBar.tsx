"use client";

import Image from "next/image";
import React from "react";
import { PrimaryButton } from "./Buttons";
import Link from "next/link";

const AppBar = () => {
  return (
    <div className="flex justify-between px-2 py-2 border-b ">
      <div className="font-bold text-wrap text-3xl ml-10">Code for Peace</div>

      <div className="flex items-center">
        <div>
          <Link href="/course" className="mr-16">
            Courses
          </Link>
        </div>
        <div className="mr-10">
          <PrimaryButton onClick={() => console.log(`Hello`)}>
            Login
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
