import React from "react";
import { BookType } from "@/lib/types";
import { FaPen, FaTrash } from "react-icons/fa";

type BookGroupBodyProps = {
  books: BookType[];
};

const BookGroupBody: React.FC<BookGroupBodyProps> = ({ books }) => {
  const displayedBooks =
    books.length > 4
      ? [...books].sort(() => 0.5 - Math.random()).slice(0, 4)
      : books;

  const getLayoutClasses = () => {
    switch (displayedBooks.length) {
      case 1:
        return "grid grid-cols-1 place-items-center";
      case 2:
        return "grid grid-cols-2 gap-2";
      case 3:
        return "grid grid-cols-2 gap-2 grid-rows-[1fr_1fr]";
      default:
        return "grid grid-cols-2 gap-2";
    }
  };

  return (
    <div className="relative h-full p-4 group">
      {/* Hover overlay */}
      <div className="absolute inset-4 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" />

      {/* Buttons (edit + delete) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow">
          <FaPen />
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow">
          <FaTrash />
        </button>
      </div>

      {/* Book thumbnails or empty message */}
      {books.length === 0 ? (
        <div className="flex items-center justify-center w-full h-full z-0 relative">
          <p className="text-gray-400 text-center">Empty list</p>
        </div>
      ) : (
        <div className={`relative z-0 h-full ${getLayoutClasses()}`}>
          {displayedBooks.map((book) => (
            <img
              key={book.id}
              src={book.thumbnail}
              alt={book.bookTitle}
              className="w-full h-full object-cover rounded-md"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookGroupBody;
