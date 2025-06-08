"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Send,
  Paperclip,
  GraduationCap,
  User,
  Bot,
  Trash2,
  Download,
  DollarSign,
  School,
  BookOpen,
  Award,
  Globe,
} from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

const scholarshipTypes = [
  { id: "general", name: "All Scholarships", icon: Award },
  { id: "merit", name: "Merit-Based", icon: Award },
  { id: "need", name: "Need-Based", icon: DollarSign },
  { id: "athletic", name: "Athletic", icon: Award },
  { id: "minority", name: "Minority", icon: Globe },
  { id: "international", name: "International", icon: Globe },
]

export default function ChatPage() {
  const [selectedType, setSelectedType] = useState("general")
  const [files, setFiles] = useState<FileList | undefined>(undefined)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: `Hello! I'm ScholarMate, your AI scholarship matching assistant. I'm here to help you find and apply for scholarships that match your unique profile.

I can assist you with:
🎓 Finding scholarships based on your academic achievements
💰 Identifying financial aid opportunities
📝 Guidance on application requirements and essays
🏆 Merit-based, need-based, and specialty scholarships
🌍 International student opportunities

To get started, tell me about yourself (academic interests, achievements, financial needs, etc.) so I can find the best scholarship matches for you!`,
      },
    ],
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const clearChat = () => {
    window.location.reload()
  }

  const exportChat = () => {
    const chatContent = messages.map((m) => `${m.role}: ${m.content}`).join("\n\n")
    const blob = new Blob([chatContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "scholarmate-chat.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  const getSystemPrompt = (type: string) => {
    const prompts = {
      merit:
        "You are a scholarship matching assistant specializing in merit-based scholarships. Focus on academic achievements, test scores, and extracurricular excellence.",
      need: "You are a scholarship matching assistant specializing in need-based financial aid. Focus on financial need criteria, FAFSA, and accessibility options.",
      athletic:
        "You are a scholarship matching assistant specializing in athletic scholarships. Focus on sports achievements, recruitment processes, and NCAA/NAIA requirements.",
      minority:
        "You are a scholarship matching assistant specializing in scholarships for underrepresented groups. Focus on diversity initiatives and identity-based opportunities.",
      international:
        "You are a scholarship matching assistant specializing in international student scholarships. Focus on visa requirements, country-specific opportunities, and global programs.",
      general:
        "You are ScholarMate, an AI scholarship matching assistant. Help students find financial aid opportunities based on their profile, qualifications, and goals.",
    }
    return prompts[type as keyof typeof prompts] || prompts.general
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">ScholarMate</span>
              </div>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                Scholarship Matcher
              </Badge>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={exportChat}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" onClick={clearChat}>
                <Trash2 className="h-4 w-4 mr-2" />
                Clear
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-120px)]">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scholarship Type</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scholarship type" />
                  </SelectTrigger>
                  <SelectContent>
                    {scholarshipTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <SelectItem key={type.id} value={type.id}>
                          <div className="flex items-center space-x-2">
                            <Icon className="h-4 w-4" />
                            <span>{type.name}</span>
                          </div>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Find Scholarships
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <School className="h-4 w-4 mr-2" />
                  College Funding
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Essay Tips
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scholarship Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Conversations:</span>
                    <span className="font-semibold">{Math.max(0, messages.length - 1)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Focus:</span>
                    <span className="font-semibold capitalize">{selectedType}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3 flex flex-col">
            <Card className="flex-1 flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">ScholarMate Assistant</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {isLoading ? "Searching scholarships..." : "Ready to help"}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <Separator />

              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex items-start space-x-3 ${
                          message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </AvatarFallback>
                        </Avatar>

                        <div
                          className={`flex-1 rounded-lg p-3 max-w-[80%] ${
                            message.role === "user" ? "bg-blue-600 text-white ml-auto" : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>

                          {message.experimental_attachments?.length > 0 && (
                            <div className="mt-2 space-y-2">
                              {message.experimental_attachments
                                .filter((attachment) => attachment.contentType?.startsWith("image/"))
                                .map((attachment, index) => (
                                  <Image
                                    key={`${message.id}-${index}`}
                                    src={attachment.url || "/placeholder.svg"}
                                    alt={attachment.name || `attachment-${index}`}
                                    width={200}
                                    height={200}
                                    className="rounded-lg max-w-full h-auto"
                                  />
                                ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>

              <Separator />

              {/* Input Area */}
              <div className="p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(e, {
                      experimental_attachments: files,
                      data: {
                        scholarshipType: selectedType,
                        systemPrompt: getSystemPrompt(selectedType),
                      },
                    })
                    setFiles(undefined)
                    if (fileInputRef.current) {
                      fileInputRef.current.value = ""
                    }
                  }}
                  className="space-y-3"
                >
                  {files && files.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {Array.from(files).map((file, index) => (
                        <Badge key={index} variant="secondary">
                          {file.name}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <div className="flex-1 relative">
                      <Textarea
                        value={input}
                        onChange={handleInputChange}
                        placeholder={`Tell me about your academic background, interests, and scholarship needs...`}
                        className="min-h-[60px] pr-12 resize-none"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSubmit(e as any, {
                              experimental_attachments: files,
                              data: {
                                scholarshipType: selectedType,
                                systemPrompt: getSystemPrompt(selectedType),
                              },
                            })
                            setFiles(undefined)
                            if (fileInputRef.current) {
                              fileInputRef.current.value = ""
                            }
                          }
                        }}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Paperclip className="h-4 w-4" />
                      </Button>
                    </div>

                    {isLoading ? (
                      <Button type="button" onClick={stop} variant="destructive">
                        Stop
                      </Button>
                    ) : (
                      <Button type="submit" disabled={!input.trim()}>
                        <Send className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      if (e.target.files) {
                        setFiles(e.target.files)
                      }
                    }}
                    multiple
                    accept="image/*"
                    className="hidden"
                  />
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
