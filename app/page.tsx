"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart3, Brain, Calendar, Check, CheckCircle2, Crown, Infinity, Rocket, Sparkles, Target, TrendingUp, Zap } from "lucide-react"

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
      
      {/* How It Works Section - Enhanced */}
      <section id="how-it-works" className="border-t border-border/60 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              How It Works
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Your structured path to growth
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A science-backed 4-step process designed to create lasting behavioural change.
            </p>
          </div>
          
          <div className="mt-20 space-y-8">
            {/* Step 1 */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-black/5 md:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl transition-all group-hover:scale-125" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
                    <span className="text-2xl font-bold text-primary-foreground">01</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">Goal Identification</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    Begin by defining a meaningful goal such as improving productivity, academics, health, or skill development.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-muted/50 p-4">
                      <p className="text-sm font-semibold text-foreground">Diagnostic Questions</p>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>Current lifestyle analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>Daily routines mapping</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>Current habits assessment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>Limitations identification</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 p-4">
                      <p className="text-sm font-semibold text-foreground">Output</p>
                      <div className="mt-3">
                        <p className="text-sm font-medium text-primary">Ideal Behaviour Profile</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          A personalized blueprint showing the habits, skills, and routines required to achieve your goal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-black/5 md:p-10">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-accent/5 to-primary/5 blur-3xl transition-all group-hover:scale-125" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
                    <span className="text-2xl font-bold text-primary-foreground">02</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">7-Day Behavioural Analysis</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    For the next 7 days, the system observes your real-life behaviour through structured hourly reminders.
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-foreground">What we track:</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                      {[
                        { label: "Study/Work Hours", icon: "clock" },
                        { label: "Focus Levels", icon: "target" },
                        { label: "Sleep Patterns", icon: "moon" },
                        { label: "Distractions", icon: "alert" },
                        { label: "Mood & Energy", icon: "heart" },
                      ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center rounded-xl bg-muted/50 p-4 text-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <p className="mt-2 text-xs font-medium text-foreground">{item.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 p-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Result:</span> A detailed behavioural dataset that reflects your real lifestyle patterns, creating the foundation for personalized insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-black/5 md:p-10">
              <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl transition-all group-hover:scale-125" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
                    <span className="text-2xl font-bold text-primary-foreground">03</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">Behaviour Gap Analysis</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    After the observation phase, the system compares your real behaviour with the Ideal Behaviour Profile.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">We identify:</p>
                      <ul className="mt-3 space-y-2">
                        {[
                          "Productivity gaps",
                          "Habit inconsistencies",
                          "Behavioural inefficiencies",
                          "Time management issues"
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-3 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10">
                              <div className="h-1.5 w-1.5 rounded-full bg-destructive" />
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                      <p className="text-sm font-semibold text-foreground">Output</p>
                      <p className="mt-2 text-lg font-bold text-primary">Personalized Improvement Strategy</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        A tailored action plan designed specifically for your unique behavioural patterns and goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-8 shadow-lg shadow-primary/5 transition-all hover:shadow-xl md:p-10">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 blur-3xl" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
                    <span className="text-2xl font-bold text-primary-foreground">04</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Sparkles className="h-3 w-3" />
                    Continuous Loop
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">Continuous Improvement System</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    The platform begins an ongoing improvement cycle, adapting to your progress and evolving with your growth.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {[
                      { title: "Habit Recommendations", desc: "Personalized suggestions" },
                      { title: "Smart Scheduling", desc: "Optimized daily planning" },
                      { title: "Activity Tracking", desc: "Real-time monitoring" },
                      { title: "Progress Analytics", desc: "Detailed insights" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl bg-card/80 p-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 rounded-xl bg-card/80 p-4 shadow-sm backdrop-blur-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Iterative Feedback Loop</p>
                      <p className="text-xs text-muted-foreground">Re-evaluates weekly and updates recommendations for continuous growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="border-t border-border/60 bg-card/50 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Pricing
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Choose your growth plan
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Flexible pricing designed to support your journey at every stage.
            </p>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Starter */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-muted/50 to-transparent blur-2xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <Rocket className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">Starter</h3>
                <p className="mt-1 text-sm text-muted-foreground">Monthly</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">₹200</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Best for short-term experimentation and testing the system.
                </p>
                <ul className="mt-6 space-y-3">
                  {["7-day assessment", "Basic analytics", "Habit tracking", "Email support"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/login">
                  <Button variant="outline" className="w-full rounded-xl">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Growth */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">Growth</h3>
                <p className="mt-1 text-sm text-muted-foreground">6 Months</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">₹699</span>
                  <span className="text-muted-foreground">/6mo</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  For structured habit development over a longer period.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Everything in Starter", "Advanced analytics", "Behaviour mapping", "Priority support", "Weekly reports"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/login">
                  <Button variant="outline" className="w-full rounded-xl">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Pro - Most Popular */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-primary bg-gradient-to-b from-primary/5 to-card p-6 shadow-lg shadow-primary/10 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-2xl" />
              <div className="absolute -top-px left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-b-lg bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </span>
              </div>
              <div className="relative pt-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
                  <Crown className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">Pro</h3>
                <p className="mt-1 text-sm text-muted-foreground">Annual</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">₹999</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The most popular plan for long-term productivity improvement.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Everything in Growth", "AI-powered insights", "Custom integrations", "1-on-1 coaching", "API access", "Team features"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/login">
                  <Button className="w-full rounded-xl bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Lifetime */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-2xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Infinity className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">Lifetime</h3>
                <p className="mt-1 text-sm text-muted-foreground">One-time</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">₹2,000</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Full access to all current and future features with lifetime updates.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Everything in Pro", "Lifetime updates", "Early access features", "Dedicated support", "No recurring fees"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/login">
                  <Button variant="outline" className="w-full rounded-xl">
                    Get Lifetime Access
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="border-t border-border/60 py-28">
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
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Free 14-day trial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
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
                <span className="text-sm font-bold text-primary-foreground">1%</span>
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
