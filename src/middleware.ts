import { getSession } from "next-auth/react";
import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const requestForNextAuth = {
    headers: {
      cookie: request.headers.get("cookie"),
    },
  };

  const session = getSession({request})

}
