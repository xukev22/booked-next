import React from "react";

export default function CurrentlyReading() {
  return (
    <div className="flex w-full h-full gap-4">
      <div className="w-1/2  p-4 border-1 rounded-xl border-white">
        Left side
      </div>
      <div className="w-1/2">
        <h1 className="text-white text-xl font-bold mb-4">Currently Reading</h1>
        <h3 className="text-gray-300">No books currently being read...</h3>
      </div>
    </div>
  );
}
