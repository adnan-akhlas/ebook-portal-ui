import { getBookAction } from "@/actions/books.actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface IBookPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BookPage({ params }: IBookPageProps) {
  const { slug } = await params;
  const { data: book } = await getBookAction(slug);
  return (
    <div className="bg-background flex justify-center items-center mt-6">
      <Card className="max-w-4xl w-full flex flex-row gap-6 p-4">
        {/* Cover Image */}
        <div className="relative h-80 w-6xl">
          <Image
            src={book.coverImage}
            alt={book.title}
            sizes="(max-width: 768px) 100vw, 33vw"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Book Info */}
        <CardContent className="flex flex-col justify-between p-0">
          <div>
            <CardHeader>
              <CardTitle className="text-2xl">{book.title}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {book?.author?.name || "Unknown Author"}
              </CardDescription>
            </CardHeader>
            <p className="mt-4 text-sm text-muted-foreground">
              {book.description}
            </p>
            <p className="mt-2 text-sm font-medium text-accent-foreground">
              Genre: {book.genre}
            </p>
          </div>

          <div className="mt-6">
            <Button
              asChild
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href={book.file} target="_blank" download>
                Download PDF
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
