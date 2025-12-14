import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Instagram, Youtube, Music2, TrendingUp, BookOpen, Users } from 'lucide-react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center space-y-8">
            <img 
              src={logo} 
              alt="Way Trades Logo" 
              className="w-64 md:w-80 lg:w-96 animate-fade-in"
            />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent animate-slide-in-up">
              Way Trades
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-slide-in-up animation-delay-200">
              Join The Way to Trading Success
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl animate-slide-in-up animation-delay-300">
              Our mission is simple: to transform traders into consistent, disciplined, and independent professionals. Whether you're a beginner or a struggling intermediate, we provide the knowledge and expertise you need to succeed with our guidance.
            </p>
          </div>
        </div>
      </header>

      {/* Membership Pricing Section (Redesigned) */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Join Our Community
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Unlock your full trading potential with our Free Community or upgrade to VIP Membership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Community Card */}
            <Card className="hover-lift border-2 border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader className="bg-primary/10 rounded-t-lg">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl text-center text-primary">FREE COMMUNITY</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground border-b border-border pb-2">INCLUDES</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Full Video Courses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Motivational Insights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Admin Commentary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Free Live Classes + Q&A's</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Trading Chat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Long-Term Stock Ideas</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-red-500 border-b border-border pb-2">DOES NOT INCLUDE</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>Morning Watchlists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>Swing Trade Signals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>Options only channel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>Futures only channel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>Live Day Trading Signals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>Trade Recaps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>Bonus Charts & Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>Full Access to Our Strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>Exclusive Live Classes + Q&A's</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => window.open('https://whop.com/waytrades/free-access-c6/', '_blank' )}
                >
                  Join Free Community
                </Button>
              </CardContent>
            </Card>

            {/* VIP Membership Card */}
            <Card className="hover-lift border-2 border-primary/50 hover:border-primary transition-all duration-300 relative overflow-hidden vip-pulse">
              <CardHeader className="bg-yellow-500/10 rounded-t-lg">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-10 h-10 text-yellow-500" />
                </div>
                <CardTitle className="text-3xl text-center text-yellow-500">VIP MEMBERSHIP</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground border-b border-border pb-2">INCLUDES</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Full Video Courses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Motivational Insights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Admin Commentary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Free Live Classes + Q&A's</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Trading Chat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Long-Term Stock Ideas</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-yellow-500 border-b border-border pb-2">PLUS</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Morning Watchlists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Swing Trade Signals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Options only channel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Futures only channel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Live Day Trading Signals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Trade Recaps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Bonus Charts & Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Full Access to Our Strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Exclusive Live Classes + Q&A's</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span>Priority Support & Guidance</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center space-y-2 pt-4">
                  <h3 className="text-2xl font-bold text-yellow-500">PRICING</h3>
                  <p className="text-xl font-semibold text-foreground">$74/month</p>
                  <p className="text-lg text-muted-foreground">$210/3 months (Save 5%)</p>
                  <p className="text-lg text-muted-foreground">$728/year (Save 18%)</p>
                </div>

                <Button 
                  className="w-full gradient-gold hover:opacity-90 text-background font-semibold"
                  onClick={() => window.open('https://whop.com/waytrades/vip-access-60-1cb2/?utm_source=store_page&funnelId=product_7b3b2e38-8bc7-402b-9afa-d939c94b9673', '_blank' )}
                >
                  Get VIP Access
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              Free Educational Courses
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive video courses designed for beginners to build a strong, profitable foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Beginners Course (Shows Technical Analysis Video) */}
            <Card className="hover-lift border-2 border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Beginners Course</CardTitle>
                <CardDescription className="text-base">
                  Master the fundamentals of trading
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="https://youtu.be/cq9TnguBkH8?feature=shared" target="_blank" rel="noopener noreferrer" className="block relative group">
                  <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Youtube className="w-20 h-20 text-red-600 group-hover:scale-110 transition-transform" />
                </div>
                </a>
                <p className="text-muted-foreground">
                  Learn the essential concepts, terminology, and strategies to start your trading journey with confidence.
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={( ) => window.open('https://youtu.be/cq9TnguBkH8?feature=shared', '_blank' )}
                >
                  Watch on YouTube
                </Button>
              </CardContent>
            </Card>

            {/* Technical Analysis Course (Shows Beginners Video) */}
            <Card className="hover-lift border-2 border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Technical Analysis Course</CardTitle>
                <CardDescription className="text-base">
                  Advanced chart reading and analysis techniques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="https://youtu.be/SLr3zwyzDno?feature=shared" target="_blank" rel="noopener noreferrer" className="block relative group">
                  <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Youtube className="w-20 h-20 text-red-600 group-hover:scale-110 transition-transform" />
                </div>
                </a>
                <p className="text-muted-foreground">
                  Dive deep into technical indicators, chart patterns, and advanced strategies to make informed trading decisions.
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={( ) => window.open('https://youtu.be/SLr3zwyzDno?feature=shared', '_blank' )}
                >
                  Watch on YouTube
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow us on social media for daily trading tips, market updates, and community highlights.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {/* Instagram */}
            <Button
              size="lg"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-lg hover-lift"
              onClick={() => window.open('https://www.instagram.com/way_trades?igsh=MXZoOWg4dGF6ZG5vYg%3D%3D&utm_source=qr', '_blank' )}
            >
              <Instagram className="w-6 h-6" />
              Instagram
            </Button>
            
            {/* YouTube */}
            <Button
              size="lg"
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg hover-lift"
              onClick={() => window.open('https://www.youtube.com/@waytrades', '_blank' )}
            >
              <Youtube className="w-6 h-6" />
              YouTube
            </Button>
            
            {/* TikTok */}
            <Button
              size="lg"
              className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-semibold px-8 py-6 text-lg hover-lift"
              onClick={() => window.open('https://www.tiktok.com/@way_trades', '_blank' )}
            >
              <Music2 className="w-6 h-6" />
              TikTok
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2026 Way Trades. All rights reserved.
          </p>
          <p className="text-muted-foreground mt-2">
            Join The Way to Trading Success
          </p>
          <p className="text-xs text-muted-foreground mt-4 max-w-3xl mx-auto">
            Trading involves risk. Way Trades is for educational purposes only and is not financial advice.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
