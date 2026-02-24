"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IBook } from "@/types/book.types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";

interface QuickViewModalProps {
  book: IBook;
}

export default function QuickViewModal({ book }: QuickViewModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const router = useRouter();

  const handleClose = (status: boolean): void => {
    setIsOpen(status);
    if (!status) {
      router.back();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader className="sr-only">
          <DialogTitle>{book.title}</DialogTitle>
          <DialogDescription>Quick view for {book.title}</DialogDescription>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  );
}
