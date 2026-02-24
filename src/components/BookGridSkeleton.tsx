import BookCardSkeleton from "@/components/BookCardSkeleton";

export default function BookGridSkeleton() {
  return (
    <div className="my-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <BookCardSkeleton key={index} />
      ))}
    </div>
  );
}
