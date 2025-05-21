import Image from "next/image"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function FeaturedProducts() {
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
  ]

  return (
    <section className="my-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Featured Products</h2>
          <p className="text-white/80">Our most popular umbrellas for the rainy season</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
          >
            <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Prev
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
          >
            Next
            <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group">
            <div className="relative p-4">
              {product.badge && (
                <Badge
                  className={`absolute top-2 left-2 z-10 ${
                    product.badge === "Sale"
                      ? "bg-red-500"
                      : product.badge === "Best Seller"
                        ? "bg-yellow-500"
                        : product.badge === "Limited"
                          ? "bg-purple-500"
                          : product.badge === "Premium"
                            ? "bg-blue-600"
                            : "bg-green-500"
                  }`}
                >
                  {product.badge}
                </Badge>
              )}
              {product.isNew && <Badge className="absolute top-2 right-2 z-10 bg-green-500">New</Badge>}
              <div className="relative h-48 mb-4 flex items-center justify-center">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <button className="absolute top-4 right-4 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <div className="flex items-center mb-2">
                <div className="flex items-center text-yellow-400 mr-2">
                  <Star className="h-4 w-4 fill-current" />
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
              <div className="flex gap-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="p-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button className="bg-blue-600 hover:bg-blue-700">View All Products</Button>
      </div>
    </section>
  )
}
