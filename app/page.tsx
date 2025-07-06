import BaseContainer from "@/components/base-container";
import Book from "@/components/book";
import BookList from "@/components/booklist";
import Feature from "@/components/feature";

export default function Home() {
  return (
    <BaseContainer>
      {/* <p>welcome home</p>
      <Book
        id="1"
        userId="2"
        bookTitle="sigma"
        isbn="69"
        thumbnail="lol"
        empty={true}
      />
      <BookList books={[]}></BookList> */}
      <Feature title="Recommended reads..." books={[]} />
      <Feature title="NY Times Best Sellers..." books={[]} />
      <Feature title="Read something new..." books={[]} />
      <Feature title="Books from real stories..." books={[]} />
      <Feature title="Books for young adults..." books={[]} />
      <Feature title="Start a new series..." books={[]} />
    </BaseContainer>
  );
}
