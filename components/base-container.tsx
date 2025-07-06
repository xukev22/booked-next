import { WithChildren } from "@/lib/types";
import React from "react";

export default function BaseContainer({ children }: WithChildren) {
  return <main className="w-full min-h-screen p-12">{children}</main>;
}
