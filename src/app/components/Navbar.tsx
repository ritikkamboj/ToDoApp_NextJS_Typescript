"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

function Navbar() {
  const searchparams = useSearchParams();
  const state = searchparams.get("todo");
  console.log(state);
  return (
    <nav>
      <Link href="/" className={state === null ? "active" : ""}>
        All
      </Link>
      <Link href="/?todo=active" className={state === "active" ? "active" : ""}>
        Active
      </Link>
      <Link
        href="/?todo=completed"
        className={state === "completed" ? "active" : ""}
      >
        Completed
      </Link>
    </nav>
  );
}

export default Navbar;
