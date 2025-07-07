import React from "react";
import Feature from "./feature";
import { BookType } from "@/lib/types";
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type FPFeatureProps = {
  title: string;
  subtitle?: string;
  books: BookType[];
  booksPerPage?: number;
};

const FPFeature: React.FC<FPFeatureProps> = ({
  title,
  subtitle,
  books,
  booksPerPage = 8,
}) => {
  const totalPages = Math.max(1, Math.ceil(books.length / booksPerPage));
  const currentPage = 1; // placeholder for now
  const sortDirection = "asc"; // placeholder
  const sortBy = "none"; // placeholder

  return (
    <div className="mb-12">
      <Feature title={title} subtitle={subtitle} books={books} />

      {/* Filter + Pagination section */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-2">
        {/* Sort controls */}
        <div className="flex items-center gap-3">
          <select
            className="bg-gray-800 text-white px-3 py-2 rounded-md border border-gray-700 focus:outline-none"
            defaultValue="none"
          >
            <option value="none">Sort by...</option>
            <option value="reviewDate">Review Date</option>
            <option value="rating">Rating</option>
          </select>

          <button className="text-white hover:text-blue-400 transition-colors">
            {sortDirection === "asc" ? (
              <FaSortAmountUpAlt className="w-5 h-5" />
            ) : (
              <FaSortAmountDownAlt className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Pagination controls */}
        <div className="flex items-center gap-4 text-white text-sm">
          <span>
            Page {totalPages === 0 ? 1 : currentPage} of {totalPages}
          </span>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
              &laquo;
            </button>
            <button className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
              <FiChevronLeft />
            </button>
            <button className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
              <FiChevronRight />
            </button>
            <button className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FPFeature;
