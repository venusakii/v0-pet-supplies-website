import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Award, Users, Shield, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About PuppyStore</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate pet parents dedicated to helping you find the best products for your small furry friends.
            Our mission is to provide honest, detailed reviews that help you make informed decisions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PuppyStore was founded in 2020 by a team of small dog enthusiasts who were frustrated by the lack of
                  specialized reviews for small breed products. As owners of Chihuahuas, Yorkies, and Pomeranians, we
                  noticed that most pet product reviews focused on larger dogs.
                </p>
                <p>
                  Small dogs have unique needs - from appropriately sized toys to gentle training tools. We decided to
                  create a platform dedicated exclusively to reviewing products for small breeds, testing everything
                  with our own pets and a network of small dog owners.
                </p>
                <p>
                  Today, we've reviewed over 500 products and helped thousands of pet parents find the perfect
                  accessories for their small companions. Every review is based on real testing, not marketing
                  materials.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/happy-small-dog-with-accessories-and-toys.jpg"
                alt="Our team with small dogs"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">What drives everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Pet-First Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Every decision we make prioritizes the health, safety, and happiness of small dogs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Honest Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  We provide unbiased reviews based on real testing, not sponsored content or marketing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Our team includes veterinarians, trainers, and experienced small dog owners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  We build a supportive community of small dog parents sharing experiences and advice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The pet parents behind PuppyStore</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">SM</span>
                </div>
                <CardTitle>Sarah Martinez</CardTitle>
                <p className="text-sm text-muted-foreground">Founder & Chief Editor</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Yorkie mom with 8 years of experience in pet product testing. Former veterinary technician.
                </p>
                <Badge variant="secondary">Yorkie Expert</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">MR</span>
                </div>
                <CardTitle>Mike Rodriguez</CardTitle>
                <p className="text-sm text-muted-foreground">Product Testing Lead</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Chihuahua dad and certified dog trainer specializing in small breed behavior and training.
                </p>
                <Badge variant="secondary">Training Expert</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">JL</span>
                </div>
                <CardTitle>Dr. Jessica Lee</CardTitle>
                <p className="text-sm text-muted-foreground">Veterinary Advisor</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Licensed veterinarian with expertise in small breed health and nutrition. Pomeranian owner.
                </p>
                <Badge variant="secondary">Health Expert</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Products Reviewed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Happy Pet Parents</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
