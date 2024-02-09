"use client";
import { Button } from "@/components/ui/button";
import {
  CarouselItem,
  CarouselContent,
  Carousel,
} from "@/components/ui/carousel";
import { CardContent, Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function Component() {
  const router = useRouter();

  return (
    <>
      <main>
        <Navbar />
        <section className="relative w-full h-full">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <img
                  alt="Product 1"
                  className="object-cover brightness-75 w-full h-full"
                  height={800}
                  src="/hero.jpg"
                  style={{
                    aspectRatio: "1200/800",
                    objectFit: "cover",
                  }}
                  width={1200}
                />
              </CarouselItem>
            </CarouselContent>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black bg-opacity-30">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Discover Endless Possibilities
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white">
                Explore our wide range of products tailored to your needs.
              </p>
              <div className="mt-6">
                <Button
                  className="bg-white hover:text-white text-black"
                  size="lg"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </Carousel>
        </section>
        <section className="w-full py-12 px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <img
                alt="Product 1"
                className="object-cover w-full h-64"
                height={500}
                src="/product-1.jpg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <h3 className="text-lg font-semibold">Product 1</h3>
                <p className="text-sm text-gray-500">
                  This is a short description of the product.
                </p>
                <div className="mt-auto">
                  <Button onClick={() => router.push("/product")}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Product 2"
                className="object-cover w-full h-64"
                height={500}
                src="/product-2.jpg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <h3 className="text-lg font-semibold">Product 2</h3>
                <p className="text-sm text-gray-500">
                  This is a short description of the product.
                </p>
                <div className="mt-auto">
                  <Button onClick={() => router.push("/product")}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Product 3"
                className="object-cover w-full h-64"
                height={500}
                src="/product-3.jpg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <h3 className="text-lg font-semibold">Product 3</h3>
                <p className="text-sm text-gray-500">
                  This is a short description of the product.
                </p>
                <div className="mt-auto">
                  <Button onClick={() => router.push("/product")}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 px-4 md:px-6 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <img
                alt="Product 1"
                className="object-cover w-full h-64"
                height={500}
                src="/product-4.jpg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <h3 className="text-lg font-semibold">Product 1</h3>
                <p className="text-sm text-gray-500">
                  This is a short description of the product.
                </p>
                <div className="mt-auto">
                  <Button onClick={() => router.push("/product")}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Product 2"
                className="object-cover w-full h-64"
                height={500}
                src="/product-5.jpg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <h3 className="text-lg font-semibold">Product 2</h3>
                <p className="text-sm text-gray-500">
                  This is a short description of the product.
                </p>
                <div className="mt-auto">
                  <Button onClick={() => router.push("/product")}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Product 3"
                className="object-cover w-full h-64"
                height={500}
                src="/product-6.jpg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <h3 className="text-lg font-semibold">Product 3</h3>
                <p className="text-sm text-gray-500">
                  This is a short description of the product.
                </p>
                <div className="mt-auto">
                  <Button onClick={() => router.push("/product")}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5 text-sm">
                    <h3 className="font-semibold">Customer Name</h3>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      2 days ago
                    </time>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
                <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                  This is a customer review. This product is amazing!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5 text-sm">
                    <h3 className="font-semibold">Customer Name</h3>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      2 days ago
                    </time>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
                <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                  This is a customer review. This product is amazing!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5 text-sm">
                    <h3 className="font-semibold">Customer Name</h3>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      2 days ago
                    </time>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
                <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                  This is a customer review. This product is amazing!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Secure Checkout
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <LockIcon className="h-8 stroke-primary w-8" />
                <h3 className="text-lg font-semibold">Secure Payment</h3>
                <p className="text-sm text-gray-500">
                  Your payment information is processed securely. We do not
                  store credit card details nor have access to your credit card
                  information.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <ShieldIcon className="h-8 stroke-primary w-8" />
                <h3 className="text-lg font-semibold">Data Encryption</h3>
                <p className="text-sm text-gray-500">
                  We use SSL encryption to protect your data and ensure it's not
                  accessible by anyone else.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-start gap-4 p-4">
                <CheckIcon className="h-8 stroke-primary w-8" />
                <h3 className="text-lg font-semibold">Trusted Checkout</h3>
                <p className="text-sm text-gray-500">
                  We offer a secure and trusted checkout process, so you can
                  feel safe making a purchase.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function CheckIcon(props: any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function LockIcon(props: any) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ShieldIcon(props: any) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
