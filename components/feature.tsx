import React from "react";
import { BookType } from "@/lib/types";
import BookList from "./booklist";

type FeatureProps = {
  title: string;
  subtitle?: string;
  books: BookType[];
};

const Feature: React.FC<FeatureProps> = ({ title, subtitle, books }) => {
  return (
    <section className="w-full px-6 py-6 my-4 rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
      </div>
      <BookList books={books} />
    </section>
  );
};

export default Feature;
