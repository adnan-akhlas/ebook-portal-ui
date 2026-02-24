import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <section className="grow"> {children}</section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
