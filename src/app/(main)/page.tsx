import Banner from "@/components/Banner";
import BookGridSkeleton from "@/components/BookGridSkeleton";
import BookList from "@/components/BookLists";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="my-6 container mx-auto px-4">
      <Banner />
      <Suspense fallback={<BookGridSkeleton />}>
        <BookList />
      </Suspense>
    </div>
  );
}
