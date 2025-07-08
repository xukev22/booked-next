import React from "react";
import { FaUserCircle, FaCamera, FaPencilAlt } from "react-icons/fa";

type ProfileCardProps = {
  username: string;
  books: number;
  pages: number;
  friends: number;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  username,
  books,
  pages,
  friends,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-between h-full bg-gray-800 rounded p-4 transition-colors">
      {/* Profile Icon + Camera on Hover */}
      <div className="relative group w-24 h-24">
        <FaUserCircle className="text-white text-6xl w-full h-full transition-colors group-hover:text-gray-400" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <FaCamera
            size={40}
            className="text-white bg-opacity-60 p-2 rounded-full"
          />
        </div>
      </div>

      {/* Username */}
      <h2 className="text-white font-bold mt-2">{username}</h2>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        <button className="flex items-center gap-1 bg-red-700 hover:bg-red-800 text-white px-3 py-1 rounded-md text-sm transition-colors">
          Logout
        </button>
        <button className="flex items-center gap-1 hover:bg-gray-500 text-white px-3 py-1 rounded-md text-sm transition-colors">
          <FaPencilAlt />
        </button>
      </div>

      {/* Stats */}
      <div className="mt-auto grid grid-cols-3 w-full text-center text-white gap-2 pt-6">
        {[
          { label: "book", value: books },
          { label: "page", value: pages },
          { label: "friend", value: friends },
        ].map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-sm">
            <span className="text-lg font-bold">{stat.value}</span>
            <span className="text-gray-300">
              {stat.value === 1 ? stat.label : `${stat.label}s`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
