"use client";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./components/project";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import chicken from "../../../public/images/chicken.jpg";
import { Tooltip } from "antd";

const projects = [
  { title: "Goat", src: "goat.jpg", color: "#A17C6B" },
  { title: "Mutton", src: "mutton.jpg", color: "#706D63" },
  { title: "Chicken", src: "chicken.jpg", color: "#FFD700" },
  { title: "Localchicken", src: "localchicken.jpg", color: "#F5CBA7" },
  { title: "Buff", src: "buff.jpg", color: "#8B0000" },
  { title: "Duck", src: "duck.jpg", color: "#A0522D" },
  { title: "Lamb", src: "lamb.jpg", color: "#8E8D8A" },
  { title: "Fish", src: "fish.jpg", color: "#5F9EA0" },
  { title: "Quail", src: "quail.jpg", color: "#D2B48C" },
  { title: "Spices", src: "spices.jpg", color: "#D2691E" },
  { title: "Vegetable", src: "vegetable.jpg", color: "#228B22" },
  { title: "Contact Us", src: "contact-us.jpg", color: "#4682B4" },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer: any = useRef(null);
  let yMoveContainer: any = useRef(null);
  let xMoveCursor: any = useRef(null);
  let yMoveCursor: any = useRef(null);
  let xMoveCursorLabel: any = useRef(null);
  let yMoveCursorLabel: any = useRef(null);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x: any, y: any) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = ({ active, index, x, y }: any) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main className={styles.projects}>
      <div className="lg:text-[60px] font-medium mb-20">
        A Showcase of{" "}
        <span style={{ color: "#f80710" }}>{"Shop's"} Finest Meats</span>
      </div>

      <div className={styles.body}>
        {projects.map((project, index) => (
          <Project
            index={index}
            title={project.title}
            manageModal={manageModal}
            key={index}
            image={project?.src}
          />
        ))}
      </div>

      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {projects.map((project, index) => (
              <div
                className={styles.modal}
                style={{ backgroundColor: project.color }}
                key={`modal_${index}`}
              >
                <Image src={chicken} width={300} height={0} alt="image" />
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </main>
  );
}
