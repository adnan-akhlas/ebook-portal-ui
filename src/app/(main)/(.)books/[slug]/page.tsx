import { getBookAction } from "@/actions/books.actions";
import QuickViewModal from "@/components/QuickViewModal";

interface BookQuickViewProps {
  params: Promise<{ slug: string }>;
}

export default async function BookQuickView({ params }: BookQuickViewProps) {
  const { slug } = await params;
  const { data: book } = await getBookAction(slug);
  return <QuickViewModal book={book} />;
}
