import Link from "next/link";
import { Button } from "./button";

export function Footer() {
  return (
    <div>
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
    </div>
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
