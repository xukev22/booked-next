import React from "react";

export default function ReadingArchetype() {
  return (
    <div className="grid grid-cols-2 auto-rows-auto gap-8 p-2 rounded-lg">
      {/* Title row spans both columns */}
      <div className="col-span-2 rounded">
        <h1 className="text-white font-bold text-2xl">
          Your Reading Archetype
        </h1>
      </div>

      {/* Bottom cells grow with content */}
      <div className="p-2 rounded bg-gray-700 flex flex-col">
        Left side
        <div className="flex-grow mt-2">Expands with content</div>
      </div>

      <div className="p-2 rounded flex flex-col">
        <div className="flex-grow mt-2">
          <p className="text-white font-bold text-m">Genre Distribution</p>
        </div>
      </div>
    </div>
  );
}
