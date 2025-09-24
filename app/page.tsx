import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Heart,
  Shield,
  Truck,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Gift,
  Zap,
  BookOpen,
  MessageCircle,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto text-center">
          <Badge className="mb-6" variant="secondary">
            🐕 Trusted by 50,000+ Pet Parents
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Premium Accessories for Your
            <span className="text-primary block">Small Furry Friends</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Discover expertly curated pet supplies, honest reviews, and personalized recommendations for small dogs and
            pets. Quality you can trust, prices you'll love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/reviews">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/reviews">View Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Shield className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground">Premium materials only</p>
            </div>
            <div className="space-y-2">
              <Truck className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Fast Shipping</h3>
              <p className="text-sm text-muted-foreground">2-day delivery available</p>
            </div>
            <div className="space-y-2">
              <Award className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Expert Reviews</h3>
              <p className="text-sm text-muted-foreground">Tested by pet professionals</p>
            </div>
            <div className="space-y-2">
              <Users className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Community Driven</h3>
              <p className="text-sm text-muted-foreground">Real pet parent reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Pet Parents Worldwide</h2>
            <p className="text-xl text-muted-foreground">Our community continues to grow every day</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <p className="text-muted-foreground">Products Reviewed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked essentials that every small dog owner needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/puppy-starter-kit-with-toys-and-accessories.jpg"
                    alt="Puppy Starter Kit"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Best Seller</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Abbylike 50 Pcs Puppy Starter Kit</CardTitle>
                <CardDescription className="mb-4">
                  Complete starter kit for small dogs including toys, treats, and essential accessories
                </CardDescription>
                <div className="flex justify-end">
                  <Button size="sm" asChild>
                    <Link href="/reviews/puppy-starter-kit">View Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/small-dog-collar-and-leash-set.jpg"
                    alt="Premium Collar Set"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Editor's Choice</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Premium Collar & Leash Set</CardTitle>
                <CardDescription className="mb-4">
                  Soft padded collar with matching leash, perfect for daily walks and training
                </CardDescription>
                <div className="flex justify-end">
                  <Button size="sm" asChild>
                    <Link href="/reviews/premium-collar-set">View Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/interactive-dog-toys-for-small-breeds.jpg"
                    alt="Interactive Toy Bundle"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">New Arrival</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">4.7</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Interactive Toy Bundle</CardTitle>
                <CardDescription className="mb-4">
                  Mental stimulation toys designed specifically for small breed intelligence
                </CardDescription>
                <div className="flex justify-end">
                  <Button size="sm" asChild>
                    <Link href="/reviews/interactive-toy-bundle">View Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending This Week</h2>
            <p className="text-xl text-muted-foreground">Most popular products among small dog owners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
                  <img
                    src="/small-dog-comfort-harness.jpg"
                    alt="Comfort Harness"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs ml-1">4.9</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <h3 className="font-semibold text-sm mb-2">No-Pull Comfort Harness</h3>
                <p className="text-xs text-muted-foreground mb-3">Gentle training harness</p>
                <div className="flex justify-end">
                  <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
                  <img
                    src="/natural-dental-chews-for-small-dogs.jpg"
                    alt="Dental Chews"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs ml-1">4.8</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <h3 className="font-semibold text-sm mb-2">Natural Dental Chews</h3>
                <p className="text-xs text-muted-foreground mb-3">Healthy teeth & breath</p>
                <div className="flex justify-end">
                  <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
                  <img
                    src="/small-dog-winter-coat-waterproof.jpg"
                    alt="Winter Coat"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs ml-1">4.7</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <h3 className="font-semibold text-sm mb-2">Waterproof Winter Coat</h3>
                <p className="text-xs text-muted-foreground mb-3">Warm & stylish protection</p>
                <div className="flex justify-end">
                  <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
                  <img
                    src="/puzzle-feeding-bowl-for-small-dogs.jpg"
                    alt="Puzzle Bowl"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs ml-1">4.6</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <h3 className="font-semibold text-sm mb-2">Slow Feeding Puzzle Bowl</h3>
                <p className="text-xs text-muted-foreground mb-3">Promotes healthy eating</p>
                <div className="flex justify-end">
                  <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-xl text-muted-foreground">Everything your small pet needs, organized just for you</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Collars & Leashes</h3>
                <p className="text-sm text-muted-foreground">Stylish and comfortable</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Toys & Treats</h3>
                <p className="text-sm text-muted-foreground">Fun and engaging</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Health & Care</h3>
                <p className="text-sm text-muted-foreground">Wellness essentials</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Accessories</h3>
                <p className="text-sm text-muted-foreground">Complete the look</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal Collection Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seasonal Collections</h2>
            <p className="text-xl text-muted-foreground">Perfect products for every season and occasion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <img
                  src="/small-dog-winter-coat-waterproof.jpg"
                  alt="Winter Collection"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Winter Essentials</h3>
                  <p className="text-sm opacity-90">Keep your small dog warm and cozy</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Winter essentials for your pet</p>
                  </div>
                  <Button asChild>
                    <Link href="/reviews?category=winter">Shop Winter</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <img
                  src="/interactive-dog-toys-for-small-breeds.jpg"
                  alt="Holiday Collection"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Holiday Specials</h3>
                  <p className="text-sm opacity-90">Festive toys and accessories</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Festive toys and accessories</p>
                  </div>
                  <Button asChild>
                    <Link href="/reviews?category=holiday">Shop Holiday</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pet Care Tips Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Pet Care Tips</h2>
            <p className="text-xl text-muted-foreground">Learn from professional trainers and veterinarians</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Training Small Dogs</CardTitle>
                <CardDescription>
                  Essential training techniques specifically designed for small breed temperaments and learning styles.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/tips/training">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Health & Nutrition</CardTitle>
                <CardDescription>
                  Proper nutrition guidelines and health monitoring tips to keep your small dog happy and healthy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/tips/health">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Exercise & Play</CardTitle>
                <CardDescription>
                  Fun activities and exercise routines perfect for small dogs to stay active and mentally stimulated.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/tips/exercise">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Pet Parents Choose PuppyStore</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Expert Product Testing</h3>
                    <p className="text-muted-foreground">
                      Every product is tested by professional pet trainers and veterinarians before we recommend it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Small Breed Specialists</h3>
                    <p className="text-muted-foreground">
                      We focus exclusively on small dogs and understand their unique needs and preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Honest Reviews</h3>
                    <p className="text-muted-foreground">
                      Our reviews are unbiased and based on real testing with real pets, not marketing materials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Community Driven</h3>
                    <p className="text-muted-foreground">
                      Join thousands of pet parents sharing experiences and recommendations in our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/happy-small-dog-with-accessories-and-toys.jpg"
                alt="Happy small dog with accessories"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted Brand Partners</h2>
            <p className="text-lg text-muted-foreground">We work with the best brands in pet care</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="font-bold text-lg">KONG</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="font-bold text-lg">Nylabone</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="font-bold text-lg">Puppia</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="font-bold text-lg">Ruffwear</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="font-bold text-lg">Zuke's</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="font-bold text-lg">Blue Buffalo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Pet Parents Say</h2>
            <p className="text-xl text-muted-foreground">Real reviews from real pet families</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The puppy starter kit was perfect for our new Yorkie. Everything we needed in one package, and the
                  quality is amazing!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-primary">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Yorkie Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Finally found a collar that doesn't irritate my Chihuahua's sensitive skin. The reviews here are spot
                  on!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-primary">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mike R.</p>
                    <p className="text-sm text-muted-foreground">Chihuahua Dad</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Love how they focus on small breeds specifically. The toy recommendations have been perfect for our
                  Pomeranian."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-primary">JL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jessica L.</p>
                    <p className="text-sm text-muted-foreground">Pomeranian Mom</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest product reviews, pet care tips, and exclusive deals delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button>Subscribe</Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">No spam, unsubscribe anytime. We respect your privacy.</p>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-muted-foreground">Connect with fellow small dog parents and share experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Discussion Forums</h3>
              <p className="text-muted-foreground mb-6">
                Share tips, ask questions, and connect with other small dog owners in our friendly community forums.
              </p>
              <Button variant="outline" asChild>
                <Link href="/community/forums">Join Forums</Link>
              </Button>
            </Card>

            <Card className="text-center p-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Local Meetups</h3>
              <p className="text-muted-foreground mb-6">
                Find and organize local meetups with other small dog parents in your area for playdates and
                socialization.
              </p>
              <Button variant="outline" asChild>
                <Link href="/community/meetups">Find Meetups</Link>
              </Button>
            </Card>

            <Card className="text-center p-8">
              <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Photo Contests</h3>
              <p className="text-muted-foreground mb-6">
                Show off your adorable small dog and win prizes in our monthly photo contests and challenges.
              </p>
              <Button variant="outline" asChild>
                <Link href="/community/contests">Enter Contest</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find the Perfect Products?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Browse our expert reviews and find exactly what your small pet needs
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/reviews">
              Start Shopping <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
