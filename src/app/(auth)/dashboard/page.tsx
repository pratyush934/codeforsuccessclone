"use client";
import React from "react";
import DashBoardLayout from "./layoutt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { getSession, useSession } from "next-auth/react";
import CoreLayout from "@/components/layouts/CoreLayout";
import RichTextExample from "@/components/TextEditor/RTE";

const DashBoard = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect("/");
    return null;
  }

  console.log("==========-------======----->", session);
  // const session = await getServerSession(authOptions);
  // console.log("==========-------======----->",session);

  return (
    <CoreLayout>
      <div className="text-white">
        <RichTextExample />
      </div>
    </CoreLayout>
  );
};

export default DashBoard;
