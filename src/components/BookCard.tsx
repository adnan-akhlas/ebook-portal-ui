import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IBook } from "@/types/book";

interface IBookCardProps {
  book: IBook;
}

export default function BookCard({ book }: IBookCardProps) {
  const { title, genre, coverImage } = book;
  return (
    <Card className="overflow-hidden border border-primary shadow-sm rounded-xl">
      <CardContent className="flex gap-4 items-start">
        {/* Book Cover Image */}
        <div className="relative w-32 h-44 shrink-0 shadow-lg rounded-sm overflow-hidden border border-gray-200">
          <Image
            src={coverImage} // Replace with your image path
            alt="Think and Grow Rich Book Cover"
            fill
            className="object-cover"
          />
        </div>

        {/* Text and Action Content */}
        <div className="flex flex-col pt-2 h-full">
          <div className="grow">
            <h3 className="text-2xl font-bold text-[#b15a3c] leading-tight">
              {title}
            </h3>
            <p className="mt-1 text-lg font-bold text-slate-800">{genre}</p>
          </div>
          <div className="mt-8">
            <Button
              variant="outline"
              className="border-[#b15a3c] text-[#b15a3c] hover:bg-[#b15a3c] hover:text-white rounded-lg px-6 h-10 transition-colors"
            >
              Read more
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
