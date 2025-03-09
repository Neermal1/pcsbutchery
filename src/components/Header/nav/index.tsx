import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../animation";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";

const navItems = [
  {
    title: "Goat",
    active: "goat",
  },
  {
    title: "Mutton",
    active: "mutton",
  },
  {
    title: "Chicken",
    active: "chicken",
  },
  {
    title: "Localchicken",
    active: "localchicken",
  },
  {
    title: "Buff",
    active: "buff",
  },
  {
    title: "Duck",
    active: "duck",
  },
  {
    title: "Lamb",
    active: "lamb",
  },
  {
    title: "Fish",
    active: "fish",
  },
  {
    title: "Quail",
    active: "quail",
  },
  {
    title: "Spices",
    active: "spices",
  },
  {
    title: "Vegetable",
    active: "vegetable",
  },
  {
    title: "Contact Us",
    active: "contact-us",
  },
];


export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                active={data?.active}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
