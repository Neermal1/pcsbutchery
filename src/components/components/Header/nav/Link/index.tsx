import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { scale, slide } from "../../animation";
import styles from "./style.module.scss";

export default function Index({ data, isActive, setSelectedIndicator }: any) {
  const { title, index, active } = data;

  const [sublink, setSubLink] = useState("");

  useEffect(() => {
    if (sublink) {
      const element = document.getElementById(sublink);
      if (element) {
        let offset;
        if (window.innerWidth <= 768) {
          offset = element.offsetTop - 360;
        } else {
          offset = element.offsetTop - 200;
        }
        window.scrollTo({ top: offset, behavior: "smooth" });
        setSubLink(" ");
      }
    }
  }, [sublink]);

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        // setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <a
        style={{
          fontSize: "20px",
        }}
        onClick={() => {
          setSubLink(active);
        }}
        className="hover:cursor-pointer"
      >
        {title}
      </a>
    </motion.div>
  );
}
