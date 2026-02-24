export default function Footer() {
  return (
    <div className="w-full py-4 text-center text-sm text-muted-foreground bg-background border-t border-border">
      © {new Date().getFullYear()} Ebook Portal. All rights reserved.
    </div>
  );
}
