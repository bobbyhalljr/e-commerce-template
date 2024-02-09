import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Products",
  description: "This is the product details page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}

        <footer className="w-full h-auto flex flex-col md:flex-row p-4 bg-white/90 dark:bg-black/90 items-start justify-between px-8 border-t-2 pt-8 md:px-6py-6 space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex flex-col items-start gap-2 font-semibold">
            <span className="text-lg">© 2024 E-Shop</span>
            <nav className="flex flex-col gap-2">
              <Link className="text-sm hover:underline" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:underline" href="#">
                Terms of Service
              </Link>
            </nav>
          </div>
          <nav className="flex flex-col gap-2">
            <Link className="text-sm hover:underline" href="#">
              Contact
            </Link>
            <Link className="text-sm hover:underline" href="#">
              About Us
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Careers
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <FacebookIcon className="h-6 w-6" />
            </Button>
            <Button size="icon" variant="ghost">
              <InstagramIcon className="h-6 w-6" />
            </Button>
          </div>
        </footer>
      </body>
    </html>
  );
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
