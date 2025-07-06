// components/BookGroupList.tsx
import React from "react";
import { BookGroupType } from "@/lib/types";
import BookGroup from "./bookgroup";

type BookGroupListProps = {
  groups: BookGroupType[];
};

const BookGroupList: React.FC<BookGroupListProps> = ({ groups }) => {
  return (
    <div className="mt-6 flex flex-wrap gap-6">
      {groups.map((group, idx) => (
        <BookGroup
          key={`${group.title}-${idx}`}
          books={group.books}
          title={group.title}
          likes={group.likes}
        />
      ))}
    </div>
  );
};

export default BookGroupList;
