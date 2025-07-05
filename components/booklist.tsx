import React from "react";
import { BookType } from "@/lib/types";
import Book from "./book";

type BookListProps = {
  books: BookType[];
};

const BookList: React.FC<BookListProps> = ({ books }) => {
  const displayBooks: BookType[] =
    books.length > 0
      ? books
      : Array.from({ length: 8 }, (_, i) => ({
          id: `empty-${i}`,
          userId: "",
          bookTitle: "",
          isbn: "",
          thumbnail: "",
          empty: true,
        }));

  return (
    <div className="w-full bg-gray-900 px-4 py-2 rounded-md overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full">
      <div className="flex space-x-[5vw] pb-2">
        {displayBooks.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
