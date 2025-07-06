export type WithChildren = {
  children: React.ReactNode;
};

export interface LinkItem {
  name: string;
  link: string;
}

export interface LoadingProps {
  message?: string; // Optional message prop, defaulting to 'Loading...'
}

export type BookType = {
  id: string;
  userId: string;
  bookTitle: string;
  isbn: string;
  thumbnail: string;
  empty?: boolean;
};

export type BookGroupType = {
  title: string;
  likes: number;
  books: BookType[];
};
