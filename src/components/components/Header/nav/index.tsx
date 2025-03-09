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
    title: "Chicken",
    active: "chicken",
  },
  {
    title: "Pork",
    active: "pork",
  },
  {
    title: "Special Chyangra",
    active: "chyangra",
  },
  {
    title: "Mutton and Goat",
    active: "mutton",
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
