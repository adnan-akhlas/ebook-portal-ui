import Banner from "@/components/Banner";
import BookCard from "@/components/BookCard";
import { IBook } from "@/types/book";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`);
  const { data: books } = await response.json();

  return (
    <div className="my-20 container mx-auto px-4">
      <Banner />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-6 md:grid-cols-3 xl:grid-cols-4">
        {books.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}
