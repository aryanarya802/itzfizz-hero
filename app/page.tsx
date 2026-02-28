"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.from(".headline span", {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".stat", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5,
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: scrollY * 0.4,
          rotation: scrollY * 0.02,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = "WELCOME ITZFIZZ".split("");

  return (
    <main className="min-h-[200vh] bg-black text-white">
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        
        <h1 className="headline text-4xl md:text-6xl font-bold tracking-[0.4em]">
          {text.map((char, i) => (
            <span key={i} className="inline-block">
              {char}
            </span>
          ))}
        </h1>

        <div className="flex gap-10 mt-10">
          <div className="stat text-center">
            <h2 className="text-3xl font-bold">95%</h2>
            <p className="text-sm text-gray-400">Client Satisfaction</p>
          </div>
          <div className="stat text-center">
            <h2 className="text-3xl font-bold">120+</h2>
            <p className="text-sm text-gray-400">Projects Delivered</p>
          </div>
          <div className="stat text-center">
            <h2 className="text-3xl font-bold">4.9★</h2>
            <p className="text-sm text-gray-400">Average Rating</p>
          </div>
        </div>

        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="car"
          className="absolute bottom-10 w-[420px] rounded-2xl shadow-2xl will-change-transform"
        />
      </section>
    </main>
  );
}