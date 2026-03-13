"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart3, Brain, Calendar, Check, CheckCircle2, Crown, Infinity, Moon, Rocket, Sparkles, Star, Target, TrendingUp, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Calm Inspired */}
      <section className="relative overflow-hidden">
        {/* Soft Gradient Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-60 -top-60 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-primary/8 via-accent/5 to-transparent blur-3xl" />
          <div className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-accent/8 via-primary/5 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-t from-success/5 to-transparent blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-5xl px-6 pb-32 pt-28 md:pb-40 md:pt-36">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              We&apos;re here to help you become{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                1% better
              </span>
              {" "}everyday.
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              A behavioural intelligence platform for structured self-improvement. Track habits, understand patterns, and build lasting change with research-backed methods.
            </p>
            
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/login">
                <Button size="lg" className="h-14 gap-3 rounded-full bg-primary px-10 text-base font-medium shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/25">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant="ghost" size="lg" className="h-14 rounded-full px-8 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Value Props - Calm Style */}
      <section className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { 
                icon: Brain, 
                title: "Understand yourself.",
                description: "Get deep insights into your behavioural patterns through our 7-day diagnostic assessment.",
                color: "from-primary/10 to-primary/5"
              },
              { 
                icon: Target, 
                title: "Build better habits.",
                description: "Create lasting habits with personalized recommendations and smart scheduling.",
                color: "from-accent/10 to-accent/5"
              },
              { 
                icon: TrendingUp, 
                title: "Track your growth.",
                description: "Visualize your progress with detailed analytics and celebrate your improvements.",
                color: "from-success/10 to-success/5"
              },
            ].map((item) => (
              <div key={item.title} className="group text-center">
                <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} transition-transform duration-300 group-hover:scale-105`}>
                  <item.icon className="h-9 w-9 text-foreground/80" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Social Proof - Calm Style */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Trusted by mindful individuals</p>
            <div className="mx-auto mt-6 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-3 text-lg font-medium text-foreground">Join thousands on their journey to self-improvement</p>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { quote: "The 7-day assessment gave me insights I never had about my daily patterns. Life-changing.", name: "Priya", location: "Mumbai" },
              { quote: "Finally, a habit tracker that actually understands behaviour science. My productivity has doubled.", name: "Arjun", location: "Bangalore" },
              { quote: "The behaviour map helped me see connections between sleep and focus I was missing.", name: "Sneha", location: "Delhi" },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="border-0 bg-card/80 p-8 shadow-sm backdrop-blur-sm">
                <p className="leading-relaxed text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-6 text-sm font-medium text-foreground">{testimonial.name} from {testimonial.location}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Everything you need to improve
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A complete toolkit for understanding your behaviour and building better habits.
            </p>
          </div>
          
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {[
              { icon: Brain, title: "7-Day Diagnostic", description: "Complete behavioural assessment measuring sleep, focus, mood, and screen time patterns." },
              { icon: Target, title: "Habit Tracking", description: "Create custom habits with reminders, track streaks, and measure your consistency over time." },
              { icon: BarChart3, title: "Analytics Dashboard", description: "Visualize your progress with detailed metrics, trends, and behavioural insights." },
              { icon: Zap, title: "Behaviour Map", description: "See correlations between sleep, focus, distraction, and energy levels." },
              { icon: Moon, title: "Daily Check-ins", description: "Quick daily assessments to track your mood, energy, and productivity levels." },
              { icon: Calendar, title: "Progress Reports", description: "Weekly and monthly reports showing your improvement trajectory." },
            ].map((feature) => (
              <div key={feature.title} className="group flex gap-5 rounded-2xl border border-border/40 bg-card/50 p-6 transition-all duration-300 hover:bg-card hover:shadow-lg hover:shadow-black/5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="border-t border-border/40 bg-gradient-to-b from-secondary/30 to-background py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Your path to better habits
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A science-backed 4-step process designed to create lasting behavioural change.
            </p>
          </div>
          
          <div className="mt-20 space-y-6">
            {/* Step 1 */}
            <div className="group rounded-3xl border border-border/40 bg-card p-8 transition-all hover:shadow-lg hover:shadow-black/5 md:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-xl font-semibold text-primary-foreground shadow-lg shadow-primary/20">
                  01
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground">Goal Identification</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    Begin by defining a meaningful goal such as improving productivity, academics, health, or skill development.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-muted/50 p-5">
                      <p className="font-medium text-foreground">What we assess</p>
                      <ul className="mt-4 space-y-3">
                        {["Current lifestyle", "Daily routines", "Existing habits", "Limitations"].map((item) => (
                          <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 p-5">
                      <p className="font-medium text-foreground">Output</p>
                      <p className="mt-2 text-lg font-semibold text-primary">Ideal Behaviour Profile</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        A personalized blueprint showing the habits and routines required to achieve your goal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="group rounded-3xl border border-border/40 bg-card p-8 transition-all hover:shadow-lg hover:shadow-black/5 md:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-xl font-semibold text-accent-foreground shadow-lg shadow-accent/20">
                  02
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground">7-Day Behavioural Analysis</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    For the next 7 days, the system observes your real-life behaviour through structured hourly reminders.
                  </p>
                  <div className="mt-8">
                    <p className="font-medium text-foreground">What we track</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {["Study/Work Hours", "Focus Levels", "Sleep Patterns", "Distractions", "Mood & Energy"].map((item) => (
                        <span key={item} className="rounded-full bg-muted/70 px-4 py-2 text-sm font-medium text-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 rounded-2xl bg-gradient-to-r from-accent/10 to-success/10 p-5">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Result:</span> A detailed behavioural dataset that reflects your real lifestyle patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="group rounded-3xl border border-border/40 bg-card p-8 transition-all hover:shadow-lg hover:shadow-black/5 md:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-success to-success/80 text-xl font-semibold text-success-foreground shadow-lg shadow-success/20">
                  03
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground">Behaviour Gap Analysis</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    After the observation phase, we compare your real behaviour with the Ideal Behaviour Profile.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="font-medium text-foreground">We identify</p>
                      <ul className="mt-4 space-y-2">
                        {["Productivity gaps", "Habit inconsistencies", "Behavioural inefficiencies", "Time management issues"].map((item) => (
                          <li key={item} className="rounded-xl bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-success/15 to-primary/10 p-6">
                      <p className="font-medium text-foreground">Output</p>
                      <p className="mt-2 text-lg font-semibold text-success">Personalized Strategy</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        A tailored action plan designed for your unique patterns and goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="group rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-8 shadow-lg shadow-primary/5 transition-all hover:shadow-xl md:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-xl font-semibold text-primary-foreground shadow-lg shadow-primary/20">
                  04
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    <Sparkles className="h-4 w-4" />
                    Continuous Loop
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-foreground">Continuous Improvement</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    The platform begins an ongoing improvement cycle, adapting to your progress and evolving with your growth.
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                    {[
                      { title: "Habit Recommendations", desc: "Personalized suggestions" },
                      { title: "Smart Scheduling", desc: "Optimized daily planning" },
                      { title: "Activity Tracking", desc: "Real-time monitoring" },
                      { title: "Progress Analytics", desc: "Detailed insights" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl bg-card/80 p-4 shadow-sm backdrop-blur-sm">
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="border-t border-border/40 py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that fits your journey. Start free, upgrade anytime.
            </p>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Starter */}
            <Card className="relative border-border/40 p-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Starter</h3>
                <p className="mt-1 text-sm text-muted-foreground">For individuals starting out</p>
              </div>
              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">₹200</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="mt-6 space-y-3">
                {["7-day assessment", "3 habit tracking slots", "Basic analytics", "Email support"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-8 w-full rounded-full">
                Get Started
              </Button>
            </Card>
            
            {/* Growth */}
            <Card className="relative border-border/40 p-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Growth</h3>
                <p className="mt-1 text-sm text-muted-foreground">For committed individuals</p>
              </div>
              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">₹699</span>
                <span className="text-muted-foreground">/6mo</span>
              </div>
              <ul className="mt-6 space-y-3">
                {["Everything in Starter", "Unlimited habits", "Behaviour map", "Priority support"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-8 w-full rounded-full">
                Get Started
              </Button>
            </Card>
            
            {/* Pro - Featured */}
            <Card className="relative border-2 border-primary/30 bg-gradient-to-b from-primary/5 to-transparent p-6 shadow-lg shadow-primary/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Pro</h3>
                <p className="mt-1 text-sm text-muted-foreground">Best value for growth</p>
              </div>
              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">₹999</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <ul className="mt-6 space-y-3">
                {["Everything in Growth", "Advanced analytics", "AI insights", "Weekly reports", "1-on-1 coaching call"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full rounded-full bg-primary shadow-lg shadow-primary/20">
                Get Started
              </Button>
            </Card>
            
            {/* Lifetime */}
            <Card className="relative border-border/40 p-6">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">Lifetime</h3>
                <Crown className="h-4 w-4 text-amber-500" />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">One-time purchase</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">₹2,000</span>
              </div>
              <ul className="mt-6 space-y-3">
                {["Everything in Pro", "Lifetime access", "All future features", "VIP support"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-8 w-full rounded-full">
                Get Started
              </Button>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="border-t border-border/40 bg-gradient-to-b from-secondary/50 to-background py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Ready to become 1% better?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Start your journey today. Join thousands who are building better habits and transforming their lives.
          </p>
          <div className="mt-10">
            <Link href="/login">
              <Button size="lg" className="h-14 gap-3 rounded-full bg-primary px-10 text-base font-medium shadow-lg shadow-primary/20">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <span className="text-sm font-bold text-primary-foreground">1%</span>
              </div>
              <span className="font-semibold text-foreground">1% Better Everyday</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with care for mindful individuals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
