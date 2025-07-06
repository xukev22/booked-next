import BaseContainer from "@/components/base-container";
import BookGroup from "@/components/bookgroup";
import { FaPlus } from "react-icons/fa";
import { BookGroupType } from "@/lib/types";
import BookGroupList from "@/components/bookgrouplist";

const mockGroups: BookGroupType[] = [
  { title: "Favorites", likes: 5, books: [] },
  { title: "Sci-Fi", likes: 12, books: [] },
  { title: "Read Later", likes: 3, books: [] },
  // Add more groups as needed
];

export default function Lists() {
  return (
    <BaseContainer>
      <div className="p-24">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">My Book Lists</h1>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <FaPlus className="text-sm" />
            <span>Create New List</span>
          </button>
        </div>
        <BookGroupList groups={mockGroups} />
      </div>
    </BaseContainer>
  );
}
