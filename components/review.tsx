import React from "react";
import { FaHeart } from "react-icons/fa";

type ReviewProps = {
  username: string;
  date: string;
  bookTitle: string;
  thumbnail: string;
  score: number;
  desc: string;
  likes: number;
  commentCount: number;
};

const Review: React.FC<ReviewProps> = ({
  username,
  date,
  bookTitle,
  thumbnail,
  score,
  desc,
  likes,
  commentCount,
}) => {
  return (
    <div className="relative bg-white rounded-lg p-4 shadow-md overflow-hidden">
      {/* Thumbnail in top-right, absolutely positioned */}
      <a
        href="#"
        className="absolute top-4 right-4 w-16 h-24 transform hover:scale-105 transition-transform"
      >
        <img
          src={thumbnail}
          alt={bookTitle}
          className="w-full h-full object-cover rounded-md shadow"
        />
      </a>

      {/* Username + Date */}
      <div className="flex items-center text-sm text-gray-600">
        <span className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer transition-colors">
          {username}
        </span>
        <span className="mx-2 text-xs">•</span>
        <span className="text-xs">{date}</span>
      </div>

      {/* Book title + score */}
      <div className="mt-1 text-lg font-bold text-gray-900 flex items-center gap-2">
        <a href="#" className="hover:text-blue-500 transition-colors">
          {bookTitle}
        </a>
        <span className="text-sm font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          {score}/100
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-800 text-sm mt-2 pr-20">{desc}</p>

      {/* Likes & Comments */}
      <div className="mt-4 flex gap-6 text-gray-600 text-sm items-center">
        <div className="flex items-center gap-1">
          <span>{likes}</span>
          <FaHeart className="text-red-500 text-xs" />
        </div>
        <span>
          {commentCount} comment{commentCount !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
};

export default Review;
