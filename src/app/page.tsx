"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Contact from "../components/ContactForm";
import Chicken from "../components/Chicken";
import Footer from "../components/Footer";
import Mutton from "../components/Mutton";
import Landing from "../components/Landing";
import Buff from "../components/Buff";
import Duck from "../components/Duck";
import Fish from "../components/Fish";
import Lamb from "../components/Lamb";
import Spices from "../components/Spices";
import Vegetable from "../components/Vegetable";
import Goat from "../components/Goat";
import Localchicken from "../components/Localchicken";
import Quail from "../components/Quail";
import styles from "./page.module.scss";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait"></AnimatePresence>
      <Landing />
      <Goat/>
      <Mutton />
      <Chicken/>
      <Localchicken/>
      <Buff/>
      <Duck />
      <Lamb />
      <Fish />
      <Quail/>
     < Spices/>
     <Vegetable/>
      <Contact />
      <Footer />
    </main>
  );
}
