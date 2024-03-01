import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 px-4 md:px-6">
          <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="">
                <Button className='bg-accent hover:bg-accent/50' variant="outline">
                  <Link className="flex items-center" href="/">
                    <ArrowLeftIcon className="mr-2 h-4 w-4" />
                    Go back
                  </Link>
                </Button>
              </div>
              <img
                alt="Product Image"
                className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                height={500}
                src="/bud3.jpg"
                width={500}
              />
              {/* <div className="grid gap-2">
                <Label className="text-base" htmlFor="color">
                  Color
                </Label>
                <RadioGroup
                  className="flex items-center gap-2"
                  defaultValue="black"
                  id="color"
                >
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="color-black"
                  >
                    <RadioGroupItem id="color-black" value="black" />
                    Black
                  </Label>
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="color-white"
                  >
                    <RadioGroupItem id="color-white" value="white" />
                    White
                  </Label>
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="color-blue"
                  >
                    <RadioGroupItem id="color-blue" value="blue" />
                    Blue
                  </Label>
                </RadioGroup>
              </div> */}
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="size">
                  Size
                </Label>
                <RadioGroup
                  className="flex items-center gap-2"
                  defaultValue="m"
                  id="size"
                >

                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="size-xs"
                  >
                    <RadioGroupItem id="1/8oz" value="1/8oz" />
                    1/8oz
                  </Label>

                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="3.5g"
                  >
                    <RadioGroupItem id="3.5oz" value="s" />3.5
                  </Label>

                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="7g"
                  >
                    <RadioGroupItem id="7g" value="7g" />7g
                  </Label>

                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="14g"
                  >
                    <RadioGroupItem id="14g" value="14g" />14g
                  </Label>

                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="28g"
                  >
                    <RadioGroupItem id="28g" value="28g" />
                    28g
                  </Label>

                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="quantity">
                  Quantity
                </Label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-24 bg-card">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="lg">Add to cart</Button>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Product Name</h1>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                This is a short description of the product. It's a great product
                that you will love.
              </p>
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                <StarIcon className="w-5 h-5 fill-primary stroke-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold">$49.99 <span className='ml-1 text-sm text-slate-500'>1/8 oz</span></h2>
              <Accordion className="w-full" collapsible type="single">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Product Information</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      This product is made from the highest quality materials
                      and is designed to last. It is a great addition to any
                      home or office.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Product Reviews</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      This product has received excellent reviews from our
                      customers. Check out what they have to say below.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Related Products</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid w-[80%] mx-auto my-4 grid-cols-1 overflow-x-scroll gap-4">
                      <Link href="#">
                        <Card>
                          <CardHeader>
                            <CardTitle>Product 1</CardTitle>
                            <CardDescription>
                              This is a short description of the product.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <img
                              alt="Product 1"
                              className="object-cover w-full h-60"
                              height={200}
                              src="/bud1.jpg"
                              style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                              }}
                              width={200}
                            />
                          </CardContent>
                        </Card>
                      </Link>
                      <Link href="#">
                        <Card>
                          <CardHeader>
                            <CardTitle>Product 2</CardTitle>
                            <CardDescription>
                              This is a short description of the product.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <img
                              alt="Product 2"
                              className="object-cover w-full h-60"
                              height={200}
                              src="/bud6.jpg"
                              style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                              }}
                              width={200}
                            />
                          </CardContent>
                        </Card>
                      </Link>
                      <Link href="#">
                        <Card>
                          <CardHeader>
                            <CardTitle>Product 3</CardTitle>
                            <CardDescription>
                              This is a short description of the product.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <img
                              alt="Product 3"
                              className="object-cover w-full h-60"
                              height={200}
                              src="/bud4.jpg"
                              style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                              }}
                              width={200}
                            />
                          </CardContent>
                        </Card>
                      </Link>
                      <Link href="#">
                        <Card>
                          <CardHeader>
                            <CardTitle>Product 4</CardTitle>
                            <CardDescription>
                              This is a short description of the product.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <img
                              alt="Product 4"
                              className="object-cover w-full h-60"
                              height={200}
                              src="/bud5.jpg"
                              style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                              }}
                              width={200}
                            />
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
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
      </main>
    </div>
  );
}

function ArrowLeftIcon(props: any) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
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
