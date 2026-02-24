import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IBook } from "@/types/book.types";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

export default function BookCard({ book }: IBookCardProps) {
  const { slug, title, genre, coverImage } = book;
  return (
    <Card className="overflow-hidden group border shadow-sm p-0 rounded-xl">
      <CardContent className="flex gap-4 h-64 items-start  p-4">
        {/* Book Cover Image */}
        <div className="relative h-full w-40 shrink-0 shadow-md rounded-md overflow-hidden border bg-muted">
          <Image
            src={coverImage}
            alt={`${title} Book Cover`}
            sizes="(max-width: 768px) 100vw, 33vw"
            fill
            className="object-cover group-hover:scale-115 transition-all duration-300"
          />
        </div>

        {/* Text and Action Content */}
        <div className="flex flex-col pt-1 h-full">
          <div className="grow">
            <h3 className="text-2xl font-bold text-primary leading-tight text-balance">
              {title}
            </h3>
            <p className="mt-1 text-lg font-medium text-muted-foreground text-balance">
              {genre}
            </p>
          </div>

          <div className="mt-8">
            <Button
              asChild
              variant="outline"
              className="rounded-lg px-6 h-10 w-full"
            >
              <Link href={`/books/${slug}`}>Read more</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
