"use client";

import React from "react";
import Loading from "./loading";
import { useSession } from "next-auth/react";

export default function DashboardMain() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <p>hello {session?.user.name}</p>
      ) : (
        <Loading message="Loading session..." />
      )}
    </div>
  );
}
