import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, ArrowRight, MessageSquare, Search, FileText, Award, CheckCircle } from "lucide-react"

export default function HowItWorksPage() {
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
            <Link href="/how-it-works" className="text-blue-600 font-medium">
              How It Works
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
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
            How ScholarMate
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Works</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get matched with scholarships in just a few simple steps. Our AI does the heavy lifting so you can focus on
            what matters most.
          </p>
        </div>
      </section>

      {/* Main Steps */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Tell Us About Yourself</h2>
                </div>
                <p className="text-lg text-gray-600">
                  Start a conversation with our AI assistant. Share your academic background, interests, achievements,
                  financial needs, and career goals. The more details you provide, the better we can match you.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Academic achievements and GPA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Extracurricular activities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Financial situation and needs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Career goals and interests</span>
                  </div>
                </div>
              </div>
              <Card className="p-8 shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-semibold">AI Assistant</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm">
                      "Hi! I'm a junior studying computer science with a 3.8 GPA. I'm interested in AI research and need
                      help with tuition costs..."
                    </p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-sm">
                      "Great! I can help you find scholarships for CS students. Tell me more about your research
                      interests and any projects you've worked on."
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8 shadow-xl lg:order-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Search className="h-8 w-8 text-purple-600" />
                  <h3 className="text-xl font-semibold">AI Matching</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Tech Innovation Scholarship</span>
                    <span className="text-green-600 font-bold">95% Match</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">STEM Excellence Award</span>
                    <span className="text-blue-600 font-bold">88% Match</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Future Leaders Grant</span>
                    <span className="text-purple-600 font-bold">82% Match</span>
                  </div>
                </div>
              </Card>
              <div className="space-y-6 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Get Personalized Matches</h2>
                </div>
                <p className="text-lg text-gray-600">
                  Our AI analyzes thousands of scholarships in real-time, comparing your profile against eligibility
                  criteria to find the best matches. You'll receive a ranked list of opportunities with match
                  percentages.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Real-time database scanning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Eligibility verification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Match probability scoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Deadline prioritization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Apply with Confidence</h2>
                </div>
                <p className="text-lg text-gray-600">
                  Get detailed application guidance, essay tips, and deadline reminders. Our AI helps you craft
                  compelling applications that stand out from the competition.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Application requirement checklists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Essay writing assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Deadline tracking and reminders</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Application status monitoring</span>
                  </div>
                </div>
              </div>
              <Card className="p-8 shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-8 w-8 text-green-600" />
                  <h3 className="text-xl font-semibold">Application Tracker</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Tech Innovation Scholarship</p>
                      <p className="text-xs text-gray-500">Due: March 15, 2024</p>
                    </div>
                    <span className="text-green-600 text-sm font-medium">Submitted</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">STEM Excellence Award</p>
                      <p className="text-xs text-gray-500">Due: March 30, 2024</p>
                    </div>
                    <span className="text-yellow-600 text-sm font-medium">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Future Leaders Grant</p>
                      <p className="text-xs text-gray-500">Due: April 10, 2024</p>
                    </div>
                    <span className="text-blue-600 text-sm font-medium">Not Started</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Sarah M.</CardTitle>
                <CardDescription>Computer Science Student</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">"Found 5 scholarships worth $25,000 in just one week!"</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Marcus J.</CardTitle>
                <CardDescription>Pre-Med Student</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  "The AI found scholarships I never would have discovered on my own."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Elena R.</CardTitle>
                <CardDescription>International Student</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">"Secured full tuition coverage for my engineering degree!"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have found their perfect scholarship match
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link href="/chat">
              Start Finding Scholarships
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
