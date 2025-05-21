import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
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
          <span className="font-medium text-white">About Us</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Our Story</h1>
              <p className="text-gray-700 mb-6">
                Founded in 2010, Umbrella has grown from a small family business in Dhaka to Bangladesh's premier
                umbrella retailer. Our journey began when founder Rahul Khan noticed the lack of quality umbrellas that
                could withstand Bangladesh's heavy monsoon seasons.
              </p>
              <p className="text-gray-700 mb-6">
                What started as a small workshop with just three employees has now grown into a company with over 50
                skilled craftspeople and designers, creating umbrellas that combine traditional craftsmanship with
                modern technology and design.
              </p>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">Our Products</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image src="/about-workshop.jpg" alt="Our umbrella workshop" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Values */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Umbrella, we're committed to providing high-quality, durable umbrellas that keep our customers dry
              during Bangladesh's heaviest downpours while maintaining style and affordability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/70 p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Quality</h3>
              <p className="text-gray-700 text-center">
                We use only the finest materials and rigorous quality control to ensure our umbrellas stand up to the
                toughest weather conditions.
              </p>
            </div>

            <div className="bg-white/70 p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Sustainability</h3>
              <p className="text-gray-700 text-center">
                We're committed to environmentally friendly practices, from sourcing sustainable materials to reducing
                waste in our production process.
              </p>
            </div>

            <div className="bg-white/70 p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Affordability</h3>
              <p className="text-gray-700 text-center">
                We believe everyone deserves protection from the rain, which is why we offer quality umbrellas at fair
                prices accessible to all Bangladeshis.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              The passionate people behind Umbrella who work tirelessly to bring you the best rain protection products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Rahul Khan",
                position: "Founder & CEO",
                image: "/team-founder.jpg",
                bio: "Started Umbrella with a vision to revolutionize rain protection in Bangladesh.",
              },
              {
                name: "Nusrat Ahmed",
                position: "Head of Design",
                image: "/team-designer.jpg",
                bio: "Creates innovative umbrella designs that combine functionality with style.",
              },
              {
                name: "Kamal Hossain",
                position: "Production Manager",
                image: "/team-production.jpg",
                bio: "Ensures every umbrella meets our high quality standards before reaching customers.",
              },
              {
                name: "Fatima Rahman",
                position: "Customer Relations",
                image: "/team-customer.jpg",
                bio: "Dedicated to providing exceptional service and support to our valued customers.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white/70 rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                  <div className="flex gap-2 mt-4">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.379.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Why Choose Umbrella?</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We're more than just an umbrella store. Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Monsoon-Tested Quality</h3>
                <p className="text-gray-700">
                  Our umbrellas are rigorously tested to withstand Bangladesh's heaviest monsoon rains, ensuring you
                  stay dry in even the most challenging weather conditions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-gray-700">
                  We believe quality rain protection should be accessible to everyone. Our direct-to-consumer model
                  allows us to offer premium umbrellas at fair prices.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovative Designs</h3>
                <p className="text-gray-700">
                  Our design team constantly innovates to create umbrellas that combine functionality with style,
                  offering unique patterns and features you won't find elsewhere.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Local Craftsmanship</h3>
                <p className="text-gray-700">
                  We're proud to support local artisans and manufacturers. Every umbrella is crafted in Bangladesh,
                  supporting our local economy and traditional craftsmanship.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Warranty & Support</h3>
                <p className="text-gray-700">
                  Every umbrella comes with a 1-year warranty against manufacturing defects, and our customer service
                  team is always ready to assist with any questions or concerns.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Nationwide Delivery</h3>
                <p className="text-gray-700">
                  We deliver to all 64 districts of Bangladesh, ensuring everyone across the country has access to our
                  quality umbrellas, no matter where they live.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our umbrellas.
            </p>
          </div>

          <Tabs defaultValue="customers" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="customers">Customers</TabsTrigger>
              <TabsTrigger value="businesses">Businesses</TabsTrigger>
              <TabsTrigger value="institutions">Institutions</TabsTrigger>
            </TabsList>
            <TabsContent value="customers">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Anika Rahman",
                    location: "Dhaka",
                    rating: 5,
                    comment:
                      "I've gone through countless umbrellas during monsoon season, but my Umbrella has lasted two years and still looks brand new. Worth every taka!",
                    image: "/testimonial-1.jpg",
                  },
                  {
                    name: "Mohammed Ali",
                    location: "Chittagong",
                    rating: 5,
                    comment:
                      "The automatic open feature is a lifesaver when you're caught in a sudden downpour. Stylish, durable, and practical - couldn't ask for more.",
                    image: "/testimonial-2.jpg",
                  },
                  {
                    name: "Sadia Khan",
                    location: "Sylhet",
                    rating: 4,
                    comment:
                      "I love the traditional designs that incorporate Bangladeshi patterns. It's nice to see a company celebrating our cultural heritage while making quality products.",
                    image: "/testimonial-3.jpg",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                    </div>
                    <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="businesses">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Dhaka Coffee House",
                    location: "Gulshan, Dhaka",
                    rating: 5,
                    comment:
                      "We ordered custom branded umbrellas for our outdoor seating area. The quality is excellent and our customers love them. Great service from start to finish.",
                    image: "/business-1.jpg",
                  },
                  {
                    name: "Bay View Hotel",
                    location: "Cox's Bazar",
                    rating: 5,
                    comment:
                      "We provide Umbrella's products to all our guests during rainy season. The durability and elegant designs perfectly match our hotel's premium standards.",
                    image: "/business-2.jpg",
                  },
                  {
                    name: "Green Tours Bangladesh",
                    location: "Bandarban",
                    rating: 4,
                    comment:
                      "As a tour company operating year-round, reliable umbrellas are essential. Umbrella's products have become a staple in our tour packages during monsoon season.",
                    image: "/business-3.jpg",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                    </div>
                    <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="institutions">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Dhaka University",
                    location: "Dhaka",
                    rating: 5,
                    comment:
                      "We ordered 500 umbrellas with our university logo for our new student welcome packages. The quality and service were exceptional, and delivery was right on schedule.",
                    image: "/institution-1.jpg",
                  },
                  {
                    name: "Bangladesh Red Crescent",
                    location: "Nationwide",
                    rating: 5,
                    comment:
                      "Umbrella provided durable, cost-effective umbrellas for our flood relief kits. Their commitment to quality and timely delivery helped us serve communities in need.",
                    image: "/institution-2.jpg",
                  },
                  {
                    name: "National Museum of Bangladesh",
                    location: "Shahbag, Dhaka",
                    rating: 5,
                    comment:
                      "The custom designed umbrellas featuring historical Bangladeshi art motifs were a hit in our museum shop. Visitors love these functional souvenirs.",
                    image: "/institution-3.jpg",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                    </div>
                    <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-xl p-8 mb-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Stay Dry in Style?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Browse our collection of premium umbrellas designed specifically for Bangladesh's monsoon season.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Shop Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
