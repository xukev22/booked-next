import React from "react";
import { BookType } from "@/lib/types";
import BookGroupBody from "./bookgroupbody";
import { FaHeart } from "react-icons/fa";

type BookGroupProps = {
  books: BookType[];
  title: string;
  likes: number;
};

const BookGroup: React.FC<BookGroupProps> = ({ books, title, likes }) => {
  return (
    <div className="w-[20rem] h-[24rem] bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
      {/* Top 80% - BookGroupBody */}
      <div className="flex-1">
        <BookGroupBody books={books} />
      </div>

      {/* Bottom 20% - Title and Metadata */}
      <div className="px-4 py-3 border-t border-gray-200 text-center">
        <h2 className="text-black font-bold text-lg">{title}</h2>
        <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mt-1">
          <span>
            {books.length} {books.length === 1 ? "book" : "books"}
          </span>
          <span className="flex items-center gap-1">
            {likes}
            <FaHeart className="text-red-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookGroup;
