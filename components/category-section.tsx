import Image from "next/image"
import Link from "next/link"

export function CategorySection() {
  const categories = [
    {
      name: "Folding Umbrellas",
      description: "Compact & portable",
      image: "/category-folding.png",
      link: "/categories/folding",
    },
    {
      name: "Stick Umbrellas",
      description: "Classic & elegant",
      image: "/category-stick.png",
      link: "/categories/stick",
    },
    {
      name: "Golf Umbrellas",
      description: "Extra large coverage",
      image: "/category-golf.png",
      link: "/categories/golf",
    },
    {
      name: "Kids Umbrellas",
      description: "Fun & colorful designs",
      image: "/category-kids.png",
      link: "/categories/kids",
    },
  ]

  return (
    <section className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white">Shop by Category</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Browse our wide selection of umbrellas designed for different needs and preferences
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="p-6">
              <div className="relative h-48 mb-4">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Shop Now</span>
                <svg
                  className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
