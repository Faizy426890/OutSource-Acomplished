import { useRef, useEffect, useState } from "react"
import { ScrollParallax } from "./ScrollParallax"
import Section from "./Section"
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero"
import { heroIcons } from "../constants"
import Notification from "./Notification"
import CompanyLogos from "./CompanyLogos"
import ModernButton from "./ModernButton"
import { Play, ArrowRight, Zap, Globe, Users, TrendingUp } from "lucide-react"

const fadeIn = {
  animation: "fadeIn 1.2s ease-out forwards",
}

const slideUp = {
  animation: "slideUp 1s ease-out forwards",
}

const styles = {
  keyframes: `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }
    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
      }
      50% {
        box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
      }
    }
  `,
}

const Hero = () => {
  const parallaxRef = useRef(null)
  const [isVisible, setIsVisible] = useState({
    text: false,
    buttons: false,
    cards: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.dataset.section]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-section]")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <Section
      className="pt-[8rem] -mt-[5.25rem] relative min-h-screen flex items-center"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <style>{styles.keyframes}</style>

      {/* Background with enhanced overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-blue-900/95" />
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10" ref={parallaxRef}>
        {/* Main Hero Content */}
        <div className="relative z-1 max-w-6xl mx-auto text-center mb-16">
          {/* Glassmorphism badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white/90 transition-all duration-700 ${isVisible.text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-section="text"
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span>Powering 1000+ businesses worldwide</span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight transition-all duration-1000 ${isVisible.text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            data-section="text"
          >
            Outsource Your Success with{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Smart Business
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-purple-400/20 rounded-lg blur-xl opacity-30"></div>
            </span>{' '}
            Solutions
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-slate-200 leading-relaxed transition-all duration-1000 delay-300 ${isVisible.text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-section="text"
          >
            Partner with us to achieve higher productivity, improved customer experiences, and faster business expansion through cutting-edge solutions.
          </p>

          {/* Modern Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000 delay-500 ${isVisible.buttons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-section="buttons"
          >
            <ModernButton
              variant="primary"
              size="large"
              icon={<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
              onClick={() => console.log('Get Started clicked')}
            >
              Get Started Now
            </ModernButton>
            
            <ModernButton
              variant="secondary"
              size="large"
              icon={<Play className="w-5 h-5 mr-2" />}
              onClick={() => console.log('Learn More clicked')}
            >
              Learn More
            </ModernButton>
          </div>
        </div>

        {/* Feature Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-700 ${isVisible.cards ? 'opacity-100 translate-y-0' : 'opacity-0 '}`}
          data-section="cards"
        >
          {[
            {
              icon: <Globe className="w-8 h-8 text-blue-400" />,
              title: "Global Reach",
              description: "Expand your business worldwide with our international expertise and local insights.",
            },
            {
              icon: <Users className="w-8 h-8 text-cyan-400" />,
              title: "Expert Teams",
              description: "Access skilled professionals who understand your industry and business goals.",
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
              title: "Proven Results",
              description: "Join thousands of companies that have accelerated growth with our solutions.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-72 flex flex-col hover:bg-white/10 transition-all duration-500 hover:border-white/20  hover:shadow-2xl hover:shadow-blue-500/10"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: isVisible.cards ? 'fadeIn 0.8s ease-out forwards' : 'none'
              }}
            >
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon container with enhanced styling */}
              <div className="relative mb-6 p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl inline-block group-hover:scale-110  transition-all duration-500 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {card.icon}
              </div>
              
              {/* Content with better spacing */}
              <div className="relative flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-base flex-1 group-hover:text-slate-200 transition-colors duration-300">
                  {card.description}
                </p>
              </div>
              
              {/* Subtle bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-cyan-500/30 to-purple-500/0 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Floating Elements */}
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <ScrollParallax isAbsolutelyPositioned>
            <div className="hidden absolute left-8 top-1/4 xl:block">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300"
                   style={{ animation: 'float 6s ease-in-out infinite' }}>
                <div className="flex items-center gap-3">
                  {heroIcons.slice(0, 3).map((icon, index) => (
                    <div key={index} className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <img src={icon || "/placeholder.svg"} width={20} height={20} alt={`icon-${index}`} className="opacity-80" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollParallax>
          
          <ScrollParallax isAbsolutelyPositioned>
            <div className="hidden absolute right-8 top-1/3 xl:block">
              <Notification
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl hover:bg-white/15 transition-all duration-300"
                title="🚀 Business Growth Accelerated"
                style={{ animation: 'float 6s ease-in-out infinite delay-2s' }}
              />
            </div>
          </ScrollParallax>
        </div>

        {/* <CompanyLogos className="relative display-none  z-10 mt-20" /> */}
      </div>

      <BackgroundCircles />
      <BottomLine />
      <Gradient />
    </Section>
  )
}

export default Hero