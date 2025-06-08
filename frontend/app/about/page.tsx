import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, ArrowRight, Target, Heart, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ScholarMate</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Features
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              How It Works
            </Link>
            <Link href="/about" className="text-blue-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/chat">Find Scholarships</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              ScholarMate
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're on a mission to make higher education accessible to everyone by connecting students with scholarship
            opportunities through the power of AI.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600">
                Education should never be limited by financial barriers. ScholarMate was founded with the belief that
                every student deserves access to quality education, regardless of their economic background.
              </p>
              <p className="text-lg text-gray-600">
                Our AI-powered platform democratizes scholarship discovery, making it easier for students to find and
                apply for financial aid opportunities that match their unique profiles and aspirations.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$50M+</div>
                  <div className="text-sm text-gray-600">Scholarships Found</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">10,000+</div>
                  <div className="text-sm text-gray-600">Students Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                alt="Students celebrating graduation"
                className="w-full h-auto rounded-2xl shadow-xl"
                src="https://img.freepik.com/free-psd/3d-rendering-graduate-character_23-2151363349.jpg"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Accessibility</CardTitle>
                <CardDescription>
                  Making scholarship opportunities accessible to students from all backgrounds and circumstances
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Empowerment</CardTitle>
                <CardDescription>
                  Empowering students with the tools and knowledge they need to achieve their educational goals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  Leveraging cutting-edge AI technology to revolutionize how students find scholarships
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-semibold">The Problem</h3>
                <p className="text-gray-600">
                  Every year, billions of dollars in scholarships go unclaimed because students simply don't know they
                  exist. The traditional scholarship search process is time-consuming, overwhelming, and often
                  ineffective.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-semibold">The Solution</h3>
                <p className="text-gray-600">
                  We created ScholarMate to solve this problem using artificial intelligence. Our platform analyzes
                  thousands of scholarships in real-time, matching students with opportunities they're most likely to
                  win.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-semibold">The Impact</h3>
                <p className="text-gray-600">
                  Since our launch, we've helped over 10,000 students find more than $50 million in scholarship funding.
                  But we're just getting started – our goal is to help every student access the education they deserve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate educators and technologists working to democratize education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">JS</span>
                </div>
                <CardTitle>Jane Smith</CardTitle>
                <CardDescription>CEO & Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Former scholarship recipient turned education advocate with 10+ years in EdTech
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">MD</span>
                </div>
                <CardTitle>Mike Davis</CardTitle>
                <CardDescription>CTO & Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  AI researcher and former Google engineer passionate about using technology for social good
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">AL</span>
                </div>
                <CardTitle>Anna Lee</CardTitle>
                <CardDescription>Head of Student Success</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Former college counselor dedicated to helping students navigate the scholarship landscape
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8">
            Help us make education accessible to everyone. Start your scholarship journey today.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link href="/chat">
              Find Your Scholarships
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
