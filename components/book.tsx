import React from "react";
import Link from "next/link";
import { BookType } from "@/lib/types";

const Book: React.FC<BookType> = ({
  id,
  userId,
  bookTitle,
  isbn,
  thumbnail,
  empty,
}) => {
  const bookContent = empty ? (
    <span className="text-sm text-gray-400">Empty Book</span>
  ) : (
    <img
      src={thumbnail}
      alt={bookTitle}
      className="w-full h-full object-cover rounded-md"
    />
  );

  return empty ? (
    <div
      className="w-32 h-48 min-w-[8rem] bg-gray-800 rounded-md flex items-center justify-center"
      style={{ backgroundColor: "#2e2e2e" }}
    >
      {bookContent}
    </div>
  ) : (
    <Link href={`/${isbn}`} passHref>
      <div
        className="w-32 h-48 min-w-[8rem] bg-gray-800 hover:scale-105 transition-transform duration-200 rounded-md flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: "#2e2e2e" }}
      >
        {bookContent}
      </div>
    </Link>
  );
};

export default Book;
