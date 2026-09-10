"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const slides = [
  {
    image: "/photos/carousel-1.jpg",
    eyebrow: "Deliverance Church Utawala",
    title: <>Equipping mankind for the <em>mission of God.</em></>,
    lede: "An Apostolic church committed to transforming and empowering mankind in Africa and beyond.",
    primary: { href: "/plan-your-visit", label: "Plan Your Visit" },
    secondary: { href: "/about", label: "Discover Who We Are" },
  },
  {
    image: "/photos/carousel-2.jpg",
    eyebrow: "A place to belong",
    title: <>Grow in faith. <em>Find your place.</em></>,
    lede: "Connect with a ministry, grow in community and use your gifts to serve God and people.",
    primary: { href: "/ministries", label: "Explore Ministries" },
    secondary: { href: "/about", label: "About Our Church" },
  },
  {
    image: "/photos/carousel-3.jpg",
    eyebrow: "Join us this Sunday",
    title: <>Come as you are. <em>Worship with us.</em></>,
    lede: "We are located 300m past ACK St. Monica, Utawala, Nairobi. Our 1st Sunday service starts at 6:30 AM and the 2nd service at 9:30 AM. Welcome!",
    primary: { href: "/plan-your-visit", label: "Plan Your Visit" },
    secondary: { href: "/services", label: "View Services" },
  },
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-carousel" aria-roledescription="carousel" aria-label="Church highlights">
      {slides.map((slide, index) => (
        <article
          className={`hero-slide ${index === activeSlide ? "hero-slide--active" : ""}`}
          key={slide.image}
          aria-hidden={index !== activeSlide}
        >
          <div
            className="hero-slide__image"
            style={{ "--hero-image": `url(${slide.image})` } as CSSProperties}
          />
          <div className="hero-slide__overlay" />
          <div className="container">
            <div className="hero-inner">
              <span className="eyebrow">{slide.eyebrow}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-lede">{slide.lede}</p>
              <div className="hero-actions">
                <Link className="btn btn--gold" href={slide.primary.href} tabIndex={index === activeSlide ? 0 : -1}>
                  {slide.primary.label}
                </Link>
                <Link className="btn btn--light" href={slide.secondary.href} tabIndex={index === activeSlide ? 0 : -1}>
                  {slide.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
      <div className="hero-carousel__controls container">
        <div className="hero-carousel__dots" role="tablist" aria-label="Choose a church highlight">
          {slides.map((slide, index) => (
            <button
              className={`hero-carousel__dot ${index === activeSlide ? "hero-carousel__dot--active" : ""}`}
              type="button"
              key={slide.image}
              role="tab"
              aria-selected={index === activeSlide}
              aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
