"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Head from "next/head"; // ✅ SEO Support
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
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>PCS Butchery Ingleburn | Nepali & Halal Butcher Near Me</title>
        <meta
          name="description"
          content="PCS Butchery in Ingleburn NSW offers fresh halal meat, Nepali butchery products, chicken, mutton, goat, lamb, duck, fish, quail, local chicken, vegetables, and spices. Your trusted local butcher near me."
        />
        <meta
          name="keywords"
          content="Nepali butchery Ingleburn, butcher near me, halal butcher Ingleburn, PCS Butchery, fresh meat Ingleburn, goat meat Ingleburn, chicken Ingleburn, mutton Ingleburn, lamb, fish, duck, spices"
        />
        <meta name="author" content="PCS Butchery" />

        {/* ✅ Open Graph (Social Media) */}
        <meta property="og:title" content="PCS Butchery Ingleburn | Nepali Butchery & Fresh Halal Meat" />
        <meta
          property="og:description"
          content="Visit PCS Butchery in Ingleburn NSW for fresh halal meat, chicken, goat, mutton, lamb, fish, duck, and Nepali butchery products."
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://www.pcsbutchery.com.au" />
        <meta property="og:image" content="https://www.pcsbutchery.com.au/images/shop-front.jpg" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PCS Butchery Ingleburn | Butcher Near Me | Nepali Butchery" />
        <meta
          name="twitter:description"
          content="Fresh halal meat, Nepali butchery items, spices, and vegetables at PCS Butchery Ingleburn."
        />
        <meta name="twitter:image" content="https://www.pcsbutchery.com.au/images/shop-front.jpg" />

        {/* ✅ Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ButcherShop",
              "name": "PCS Butchery",
              "image": "https://www.pcsbutchery.com.au/images/shop-front.jpg",
              "@id": "https://www.pcsbutchery.com.au",
              "url": "https://www.pcsbutchery.com.au",
              "telephone": "+61-4XX-XXX-XXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop 4/14 Oxford Rd",
                "addressLocality": "Ingleburn",
                "addressRegion": "NSW",
                "postalCode": "2565",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -34.00049,
                "longitude": 150.86682
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "08:00",
                  "closes": "20:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/pcsbutchery",
                "https://www.instagram.com/pcsbutchery"
              ]
            }),
          }}
        />
      </Head>

      {/* ✅ Main Website Content */}
      <main className={styles.main}>
        <AnimatePresence mode="wait"></AnimatePresence>
        <Landing />
        <Goat />
        <Mutton />
        <Chicken />
        <Localchicken />
        <Buff />
        <Duck />
        <Lamb />
        <Fish />
        <Quail />
        <Spices />
        <Vegetable />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
