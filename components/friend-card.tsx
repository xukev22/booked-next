import React from "react";
import { FaUserCircle, FaBolt, FaUserPlus, FaTimes } from "react-icons/fa";

type FriendCardProps = {
  name: string;
  mutuals?: string[]; // presence of this = suggested friend
};

export default function FriendCard({ name, mutuals }: FriendCardProps) {
  const isSuggested = mutuals !== undefined;

  return (
    <div className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3 hover:bg-gray-700 transition-colors">
      {/* Left: PFP + Username + Mutuals */}
      <div className="flex items-center gap-4">
        {/* Placeholder PFP */}
        <FaUserCircle className="text-white text-3xl" />

        {/* Name and (optional) mutuals */}
        <div>
          <p className="text-white font-semibold hover:text-gray-300 transition-colors cursor-pointer">
            {name}
          </p>
          {isSuggested && (
            <p className="text-sm text-gray-400">
              {mutuals.length} mutual friend{mutuals.length !== 1 ? "s" : ""} (
              {mutuals.slice(0, 2).join(", ")}
              {mutuals.length > 2 ? ", ..." : ""})
            </p>
          )}
        </div>
      </div>

      {/* Right: Action buttons */}
      <div className="flex gap-2">
        {isSuggested ? (
          <>
            <button className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
              <FaUserPlus />
              <span>Add Friend</span>
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded text-sm transition-colors">
              <FaTimes />
            </button>
          </>
        ) : (
          <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
            <FaBolt />
            <span>Nudge</span>
          </button>
        )}
      </div>
    </div>
  );
}
