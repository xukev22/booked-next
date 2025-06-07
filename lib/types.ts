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
