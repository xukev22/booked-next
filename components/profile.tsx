import React from "react";
import ProfileCard from "./profile-card";
import CurrentlyReading from "./currently-reading";
import ReadingArchetype from "./reading-archetype";

export default function Profile() {
  return (
    <div className="p-12">
      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {/* First container: 1/3 of the row */}
        <div className="col-span-1 row-span-1 bg-gray-800 p-4 rounded">
          <ProfileCard username="kevuhh" books={5} pages={69} friends={420} />
        </div>

        {/* Second container: 2/3 of the row */}
        <div className="col-span-2 row-span-1 bg-gray-700 p-4 rounded">
          <CurrentlyReading />
        </div>

        {/* Third container: full width (all 3 columns) */}
        <div className="col-span-3 row-span-1 bg-gray-600 p-4 rounded">
          <ReadingArchetype />
        </div>
      </div>
    </div>
  );
}
