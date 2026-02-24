import BookCard from "@/components/BookCard";
import { IBook } from "@/types/book.types";
import { getBooksAction } from "@/actions/books.actions";

export default async function BookList() {
  const { data: books } = await getBooksAction();
  return (
    <div className="my-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {books.map((book: IBook) => (
        <BookCard key={book.slug} book={book} />
      ))}
    </div>
  );
}
