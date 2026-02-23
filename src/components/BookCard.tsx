import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BookCard() {
  return (
    <Card className="max-w-112.5 overflow-hidden border border-gray-100 shadow-sm rounded-xl">
      <CardContent className="flex p-5 gap-6 items-start">
        {/* Book Cover Image */}
        <div className="relative w-32 h-44 shrink-0 shadow-lg rounded-sm overflow-hidden border border-gray-200">
          <Image
            src="/think-and-grow-rich.jpg" // Replace with your image path
            alt="Think and Grow Rich Book Cover"
            fill
            className="object-cover"
          />
        </div>

        {/* Text and Action Content */}
        <div className="flex flex-col pt-2">
          <h3 className="text-2xl font-bold text-[#b15a3c] leading-tight">
            Think and Grow Rich
          </h3>
          <p className="mt-1 text-xl font-bold text-slate-800">Napoleon Hill</p>

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
