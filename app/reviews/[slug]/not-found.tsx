import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Review Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, we couldn't find the product review you're looking for.</p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/reviews">Browse All Reviews</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
