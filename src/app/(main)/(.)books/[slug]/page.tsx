import { getBookAction, getBooksAction } from "@/actions/books.actions";
import QuickViewModal from "@/components/QuickViewModal";
import { IBook } from "@/types/book.types";

interface BookQuickViewProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data: books } = await getBooksAction();

  return books.map((book: IBook) => ({ slug: book.slug }));
}

export default async function BookQuickView({ params }: BookQuickViewProps) {
  const { slug } = await params;
  const { data: book } = await getBookAction(slug);
  return <QuickViewModal book={book} />;
}
