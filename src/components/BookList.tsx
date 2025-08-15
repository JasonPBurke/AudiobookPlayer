import BookListItem from "./BookListItem";
// import books from "../dummyBooks";

type Book = {
  id: string;
  title: string;
  author: string;
  audio_url: string;
  thumbnail_url: string;
};

type Books = {
  [key: string]: Book;
};

type BookListProps = {
  books: Books;
};

export default function BookList(books: BookListProps) {
  // console.log(books.books);
  // return (
  //   <ul>
  //     {books.map((book: Book) => {
  //       <li>
  //         <BookListItem book={book}></BookListItem>
  //       </li>;
  //     })}
  //   </ul>
  // );
}
