import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Lock, Search, Zap, Pencil } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">NoteShare</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Your Notes, Beautifully Organized</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          A modern note-taking app with markdown support, real-time search, and a clean interface. Write, organize, and
          share your thoughts effortlessly.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/register">
            <Button size="lg">Start Writing</Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline">
              Sign In
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Pencil className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Markdown Support</CardTitle>
              <CardDescription>
                Write with full GitHub Flavored Markdown including code blocks, tables, and more
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Search className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Real-time Search</CardTitle>
              <CardDescription>
                Find your notes instantly with powerful search across titles and content
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Lock className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Secure & Private</CardTitle>
              <CardDescription>
                Your notes are protected with JWT authentication and user-specific isolation
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Fast & Responsive</CardTitle>
              <CardDescription>Built with modern tech for a smooth experience on any device</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Ready to get started?</CardTitle>
            <CardDescription className="text-base">
              Create your account and start organizing your notes today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Create Free Account
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 NoteShare.</p>
        </div>
      </footer>
    </div>
  )
}
