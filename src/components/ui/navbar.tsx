import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/modeToogle";
import Link from "next/link";

export function Navbar(){
    return (
        <header className="w-full z-30 sticky top-0 left-0 right-0 h-20 bg-white/90 dark:bg-black/90 flex items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="text-lg">E-Shop</span>
          </Link>
          <nav className="hidden lg:flex lg:items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="" variant="link">
                  Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="#">Clothing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Electronics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Home & Kitchen</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link className="text-sm hover:underline" href="#">
              Shop
            </Link>
            <Link className="text-sm hover:underline" href="#">
              About
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                  <ShoppingCartIcon className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 rounded-lg shadow-lg border border-gray-200 dark:border-gray-900">
                <DropdownMenuLabel className="text-lg font-semibold px-4 py-2">
                  Your Cart
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="px-4 py-2">
                  Product 1
                  <DropdownMenuShortcut className="text-sm">
                    $19.99
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2">
                  Product 2
                  <DropdownMenuShortcut className="text-sm">
                    $29.99
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2">
                  Product 3
                  <DropdownMenuShortcut className="text-sm">
                    $39.99
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="px-4 py-2">
                  Total
                  <DropdownMenuShortcut className="font-semibold text-sm">
                    $89.97
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="px-4 py-2">
                  <Button className="w-full">Checkout</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button>Sign In</Button>
          </div>
        </header>
    )
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