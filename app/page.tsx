"use client"

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
        {/* Gradient Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 md:pb-36 md:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Behavioural Intelligence Platform</span>
            </div>
            
            <h1 className="text-balance bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
              Become 1% Better Everyday
            </h1>
            
            <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              A behavioural intelligence platform for structured self-improvement. Track habits, understand patterns, and build lasting change.
            </p>
            
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/login">
                <Button size="lg" className="h-12 gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant="outline" size="lg" className="h-12 rounded-xl border-border/60 px-8 text-base font-medium backdrop-blur-sm hover:bg-card">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mx-auto mt-24 grid max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-border/60 bg-card/80 p-8 shadow-lg shadow-black/5 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">7</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">Day Assessment</p>
            </div>
            <div className="relative text-center">
              <div className="absolute inset-y-0 left-0 w-px bg-border" />
              <div className="absolute inset-y-0 right-0 w-px bg-border" />
              <p className="text-4xl font-bold text-primary">4</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">Focus Areas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">100%</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">Research-Driven</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="border-t border-border/60 bg-card/50 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Features
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Everything you need to improve
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A complete toolkit for understanding your behaviour and building better habits.
            </p>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Brain, title: "7-Day Diagnostic", description: "Complete behavioural assessment measuring sleep, focus, mood, and screen time patterns." },
              { icon: Target, title: "Habit Tracking", description: "Create custom habits with reminders, track streaks, and measure your consistency over time." },
              { icon: BarChart3, title: "Analytics Dashboard", description: "Visualize your progress with detailed metrics, trends, and behavioural insights." },
              { icon: Zap, title: "Behaviour Map", description: "See correlations between sleep, focus, distraction, and energy levels." },
              { icon: Calendar, title: "Daily Check-ins", description: "Quick daily assessments to track your mood, energy, and productivity levels." },
              { icon: TrendingUp, title: "Progress Reports", description: "Weekly and monthly reports showing your improvement trajectory." },
            ].map((feature) => (
              <Card key={feature.title} className="group relative overflow-hidden border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl transition-all group-hover:scale-150" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="border-t border-border/60 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              How It Works
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Start improving in 4 simple steps
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Begin your journey to self-improvement with our structured approach.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Complete Onboarding", description: "Tell us about your goals and focus areas to personalize your experience." },
              { step: "02", title: "7-Day Assessment", description: "Track your sleep, focus, mood, and screen time for a complete behavioural profile." },
              { step: "03", title: "Build Habits", description: "Create custom habits based on your assessment insights and goals." },
              { step: "04", title: "Track & Improve", description: "Monitor your progress daily and watch yourself become 1% better." }
            ].map((item) => (
              <div key={item.step} className="group relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:shadow-black/5">
                <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-5xl font-bold text-transparent opacity-80 transition-opacity group-hover:opacity-100">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="border-t border-border/60 bg-card/50 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-12 shadow-xl md:p-16">
            {/* Background decorations */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            
            <div className="relative text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Ready to become 1% better?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
                Join thousands of people using behavioural intelligence to build lasting habits and improve their lives.
              </p>
              <div className="mt-10">
                <Link href="/login">
                  <Button size="lg" className="h-12 gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
                    Get Started Free
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  Free 14-day trial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
                <span className="text-sm font-bold text-white">1%</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">Better</span>
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
