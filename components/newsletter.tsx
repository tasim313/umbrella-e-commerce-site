import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="my-16 bg-white/80 backdrop-blur-sm rounded-xl p-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-700 mb-6">
          Subscribe to our newsletter to receive updates on new products, special offers, and monsoon season tips.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input type="email" placeholder="Enter your email address" className="flex-1" />
          <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
        </p>
      </div>
    </section>
  )
}
