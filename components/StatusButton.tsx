"use client";

import { useState, useTransition } from "react";
import { toggleStatus } from "@/app/actions";

export default function StatusButton() {
  const [checkedIn, setCheckedIn] = useState(true);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    // Optimistic UI
    setCheckedIn((prev) => !prev);

    startTransition(async () => {
      const real = await toggleStatus(checkedIn);
      setCheckedIn(real);
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`text-xs px-3 py-1 rounded-full transition ${
        checkedIn
          ? "bg-emerald-100 text-emerald-700"
          : "bg-rose-100 text-rose-700"
      }`}
    >
      {checkedIn ? "Checked In" : "Checked Out"}
    </button>
  );
}
