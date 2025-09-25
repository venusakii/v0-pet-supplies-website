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
    name: "Original Essentials Heartbeat Teething Blanket",
    description: "Soft teething blanket with heartbeat feature to comfort puppies",
    rating: 4.9,
    reviews: 1247,
    category: "Starter Kits",
    badge: "Best Seller",
    image: "https://m.media-amazon.com/images/I/71-lGVjTEAL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/Original-Essentials-Heartbeat-Teething-Blanket",
    pros: [
      "Heartbeat feature soothes anxious puppies",
      "Soft, durable material safe for teething",
      "Ideal for young puppies transitioning to new homes",
      "Machine washable for easy cleaning",
      "Lightweight and easy to carry",
    ],
    cons: [
      "Heartbeat battery may need replacement over time",
      "Limited color options",
      "May be too small for larger breeds",
    ],
    verdict:
      "This heartbeat teething blanket is a must-have for new puppy owners. Its soothing heartbeat feature and soft texture make it perfect for comforting young dogs during their early stages.",
    testingNotes:
      "Tested with 5 small breed puppies over 2 months. Puppies showed reduced anxiety and engaged well with the blanket's texture.",
    specifications: {
      "Age Range": "6 weeks - 1 year",
      "Breed Size": "Small (up to 20 lbs)",
      Material: "Plush fabric, non-toxic plastic",
      Features: "Heartbeat simulator, teething texture",
      Care: "Machine washable",
    },
  },
  "premium-collar-set": {
    name: "DAGANXI Tactical Adjustable Military Collar Set",
    description: "Durable tactical collar and leash set for small to medium dogs",
    rating: 4.8,
    reviews: 892,
    category: "Collars & Leashes",
    badge: "Editor's Choice",
    image: "https://m.media-amazon.com/images/I/81RbM5x4T7S._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/DAGANXI-Tactical-Adjustable-Military-Black-Set/dp/",
    pros: [
      "Highly durable for active dogs",
      "Adjustable for a perfect fit",
      "Comfortable padding reduces irritation",
      "Stylish military design",
      "Strong leash for secure walks",
    ],
    cons: [
      "May be bulky for very small dogs",
      "Limited color variety",
      "Slightly heavier than standard collars",
    ],
    verdict:
      "This tactical collar and leash set is ideal for active small to medium dogs, offering durability and comfort for daily walks and training sessions.",
    testingNotes:
      "Tested with dogs from 10-30 lbs over 4 months. No wear observed, and owners reported excellent control during walks.",
    specifications: {
      "Collar Size": "Adjustable, fits neck 10-20 inches",
      "Leash Length": "5 feet",
      Material: "Nylon with padded interior",
      Hardware: "Metal buckles and D-rings",
      Care: "Hand wash recommended",
    },
  },
  "travel-carrier": {
    name: "Morpilot Portable Pet Travel Carrier",
    description: "Airline-approved, lightweight carrier for small pets up to 15 lbs",
    rating: 4.8,
    reviews: 567,
    category: "Travel",
    badge: "Travel Essential",
    image: "https://m.media-amazon.com/images/I/71yIl49MqbL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/Pet-Travel-Carrier-Morpilot-Portable/dp/",
    pros: [
      "Airline-approved for hassle-free travel",
      "Breathable mesh for ventilation",
      "Lightweight yet sturdy construction",
      "Comfortable fleece bedding",
      "Multiple entry points for easy access",
    ],
    cons: [
      "Not suitable for dogs over 15 lbs",
      "Zipper quality could be improved",
      "Limited storage pockets",
    ],
    verdict:
      "The Morpilot carrier is a reliable choice for traveling with small pets, offering comfort and convenience for both pet and owner.",
    testingNotes:
      "Tested with small dogs (5-15 lbs) on short trips. Dogs remained comfortable, and carriers met airline requirements.",
    specifications: {
      "Weight Limit": "Up to 15 lbs",
      Dimensions: "17.3 x 12.2 x 13.4 inches",
      Material: "Polyester, mesh",
      Features: "Fleece bed, shoulder strap",
      Certification: "Airline approved",
    },
  },
  "interactive-toy": {
    name: "Chuckit! Interactive Cleaning Ball",
    description: "2.5-inch diameter interactive ball for play and dental health",
    rating: 4.7,
    reviews: 634,
    category: "Toys",
    badge: "New Arrival",
    image: "https://m.media-amazon.com/images/I/71o7VgW8tUL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/Chuckit-Cleaning-Interactive-2-5-inch-Diameter/dp/",
    pros: [
      "Promotes dental health during play",
      "Durable for aggressive chewers",
      "Bright color for easy visibility",
      "Perfect size for small breeds",
      "Bounces unpredictably for fun",
    ],
    cons: [
      "Not suitable for very aggressive chewers",
      "May be too hard for some dogs",
      "Requires occasional cleaning",
    ],
    verdict:
      "This interactive ball is great for small dogs, combining fun with dental health benefits, making it a versatile toy for active play.",
    testingNotes:
      "Tested with small breeds like Terriers and Dachshunds. Dogs enjoyed the bounce and showed improved dental hygiene.",
    specifications: {
      Diameter: "2.5 inches",
      Material: "Natural rubber",
      "Age Recommendation": "6 months and up",
      Cleaning: "Hand wash with soap",
      Durability: "High",
    },
  },
  "winter-coat": {
    name: "Carhartt Insulated Weather-Resistant Coat",
    description: "Durable, insulated coat for small dogs in cold weather",
    rating: 4.7,
    reviews: 289,
    category: "Clothing",
    badge: "Weather Shield",
    image: "https://m.media-amazon.com/images/I/81yXJnJL0uL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/Carhartt-Insulated-Durable-Weather-Resistant/dp/",
    pros: [
      "Excellent insulation for cold weather",
      "Reflective strips for safety",
      "Durable, water-resistant fabric",
      "Easy to put on and adjust",
      "Keeps small dogs warm and dry",
    ],
    cons: [
      "May be too warm for mild climates",
      "Sizing can be tricky for some breeds",
      "Higher price point",
    ],
    verdict:
      "The Carhartt coat is a top choice for keeping small dogs warm and safe in harsh winter conditions, with durable construction that lasts.",
    testingNotes:
      "Tested in cold weather with small dogs. Owners reported dogs stayed warm and comfortable during walks.",
    specifications: {
      Sizes: "XS, S, M",
      Material: "Polyester with quilted lining",
      Features: "Reflective strips, adjustable straps",
      Care: "Machine washable",
      "Weather Resistance": "Water-resistant",
    },
  },
  "comfort-harness": {
    name: "S-ETOVUS Support Harness for Injured Dogs",
    description: "Supportive harness for injured or disabled small dogs",
    rating: 4.6,
    reviews: 445,
    category: "Harnesses",
    badge: "Comfort Pick",
    image: "https://m.media-amazon.com/images/I/6189DyhVi4L._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/S-ETOVUS-Support-Harness-Injured-Disabled/dp/",
    pros: [
      "Provides excellent support for mobility issues",
      "Comfortable padding for sensitive dogs",
      "Adjustable for a custom fit",
      "Easy to use for owners",
      "Durable for long-term use",
    ],
    cons: [
      "Not ideal for high-energy activities",
      "Learning curve for proper fitting",
      "Limited aesthetic variety",
    ],
    verdict:
      "This harness is a lifesaver for small dogs with mobility issues, offering comfort and support for both pet and owner.",
    testingNotes:
      "Tested with dogs recovering from surgery or with arthritis. Owners noted improved mobility and comfort.",
    specifications: {
      Sizes: "XS, S",
      Material: "Nylon, padded mesh",
      Features: "Support handles, adjustable straps",
      "Weight Limit": "Up to 20 lbs",
      Care: "Hand wash recommended",
    },
  },
  "puzzle-feeder": {
    name: "Potaroma Puzzle Feeding Toy",
    description: "Interactive puzzle feeder for training and entertainment",
    rating: 4.6,
    reviews: 412,
    category: "Feeding",
    badge: "Health Boost",
    image: "https://m.media-amazon.com/images/I/61ulyEIfXJL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/Potaroma-Puzzle-Feeding-Training-Entertainment/dp/",
    pros: [
      "Encourages slow feeding",
      "Provides mental stimulation",
      "Adjustable difficulty levels",
      "Safe materials for food contact",
      "Engages dogs for extended periods",
    ],
    cons: [
      "May be challenging for some dogs",
      "Small parts require supervision",
      "Cleaning can be time-consuming",
    ],
    verdict:
      "This puzzle feeder is excellent for small dogs, promoting slower eating and mental engagement in a fun way.",
    testingNotes:
      "Tested with small breeds over 2 weeks. Dogs showed reduced eating speed and increased engagement.",
    specifications: {
      Material: "BPA-free plastic",
      "Difficulty Levels": "Beginner to Intermediate",
      "Age Recommendation": "6 months and up",
      Cleaning: "Dishwasher safe (top rack)",
      Capacity: "1 cup of kibble",
    },
  },
  "dental-chew-set": {
    name: "VEGGIEDENT FR3SH Tartar Control Chews",
    description: "Tartar control chews for small dogs (10-20 lbs)",
    rating: 4.5,
    reviews: 321,
    category: "Health & Care",
    badge: "Vet Approved",
    image: "https://m.media-amazon.com/images/I/71KhjHV16xL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/VEGGIEDENT-FR3SH-Tartar-Control-10-20lbs/dp/",
    pros: [
      "Effectively reduces tartar buildup",
      "Vet-recommended formula",
      "Appealing taste for most dogs",
      "Suitable for daily use",
      "Promotes fresh breath",
    ],
    cons: [
      "Not suitable for dogs under 10 lbs",
      "Some dogs may not like the texture",
      "Higher cost per chew",
    ],
    verdict:
      "These dental chews are a great choice for maintaining oral health in small dogs, with a vet-approved formula that works.",
    testingNotes:
      "Tested with small dogs over 1 month. Owners reported improved breath and reduced tartar.",
    specifications: {
      "Weight Range": "10-20 lbs",
      Ingredients: "Plant-based, no artificial flavors",
      "Chew Size": "Small",
      Frequency: "Daily use recommended",
      Packaging: "Resealable bag",
    },
  },
  "grooming-kit": {
    name: "oneisall Grooming Grinder & Shedding Kit",
    description: "Complete grooming kit with grinder and shedding tools for small dogs",
    rating: 4.4,
    reviews: 198,
    category: "Grooming",
    badge: "Pro Quality",
    image: "https://m.media-amazon.com/images/I/71RIawma33L._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/oneisall-Grooming-Grinder-Shedding-Cleaning/dp",
    pros: [
      "Quiet grinder for stress-free nail trimming",
      "Effective shedding tools for smooth coats",
      "Includes all essential grooming tools",
      "Portable and easy to store",
      "Durable for frequent use",
    ],
    cons: [
      "Grinder may take time to master",
      "Not ideal for very thick coats",
      "Battery life could be longer",
    ],
    verdict:
      "This grooming kit is perfect for small dog owners looking to maintain their pet’s coat and nails at home with professional-quality tools.",
    testingNotes:
      "Tested with small breeds over 3 months. Owners found the grinder easy to use and effective for regular grooming.",
    specifications: {
      "Tool Count": "5 pieces",
      Material: "Stainless steel, plastic",
      Features: "Nail grinder, shedding brush, clippers",
      Power: "Battery-operated grinder",
      "Breed Size": "Small (up to 25 lbs)",
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
