"use client";
import React, { useEffect, useState } from "react";
import ContentHero from "./ContentHero";
import styles from "./Hero.module.css";

export const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Determine the scroll direction
      if (scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Update the last scroll position
      setLastScrollY(scrollY);

      // Handle opacity based on scroll position and direction
      if (scrollDirection === "down" && scrollY > 400) {
        setOpacity(0);
      } else if (scrollDirection === "up") {
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollDirection]);

  return (
    <header className={styles.hero}>
      <div style={{ opacity, transition: "opacity 0.5s ease-out" }}>
        <ContentHero />
      </div>
    </header>
  );
};

export default Hero;
