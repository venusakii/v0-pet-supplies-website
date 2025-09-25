"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Heart, ExternalLink } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: "puppy-starter-kit",
    name: "Original Essentials Heartbeat Teething Blanket",
    description: "Soft teething blanket with heartbeat feature to comfort puppies",
    rating: 4.9,
    reviews: 1247,
    category: "Starter Kits",
    badge: "Best Seller",
    image: "https://m.media-amazon.com/images/I/71-lGVjTEAL._AC_SL1500_.jpg",
  },
  {
    id: "premium-collar-set",
    name: "DAGANXI Tactical Adjustable Military Collar Set",
    description: "Durable tactical collar and leash set for small to medium dogs",
    rating: 4.8,
    reviews: 892,
    category: "Collars & Leashes",
    badge: "Editor's Choice",
    image: "https://m.media-amazon.com/images/I/81RbM5x4T7S._AC_SL1500_.jpg",
  },
  {
    id: "travel-carrier",
    name: "Morpilot Portable Pet Travel Carrier",
    description: "Airline-approved, lightweight carrier for small pets up to 15 lbs",
    rating: 4.8,
    reviews: 567,
    category: "Travel",
    badge: "Travel Essential",
    image: "https://m.media-amazon.com/images/I/71yIl49MqbL._AC_SL1500_.jpg",
  },
  {
    id: "interactive-toy",
    name: "Chuckit! Interactive Cleaning Ball",
    description: "2.5-inch diameter interactive ball for play and dental health",
    rating: 4.7,
    reviews: 634,
    category: "Toys",
    badge: "New Arrival",
    image: "https://m.media-amazon.com/images/I/71o7VgW8tUL._AC_SL1500_.jpg",
  },
  {
    id: "winter-coat",
    name: "Carhartt Insulated Weather-Resistant Coat",
    description: "Durable, insulated coat for small dogs in cold weather",
    rating: 4.7,
    reviews: 289,
    category: "Clothing",
    badge: "Weather Shield",
    image: "https://m.media-amazon.com/images/I/81yXJnJL0uL._AC_SL1500_.jpg",
  },
  {
    id: "comfort-harness",
    name: "S-ETOVUS Support Harness for Injured Dogs",
    description: "Supportive harness for injured or disabled small dogs",
    rating: 4.6,
    reviews: 445,
    category: "Harnesses",
    badge: "Comfort Pick",
    image: "https://m.media-amazon.com/images/I/6189DyhVi4L._AC_SL1500_.jpg",
  },
  {
    id: "puzzle-feeder",
    name: "Potaroma Puzzle Feeding Toy",
    description: "Interactive puzzle feeder for training and entertainment",
    rating: 4.6,
    reviews: 412,
    category: "Feeding",
    badge: "Health Boost",
    image: "https://m.media-amazon.com/images/I/61ulyEIfXJL._AC_SL1500_.jpg",
  },
  {
    id: "dental-chew-set",
    name: "VEGGIEDENT FR3SH Tartar Control Chews",
    description: "Tartar control chews for small dogs (10-20 lbs)",
    rating: 4.5,
    reviews: 321,
    category: "Health & Care",
    badge: "Vet Approved",
    image: "https://m.media-amazon.com/images/I/71KhjHV16xL._AC_SL1500_.jpg",
  },
  {
    id: "grooming-kit",
    name: "oneisall Grooming Grinder & Shedding Kit",
    description: "Complete grooming kit with grinder and shedding tools for small dogs",
    rating: 4.4,
    reviews: 198,
    category: "Grooming",
    badge: "Pro Quality",
    image: "https://m.media-amazon.com/images/I/71RIawma33L._AC_SL1500_.jpg",
  },
]

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("rating")
  const [visibleProducts, setVisibleProducts] = useState(9)
  const [email, setEmail] = useState("")

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === "all" ||
        product.category.toLowerCase().replace(/\s+/g, "-").includes(selectedCategory.replace("-", ""))
      return matchesSearch && matchesCategory
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        case "newest":
          return 0 // For demo purposes, keeping original order
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  const displayedProducts = filteredAndSortedProducts.slice(0, visibleProducts)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`)
      setEmail("")
    }
  }

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 9)
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Product Reviews</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Honest, detailed reviews of the best accessories and supplies for small dogs. Every product tested by
            professionals and real pet parents.
          </p>
          <Badge variant="secondary" className="text-sm">
            Over 500+ Products Reviewed
          </Badge>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="starter-kits">Starter Kits</SelectItem>
                  <SelectItem value="collars">Collars & Leashes</SelectItem>
                  <SelectItem value="toys">Toys</SelectItem>
                  <SelectItem value="harnesses">Harnesses</SelectItem>
                  <SelectItem value="health">Health & Care</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="feeding">Feeding</SelectItem>
                  <SelectItem value="grooming">Grooming</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {displayedProducts.length} of {filteredAndSortedProducts.length} products
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product) => (
              <Link key={product.id} href={`/reviews/${product.id}`} className="block">
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square bg-muted rounded-t-lg overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{product.badge}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm ml-1 font-medium">{product.rating}</span>
                        <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                      </div>
                    </div>

                    <CardTitle className="mb-2 text-lg leading-tight">{product.name}</CardTitle>

                    <CardDescription className="mb-4 text-sm">{product.description}</CardDescription>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 ml-auto">
                        <Button size="sm" variant="outline" asChild onClick={(e) => e.stopPropagation()}>
                          <Link href={`/reviews/${product.id}`}>Read Review</Link>
                        </Button>
                        <Button size="sm" asChild onClick={(e) => e.stopPropagation()}>
                          <a
                            href={`https://amazon.com/s?k=${encodeURIComponent(product.name)}&tag=puppystore-20`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Buy
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {visibleProducts < filteredAndSortedProducts.length && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" onClick={handleLoadMore}>
                Load More Products
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Showing {displayedProducts.length} of {filteredAndSortedProducts.length} products
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Never Miss a Review</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get notified when we review new products that might be perfect for your small dog
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
