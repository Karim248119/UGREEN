import React from "react";

export default function Logo({ className }: { className: string }) {
  return (
    <div className="flex gap-2 items-end">
      <div
        className={` w-10 h-10 flex justify-center  bg-accent text-primary rounded-full ${className}`}
      >
        <span className="-mt-2 text-5xl font-bold ">U</span>
      </div>
      <span className="-mt-2 text-3xl font-bold ">GREEN</span>
    </div>
  );
}
