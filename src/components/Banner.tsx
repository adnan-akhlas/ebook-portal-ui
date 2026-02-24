import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative container mx-auto px-4 w-full min-h-80 overflow-hidden rounded-2xl bg-[#b19a7b] flex items-center md:px-20">
      {/* 1. Background Texture Layer */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
        <Image
          src="/texture.jpg"
          alt="background texture"
          sizes="(max-width: 768px) 100vw, 33vw"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Text Content */}
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-sm">
          Connect, Share and Trade Your <br className="hidden md:block" />
          Favourite Reads...
        </h2>
      </div>

      {/* 3. The Book Image (Floating right) */}
      <div className="absolute right-0 bottom-0 w-1/2 h-[90%] md:h-full flex items-end justify-end">
        <div className="relative w-full h-full lg:translate-y-4">
          <Image
            src="/hand-holding-book.png"
            alt="Hand holding an open book"
            sizes="(max-width: 768px) 100vw, 33vw"
            fill
            className="object-contain object-bottom-right"
          />
        </div>
      </div>
    </section>
  );
}
