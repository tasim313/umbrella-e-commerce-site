import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stay Dry in Style During Monsoon Season
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Discover our premium collection of umbrellas designed specifically for Bangladesh's heavy rainfall.
              Durable, stylish, and affordable.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">Shop Now</Button>
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                View Collections
              </Button>
            </div>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center"
                  >
                    <span className="sr-only">Customer {i}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-sm">
                  <span className="font-bold">4.9</span> from <span className="font-bold">2,000+</span> reviews
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-[500px] w-full">
              <Image src="/hero-umbrella.png" alt="Premium umbrella in the rain" fill className="object-contain" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full h-[450px] w-[450px] -z-10"></div>
            <div className="absolute -top-10 right-10 bg-blue-600/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg transform rotate-3">
              <p className="text-lg font-bold">Monsoon Sale!</p>
              <p className="text-3xl font-bold">30% OFF</p>
              <p className="text-sm">Limited time offer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
