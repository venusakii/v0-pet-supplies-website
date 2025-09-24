import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, ExternalLink, Heart, Share2, CheckCircle, X, AlertTriangle, ThumbsUp, ThumbsDown } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = {
  "puppy-starter-kit": {
    name: "Abbylike 50 Pcs Puppy Starter Kit",
    description: "Complete starter kit for small dogs including toys, treats, and essential accessories",
    rating: 4.9,
    reviews: 1247,
    category: "Starter Kits",
    badge: "Best Seller",
    image: "/puppy-starter-kit-with-toys-and-accessories.jpg",
    amazonUrl: "https://amazon.com/dp/example",
    pros: [
      "Comprehensive kit with everything needed for a new puppy",
      "High-quality materials that are safe for small breeds",
      "Great value for money compared to buying items separately",
      "Toys are appropriately sized for small mouths",
      "Includes training treats that dogs love",
    ],
    cons: [
      "Some toys may be too advanced for very young puppies",
      "Packaging could be more eco-friendly",
      "Instructions could be clearer for first-time owners",
    ],
    verdict:
      "This starter kit is an excellent choice for new small dog owners. It provides everything you need to get started and offers great value for money. The quality is consistently high across all items, making it our top recommendation for puppy essentials.",
    testingNotes:
      "We tested this kit with 5 different small breed puppies over 3 months. All dogs engaged well with the toys, and owners appreciated having everything in one package.",
    specifications: {
      "Age Range": "8 weeks - 2 years",
      "Breed Size": "Small (up to 25 lbs)",
      Material: "Non-toxic plastic, natural rubber, cotton",
      Includes: "50 pieces total",
      Warranty: "30-day satisfaction guarantee",
    },
  },
  "premium-collar-set": {
    name: "Premium Collar & Leash Set",
    description: "Soft padded collar with matching leash, perfect for daily walks and training",
    rating: 4.8,
    reviews: 892,
    category: "Collars & Leashes",
    badge: "Editor's Choice",
    image: "/small-dog-collar-and-leash-set.jpg",
    amazonUrl: "https://amazon.com/dp/example2",
    pros: [
      "Extremely comfortable padding prevents chafing",
      "Durable construction withstands daily use",
      "Beautiful design that looks premium",
      "Perfect size range for small breeds",
      "Easy to clean and maintain",
    ],
    cons: [
      "Limited color options available",
      "Price is higher than basic alternatives",
      "Buckle can be stiff initially",
    ],
    verdict:
      "This collar and leash set strikes the perfect balance between comfort, durability, and style. While it costs more than basic options, the quality justifies the price for daily use.",
    testingNotes:
      "Tested with dogs ranging from 5-20 lbs over 6 months of daily walks. No signs of wear or discomfort observed.",
    specifications: {
      "Collar Size": 'XS: 8-12", S: 10-14", M: 12-16"',
      "Leash Length": "4 feet",
      Material: "Nylon webbing with neoprene padding",
      Hardware: "Zinc alloy buckles and D-rings",
      Care: "Machine washable",
    },
  },
  "interactive-toy-bundle": {
    name: "Interactive Toy Bundle",
    description: "Mental stimulation toys designed specifically for small breed intelligence",
    rating: 4.7,
    reviews: 634,
    category: "Toys",
    badge: "New Arrival",
    image: "/interactive-dog-toys-for-small-breeds.jpg",
    amazonUrl: "https://amazon.com/dp/example3",
    pros: [
      "Excellent mental stimulation for intelligent breeds",
      "Multiple difficulty levels keep dogs engaged",
      "High-quality construction lasts through heavy play",
      "Perfect size for small dog paws and mouths",
      "Helps reduce destructive behavior",
    ],
    cons: [
      "May be too challenging for some dogs initially",
      "Requires supervision during first uses",
      "Some pieces are small and could be lost",
    ],
    verdict:
      "An outstanding collection of puzzle toys that will keep your small dog mentally stimulated and entertained. Perfect for intelligent breeds that need mental challenges.",
    testingNotes:
      "Tested with various small breeds including Chihuahuas, Yorkies, and Pomeranians. Most dogs mastered the puzzles within a week.",
    specifications: {
      "Difficulty Levels": "Beginner to Advanced",
      Material: "BPA-free plastic and natural wood",
      "Age Recommendation": "6 months and up",
      Supervision: "Recommended for first-time use",
      Cleaning: "Dishwasher safe (top rack)",
    },
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductReviewPage({ params }: PageProps) {
  const { slug } = await params
  const product = products[slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  const ratingDistribution = [
    { stars: 5, percentage: 78, count: Math.floor(product.reviews * 0.78) },
    { stars: 4, percentage: 15, count: Math.floor(product.reviews * 0.15) },
    { stars: 3, percentage: 4, count: Math.floor(product.reviews * 0.04) },
    { stars: 2, percentage: 2, count: Math.floor(product.reviews * 0.02) },
    { stars: 1, percentage: 1, count: Math.floor(product.reviews * 0.01) },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <section className="py-4 px-4 border-b">
        <div className="container mx-auto">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/reviews" className="hover:text-primary">
              Reviews
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{product.badge}</Badge>
                  <Badge variant="outline">{product.category}</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{product.description}</p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold ml-2">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <div className="flex gap-3">
                  <Button size="lg" asChild>
                    <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Buy on Amazon
                    </a>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Review */}
            <div className="lg:col-span-2 space-y-8">
              {/* Our Verdict */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Our Verdict
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">{product.verdict}</p>
                </CardContent>
              </Card>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <ThumbsUp className="h-5 w-5 mr-2" />
                      Pros
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                      <ThumbsDown className="h-5 w-5 mr-2" />
                      Cons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Testing Notes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                    Our Testing Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.testingNotes}</p>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Rating Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Rating Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {ratingDistribution.map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-3">
                      <span className="text-sm w-8">{rating.stars}★</span>
                      <Progress value={rating.percentage} className="flex-1" />
                      <span className="text-sm text-muted-foreground w-12 text-right">{rating.count}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Buy */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Purchase</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">Available on Amazon</p>
                    <Button className="w-full" size="lg" asChild>
                      <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Buy Now on Amazon
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Products */}
              <Card>
                <CardHeader>
                  <CardTitle>You Might Also Like</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <img
                        src="/small-dog-collar-and-leash-set.jpg"
                        alt="Related product"
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Premium Collar Set</h4>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs ml-1">4.8</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <img
                        src="/interactive-dog-toys-for-small-breeds.jpg"
                        alt="Related product"
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Interactive Toys</h4>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs ml-1">4.7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
