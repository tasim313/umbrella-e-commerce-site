"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Search, ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FeaturedProducts } from "@/components/featured-products"
import { HeroSection } from "@/components/hero-section"
import { CategorySection } from "@/components/category-section"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
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

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                  <path d="M12 4C15.866 4 19 7.13401 19 11H5C5 7.13401 8.13401 4 12 4Z" fill="#000000" />
                  <path
                    d="M12 4V11M5 11H19M12 11C8.13401 11 5 7.86599 5 4H19C19 7.86599 15.866 11 12 11Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11V20M12 20H7M12 20H17"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-2xl font-bold">Umbrella</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="font-medium hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link href="/products" className="font-medium hover:text-blue-600 transition-colors">
                  Shop
                </Link>
                <Link href="/categories" className="font-medium hover:text-blue-600 transition-colors">
                  Categories
                </Link>
                <Link href="/about" className="font-medium hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="font-medium hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search for umbrellas..."
                  className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Link href="/account" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <User className="h-5 w-5" />
              </Link>
              <Link href="/favorites" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="h-5 w-5" />
              </Link>
              <Link href="/cart" className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  3
                </Badge>
              </Link>
              <Button className="md:hidden p-2" variant="ghost">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 py-12">
          <CategorySection />
          <FeaturedProducts />
          <section className="my-16 bg-white/80 backdrop-blur-sm rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Premium Quality Umbrellas for Rainy Days</h2>
                <p className="text-gray-700 mb-6">
                  Our umbrellas are designed to withstand the heaviest Bangladeshi monsoons while keeping you stylish
                  and dry. Made with high-quality materials and innovative designs, our umbrellas are perfect for the
                  unpredictable weather.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Windproof Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Water Repellent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>UV Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Lightweight</span>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Shop Now</Button>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full">
                  <Image
                    src="/umbrella-showcase.png"
                    alt="Premium umbrellas showcase"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rahima Khan",
                  location: "Dhaka",
                  rating: 5,
                  comment:
                    "The best umbrella I've ever owned! It survived the entire monsoon season without a single issue.",
                },
                {
                  name: "Kamal Ahmed",
                  location: "Chittagong",
                  rating: 4,
                  comment:
                    "Stylish design and very durable. I love the automatic open feature, makes it so convenient during sudden rain.",
                },
                {
                  name: "Nusrat Jahan",
                  location: "Sylhet",
                  rating: 5,
                  comment:
                    "Perfect for our heavy rainfall. The umbrella is large enough to keep me and my child dry. Highly recommend!",
                },
              ].map((review, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.comment}"</p>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <Newsletter />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                  <path d="M12 4C15.866 4 19 7.13401 19 11H5C5 7.13401 8.13401 4 12 4Z" fill="#000000" />
                  <path
                    d="M12 4V11M5 11H19M12 11C8.13401 11 5 7.86599 5 4H19C19 7.86599 15.866 11 12 11Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11V20M12 20H7M12 20H17"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xl font-bold">Umbrella</span>
              </Link>
              <p className="text-gray-600 mb-4">
                Your trusted companion for rainy days in Bangladesh. Quality umbrellas for all weather conditions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.379.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products" className="text-gray-600 hover:text-blue-600">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/categories/folding" className="text-gray-600 hover:text-blue-600">
                    Folding Umbrellas
                  </Link>
                </li>
                <li>
                  <Link href="/categories/stick" className="text-gray-600 hover:text-blue-600">
                    Stick Umbrellas
                  </Link>
                </li>
                <li>
                  <Link href="/categories/golf" className="text-gray-600 hover:text-blue-600">
                    Golf Umbrellas
                  </Link>
                </li>
                <li>
                  <Link href="/categories/kids" className="text-gray-600 hover:text-blue-600">
                    Kids Umbrellas
                  </Link>
                </li>
                <li>
                  <Link href="/categories/fashion" className="text-gray-600 hover:text-blue-600">
                    Fashion Umbrellas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-gray-600 hover:text-blue-600">
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-gray-600 hover:text-blue-600">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/warranty" className="text-gray-600 hover:text-blue-600">
                    Warranty Information
                  </Link>
                </li>
                <li>
                  <Link href="/track-order" className="text-gray-600 hover:text-blue-600">
                    Track Your Order
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 mt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-600">123 Rain Street, Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 mt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-600">+880 1234 567890</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 mt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-600">info@umbrellabd.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 mt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Mon-Fri: 9AM-6PM
                    <br />
                    Sat: 10AM-4PM
                    <br />
                    Sun: Closed
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 md:mb-0">© 2023 Umbrella. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-gray-600 hover:text-blue-600">
                  Sitemap
                </Link>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <img src="/payment-visa.svg" alt="Visa" className="h-8" />
                <img src="/payment-mastercard.svg" alt="Mastercard" className="h-8" />
                <img src="/payment-bkash.svg" alt="bKash" className="h-8" />
                <img src="/payment-nagad.svg" alt="Nagad" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Add to cart notification */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50 transform transition-transform duration-300 translate-y-0">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 rounded-full p-2">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Item added to cart</p>
            <p className="text-sm text-gray-600">Premium Folding Umbrella</p>
          </div>
          <button className="ml-auto text-gray-400 hover:text-gray-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-3 flex gap-2">
          <Button variant="outline" className="w-1/2">
            View Cart
          </Button>
          <Button className="w-1/2 bg-blue-600 hover:bg-blue-700">Checkout</Button>
        </div>
      </div>

      {/* Back to top button */}
      <button className="fixed bottom-4 left-4 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <style jsx global>{`
        @keyframes rain {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 20% 100%;
          }
        }
      `}</style>
    </div>
  )
}
