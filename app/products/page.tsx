import Image from "next/image"
import Link from "next/link"
import { Filter, Grid3X3, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Premium Automatic Umbrella",
      price: 1200,
      originalPrice: 1500,
      rating: 4.8,
      reviews: 124,
      image: "/product-1.png",
      badge: "Best Seller",
      isNew: true,
    },
    {
      id: 2,
      name: "Windproof Travel Umbrella",
      price: 950,
      originalPrice: 1100,
      rating: 4.6,
      reviews: 98,
      image: "/product-2.png",
      badge: "Sale",
      isNew: false,
    },
    {
      id: 3,
      name: "Colorful Fashion Umbrella",
      price: 850,
      originalPrice: 850,
      rating: 4.5,
      reviews: 76,
      image: "/product-3.png",
      badge: null,
      isNew: true,
    },
    {
      id: 4,
      name: "Traditional Bamboo Umbrella",
      price: 1500,
      originalPrice: 1800,
      rating: 4.9,
      reviews: 152,
      image: "/product-4.png",
      badge: "Limited",
      isNew: false,
    },
    {
      id: 5,
      name: "Compact Folding Umbrella",
      price: 750,
      originalPrice: 900,
      rating: 4.4,
      reviews: 63,
      image: "/product-5.png",
      badge: "Sale",
      isNew: false,
    },
    {
      id: 6,
      name: "Luxury Designer Umbrella",
      price: 2500,
      originalPrice: 2500,
      rating: 4.7,
      reviews: 42,
      image: "/product-6.png",
      badge: null,
      isNew: true,
    },
    {
      id: 7,
      name: "Kids Cartoon Umbrella",
      price: 650,
      originalPrice: 800,
      rating: 4.8,
      reviews: 87,
      image: "/product-7.png",
      badge: "Sale",
      isNew: false,
    },
    {
      id: 8,
      name: "Extra Large Golf Umbrella",
      price: 1800,
      originalPrice: 2000,
      rating: 4.9,
      reviews: 56,
      image: "/product-8.png",
      badge: "Premium",
      isNew: false,
    },
    {
      id: 9,
      name: "Transparent Bubble Umbrella",
      price: 950,
      originalPrice: 1050,
      rating: 4.7,
      reviews: 68,
      image: "/product-9.png",
      badge: null,
      isNew: false,
    },
    {
      id: 10,
      name: "Monsoon Special Umbrella",
      price: 1100,
      originalPrice: 1300,
      rating: 4.8,
      reviews: 92,
      image: "/product-10.png",
      badge: "Sale",
      isNew: true,
    },
    {
      id: 11,
      name: "Handcrafted Wooden Umbrella",
      price: 2200,
      originalPrice: 2200,
      rating: 4.9,
      reviews: 34,
      image: "/product-11.png",
      badge: "Handmade",
      isNew: false,
    },
    {
      id: 12,
      name: "UV Protection Umbrella",
      price: 1350,
      originalPrice: 1500,
      rating: 4.6,
      reviews: 73,
      image: "/product-12.png",
      badge: "UV Block",
      isNew: false,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Background Image - Bangladeshi Rainy Day */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image
          src="/bangladesh-rainy-day.jpg"
          alt="Bangladeshi rainy day background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Rain animation overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cline x1='0' y1='0' x2='100' y2='100' stroke='%23ffffff' strokeWidth='0.5' strokeOpacity='0.2'/%3E%3Cline x1='10' y1='0' x2='110' y2='100' stroke='%23ffffff' strokeWidth='0.5' strokeOpacity='0.2'/%3E%3Cline x1='20' y1='0' x2='120' y2='100' stroke='%23ffffff' strokeWidth='0.5' strokeOpacity='0.2'/%3E%3Cline x1='30' y1='0' x2='130' y2='100' stroke='%23ffffff' strokeWidth='0.5' strokeOpacity='0.2'/%3E%3Cline x1='40' y1='0' x2='140' y2='100' stroke='%23ffffff' strokeWidth='0.5' strokeOpacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
            animation: "rain 2s linear infinite",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-white/80 mb-6">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-white">All Products</span>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">All Umbrellas</h1>
              <p className="text-gray-600">Showing 1-12 of 36 products</p>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border rounded-md">
                  <Button variant="ghost" size="icon" className="rounded-none border-r">
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-none">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {[
                    "All Umbrellas",
                    "Folding Umbrellas",
                    "Stick Umbrellas",
                    "Golf Umbrellas",
                    "Kids Umbrellas",
                    "Fashion Umbrellas",
                    "UV Protection",
                  ].map((category, index) => (
                    <div key={index} className="flex items-center">
                      <Checkbox id={`category-${index}`} className="mr-2" defaultChecked={index === 0} />
                      <label htmlFor={`category-${index}`} className="text-sm cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-4">Price Range</h3>
                <div className="px-2">
                  <Slider defaultValue={[500, 2000]} min={0} max={3000} step={100} />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>৳0</span>
                    <span>৳3000</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <Input type="number" placeholder="Min" className="w-full" defaultValue={500} />
                    <span>-</span>
                    <Input type="number" placeholder="Max" className="w-full" defaultValue={2000} />
                    <Button variant="outline" size="sm">
                      Set
                    </Button>
                  </div>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="color">
                  <AccordionTrigger className="font-bold text-lg">Color</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-4 gap-2">
                      {["Black", "Red", "Blue", "Green", "Yellow", "Purple", "Pink", "Transparent"].map(
                        (color, index) => (
                          <div key={index} className="flex flex-col items-center gap-1">
                            <div
                              className={`h-6 w-6 rounded-full border ${
                                color === "Black"
                                  ? "bg-black"
                                  : color === "Red"
                                    ? "bg-red-500"
                                    : color === "Blue"
                                      ? "bg-blue-500"
                                      : color === "Green"
                                        ? "bg-green-500"
                                        : color === "Yellow"
                                          ? "bg-yellow-400"
                                          : color === "Purple"
                                            ? "bg-purple-500"
                                            : color === "Pink"
                                              ? "bg-pink-400"
                                              : "bg-transparent border-dashed"
                              }`}
                            ></div>
                            <span className="text-xs">{color}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="size">
                  <AccordionTrigger className="font-bold text-lg">Size</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {['Small (21")', 'Medium (23")', 'Large (25")', 'Extra Large (30")', 'Kids (18")'].map(
                        (size, index) => (
                          <div key={index} className="flex items-center">
                            <Checkbox id={`size-${index}`} className="mr-2" />
                            <label htmlFor={`size-${index}`} className="text-sm cursor-pointer">
                              {size}
                            </label>
                          </div>
                        ),
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="material">
                  <AccordionTrigger className="font-bold text-lg">Material</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Polyester", "Nylon", "Pongee", "Cotton", "Plastic", "Bamboo", "Wood"].map(
                        (material, index) => (
                          <div key={index} className="flex items-center">
                            <Checkbox id={`material-${index}`} className="mr-2" />
                            <label htmlFor={`material-${index}`} className="text-sm cursor-pointer">
                              {material}
                            </label>
                          </div>
                        ),
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="features">
                  <AccordionTrigger className="font-bold text-lg">Features</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Automatic", "Windproof", "UV Protection", "Water Repellent", "Lightweight", "Foldable"].map(
                        (feature, index) => (
                          <div key={index} className="flex items-center">
                            <Checkbox id={`feature-${index}`} className="mr-2" />
                            <label htmlFor={`feature-${index}`} className="text-sm cursor-pointer">
                              {feature}
                            </label>
                          </div>
                        ),
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rating">
                  <AccordionTrigger className="font-bold text-lg">Rating</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <Checkbox id={`rating-${rating}`} className="mr-2" />
                          <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            <span className="ml-1">& Up</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-6">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
                <Button variant="outline" className="w-full mt-2">
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group"
                >
                  <div className="relative p-4">
                    {product.badge && (
                      <div
                        className={`absolute top-2 left-2 z-10 px-2 py-1 rounded-full text-xs font-bold text-white ${
                          product.badge === "Sale"
                            ? "bg-red-500"
                            : product.badge === "Best Seller"
                              ? "bg-yellow-500"
                              : product.badge === "Limited"
                                ? "bg-purple-500"
                                : product.badge === "Premium"
                                  ? "bg-blue-600"
                                  : product.badge === "Handmade"
                                    ? "bg-amber-600"
                                    : product.badge === "UV Block"
                                      ? "bg-teal-500"
                                      : "bg-green-500"
                        }`}
                      >
                        {product.badge}
                      </div>
                    )}
                    {product.isNew && (
                      <div className="absolute top-2 right-2 z-10 px-2 py-1 rounded-full text-xs font-bold text-white bg-green-500">
                        New
                      </div>
                    )}
                    <div className="relative h-48 mb-4 flex items-center justify-center">
                      <Image
                        src={product.image || "/placeholder.svg?height=200&width=200"}
                        alt={product.name}
                        width={150}
                        height={150}
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <button className="absolute top-4 right-4 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-yellow-400 mr-2">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-800 ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1 text-gray-800">{product.name}</h3>
                    <div className="flex items-center mb-4">
                      <span className="text-lg font-bold text-gray-800">৳{product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="ml-2 text-sm text-gray-500 line-through">৳{product.originalPrice}</span>
                      )}
                      {product.originalPrice > product.price && (
                        <span className="ml-2 text-sm text-red-500 font-medium">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% Off
                        </span>
                      )}
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center gap-1">
                <Button variant="outline" size="icon" disabled>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <span className="px-2">...</span>
                <Button variant="outline" size="sm">
                  8
                </Button>
                <Button variant="outline" size="icon">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
