"use client"

import { curve } from "../assets"
import Section from "./Section"
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero"
import { heroIcons } from "../constants"
import { ScrollParallax } from "react-just-parallax"
import { useRef, useEffect, useState } from "react"
import Notification from "./Notification"
import CompanyLogos from "./CompanyLogos"

const fadeIn = {
  animation: "fadeIn 1s ease-out",
}

const fadeOut = {
  animation: "fadeOut 1s ease-out",
}

const styles = {
  keyframes: `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `,
}

const Hero = () => {
  const parallaxRef = useRef(null)
  const [isVisible, setIsVisible] = useState({
    text: false,
    notification: false,
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
      { threshold: 0.2 },
    )

    const elements = document.querySelectorAll("[data-section]")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] relative"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <style>{styles.keyframes}</style>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/diml90c1y/image/upload/v1756798404/freepik__a-professional-hero-section-image-for-a-bpo-compan__40634_a6ao4w.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="container relative z-10" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1
            className={`h1 mb-6 ${isVisible.text ? "fadeIn" : "fadeOut"}`}
            data-section="text"
            style={isVisible.text ? fadeIn : fadeOut}
          >
            Outsource Your Success with Smart &nbsp; {` `}
            <span className="inline-block relative">
              Business Solutions{" "}
              <img
                src={curve || "/placeholder.svg"}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p
            className={`body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 ${isVisible.text ? "fadeIn" : "fadeOut"}`}
            data-section="text"
            style={isVisible.text ? fadeIn : fadeOut}
          >
            Partner with us to achieve higher productivity, improved customer experiences, and faster business
            expansion.
          </p>
          {/* <Button white>
            Scroll Down
          </Button> */}
        </div>

        {/* <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src="https://res.cloudinary.com/diml90c1y/image/upload/v1756798404/freepik__a-professional-hero-section-image-for-a-bpo-compan__40634_a6ao4w.jpg"
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon || "/placeholder.svg"} width={24} height={25} alt={`icon-${index}`} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className={`hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex ${isVisible.notification ? "fadeIn" : "fadeOut"}`}
                    data-section="notification"
                    title="Code generation"
                    style={isVisible.notification ? fadeIn : fadeOut}
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>

          <BackgroundCircles />
        </div> */} 
              <div className="   max-w-[23rem] mx-auto md:max-w-5xl xl:mb-32 overflow-hidden">
           <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute left-[5.5rem] bottom-[7.5rem] px-2 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon || "/placeholder.svg"} width={24} height={25} alt={`icon-${index}`} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className={`hidden absolute right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex ${isVisible.notification ? "fadeIn" : "fadeOut"}`}
                    data-section="notification"
                    title="Code generation"
                    style={isVisible.notification ? fadeIn : fadeOut}
                  />
                </ScrollParallax>
        </div>

        <CompanyLogos className="hidden relative z-10 mt-36 lg:block" />
      </div>

      <BottomLine />
    </Section>
  )
}

export default Hero
