"use client";

import React from "react";
import Loading from "./loading";
import { useSession } from "next-auth/react";
import DefaultContainer from "./default-container";

export default function DashboardMain() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div className="grid grid-cols-3 gap-10 p-2">
          <DefaultContainer>
            <p></p>
            <p>hello {session?.user.name}</p>
          </DefaultContainer>
          <div className="col-span-2 bg-gray-200 rounded-lg">
            <h2 className="font-bold mb-2">Main (2/3)</h2>
            <p>Some main content</p>
          </div>
          <div className="col-span-3 bg-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-1">Full-Width Row 2</h3>
            <p>Content for row 2</p>
          </div>
          <div className="col-span-3 bg-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-1">Full-Width Row 3</h3>
            <p>Content for row 3</p>
          </div>
          <div className="col-span-3 bg-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-1">Full-Width Row 4</h3>
            <p>Content for row 4</p>
          </div>
        </div>
      ) : (
        <Loading message="Loading session..." />
      )}
    </div>
  );
}
