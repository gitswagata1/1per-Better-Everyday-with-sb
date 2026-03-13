import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart3, Brain, Calendar, CheckCircle2, Sparkles, Target, TrendingUp, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Behavioural Intelligence Platform</span>
            </div>
            
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              Become 1% Better Everyday
            </h1>
            
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
              A behavioural intelligence platform for structured self-improvement. Track habits, understand patterns, and build lasting change.
            </p>
            
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/login">
                <Button size="lg" className="gap-2">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant="outline" size="lg">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-10">
            <div className="text-center">
              <p className="text-3xl font-semibold text-foreground">7</p>
              <p className="mt-1 text-sm text-muted-foreground">Day Assessment</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-foreground">4</p>
              <p className="mt-1 text-sm text-muted-foreground">Focus Areas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-foreground">100%</p>
              <p className="mt-1 text-sm text-muted-foreground">Research-Driven</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="border-t border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Everything you need to improve
            </h2>
            <p className="mt-4 text-muted-foreground">
              A complete toolkit for understanding your behaviour and building better habits.
            </p>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">7-Day Diagnostic</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete behavioural assessment measuring sleep, focus, mood, and screen time patterns.
              </p>
            </Card>
            
            <Card className="border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Habit Tracking</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Create custom habits with reminders, track streaks, and measure your consistency over time.
              </p>
            </Card>
            
            <Card className="border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Analytics Dashboard</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Visualize your progress with detailed metrics, trends, and behavioural insights.
              </p>
            </Card>
            
            <Card className="border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Behaviour Map</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                See correlations between sleep, focus, distraction, and energy levels.
              </p>
            </Card>
            
            <Card className="border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Daily Check-ins</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Quick daily assessments to track your mood, energy, and productivity levels.
              </p>
            </Card>
            
            <Card className="border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Progress Reports</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Weekly and monthly reports showing your improvement trajectory.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              How it works
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start your journey to self-improvement in four simple steps.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Complete Onboarding",
                description: "Tell us about your goals and focus areas to personalize your experience."
              },
              {
                step: "02",
                title: "7-Day Assessment",
                description: "Track your sleep, focus, mood, and screen time for a complete behavioural profile."
              },
              {
                step: "03",
                title: "Build Habits",
                description: "Create custom habits based on your assessment insights and goals."
              },
              {
                step: "04",
                title: "Track & Improve",
                description: "Monitor your progress daily and watch yourself become 1% better."
              }
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-bold text-muted/60">{item.step}</span>
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Card className="border-border bg-card p-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Ready to become 1% better?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Join thousands of people using behavioural intelligence to build lasting habits and improve their lives.
            </p>
            <div className="mt-8">
              <Link href="/login">
                <Button size="lg" className="gap-2">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Free 14-day trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                No credit card required
              </span>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">1%</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">Better</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built for continuous improvement.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
