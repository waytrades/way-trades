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
              Master the art of trading with expert guidance, comprehensive courses, and a supportive community. Whether you're a beginner or a struggling intermediate, we've got you covered.
            </p>
          </div>
        </div>
      </header>

      {/* Discord Servers Section */}
      <section className="py-8 md:py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Join Our Community
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connect with fellow traders, get real-time market insights, and access exclusive trading resources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Discord */}
            <Card className="hover-lift border-2 border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Free Access
                </CardTitle>
                <CardDescription className="text-base">
                  Start your trading journey with our free community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Basic market analysis and insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Community discussions and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Educational resources for beginners</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => window.open('https://whop.com/waytrades/free-access-c6/?utm_source=store_page&funnelId=product_7b3b2e38-8bc7-402b-9afa-d939c94b9673', '_blank')}
                >
                  Join Free Community
                </Button>
              </CardContent>
            </Card>

            {/* VIP Discord */}
            <Card className="hover-lift border-2 border-primary/50 hover:border-primary transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                VIP
              </div>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  VIP Access
                </CardTitle>
                <CardDescription className="text-base">
                  Unlock premium features and exclusive content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Advanced trading signals and strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Direct access to expert traders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Exclusive market analysis and reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Priority support and personalized guidance</span>
                  </li>
                </ul>
                <Button 
                  className="w-full gradient-gold hover:opacity-90 text-background font-semibold"
                  onClick={() => window.open('https://whop.com/waytrades/vip-access-60-1cb2/?utm_source=store_page&funnelId=product_7b3b2e38-8bc7-402b-9afa-d939c94b9673', '_blank')}
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
              Educational Courses
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive video courses designed to take you from beginner to advanced trader.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Beginners Course */}
            <Card className="hover-lift border-2 border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Beginners Course</CardTitle>
                <CardDescription className="text-base">
                  Master the fundamentals of trading
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/SLr3zwyzDno"
                    title="Beginners Course"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-muted-foreground">
                  Learn the essential concepts, terminology, and strategies to start your trading journey with confidence.
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://youtu.be/SLr3zwyzDno?feature=shared', '_blank')}
                >
                  Watch on YouTube
                </Button>
              </CardContent>
            </Card>

            {/* Technical Analysis Course */}
            <Card className="hover-lift border-2 border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Technical Analysis Course</CardTitle>
                <CardDescription className="text-base">
                  Advanced chart reading and analysis techniques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/cq9TnguBkH8"
                    title="Technical Analysis Course"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-muted-foreground">
                  Dive deep into technical indicators, chart patterns, and advanced strategies to make informed trading decisions.
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://youtu.be/cq9TnguBkH8?feature=shared', '_blank')}
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
              onClick={() => window.open('https://www.instagram.com/way_trades?igsh=MXZoOWg4dGF6ZG5vYg%3D%3D&utm_source=qr', '_blank')}
            >
              <Instagram className="w-6 h-6" />
              Instagram
            </Button>

            {/* YouTube */}
            <Button
              size="lg"
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg hover-lift"
              onClick={() => window.open('https://www.youtube.com/@waytrades', '_blank')}
            >
              <Youtube className="w-6 h-6" />
              YouTube
            </Button>

            {/* TikTok */}
            <Button
              size="lg"
              className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6 text-lg hover-lift"
              onClick={() => window.open('https://www.tiktok.com/@way_trades?_t=ZT-90YcAqRFDWB&_r=1', '_blank')}
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
            © 2025 Way Trades. All rights reserved.
          </p>
          <p className="text-muted-foreground mt-2">
            Join The Way to Trading Success
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

