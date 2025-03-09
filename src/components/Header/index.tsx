"use client";  
import { usePathname } from "next/navigation";  
import { useEffect, useLayoutEffect, useRef, useState } from "react";  
import { AnimatePresence } from "framer-motion";  
import gsap from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";  
import Magnetic from "../../common/Magnetic";
import Rounded from "../../common/RoundedButton";  
import Nav from "./nav";  
import styles from "./style.module.scss";  
import { CiMenuFries } from "react-icons/ci";  
import { Drawer } from "antd";  

export default function Index() {  
  const header = useRef(null);  
  const [isActive, setIsActive] = useState(false);  
  const pathname = usePathname();  
  const button = useRef(null);  

  const [sublink, setSubLink] = useState("");  

  useEffect(() => {  
    if (isActive) setIsActive(false);  
  }, [pathname]);  

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
        setSubLink(""); // Reset sublink after scrolling  
      }  
    }  
  }, [sublink]);  

  useLayoutEffect(() => {  
    gsap.registerPlugin(ScrollTrigger);  
    gsap.to(button.current, {  
      scrollTrigger: {  
        trigger: document.documentElement,  
        start: 0,  
        end: window.innerHeight,  
        onLeave: () => {  
          gsap.to(button.current, {  
            scale: 1,  
            duration: 0.25,  
            ease: "power1.out",  
          });  
        },  
        onEnterBack: () => {  
          gsap.to(button.current, {  
            scale: 0,  
            duration: 0.25,  
            ease: "power1.out",  
          });  
        },  
      },  
    });  
  }, []);  

  const [open, setOpen] = useState(false);  

  const showDrawer = () => {  
    setOpen(true);  
  };  

  const onClose = () => {  
    setOpen(false);  
  };  

  const navItems = [  
    { label: "Goat", id: "goat" }, 
    { label: "Mutton", id: "mutton" },  
    { label: "Chicken", id: "chicken" },  
    { label: "Localchicken", id: "localchicken" },
    { label: "Buff", id: "buff" },  
    { label: "Duck", id: "duck" },  
    { label: "Lamb", id: "lamb" },  
    { label: "Fish", id: "fish" },  
    { label: "Quail", id: "quail" },  
    { label: "Spices", id: "spices" },  
    { label: "Vegetable", id: "vegetable" },  
    { label: "Contact Us", id: "contact-us" },  
  ];  

  return (  
    <>  
      <div ref={header} className={styles.header}>  
        <div className={styles.logo}>  
          <img  
            src="/images/logo.jpg"  
            alt="loading"  
            className="h-[60px] object-contain"  
          />  
        </div>  
        <div className={styles.nav}>  
          {navItems.map((item) => (  
            <Magnetic key={item.label}>  
              <div className={styles.el}>  
                <a  
                  onClick={() => {  
                    setSubLink(item.id);  
                  }}  
                >  
                  {item.label}  
                </a>  
                <div className={styles.indicator}></div>  
              </div>  
            </Magnetic>  
          ))}  
        </div>  
        <div className="lg:hidden" onClick={showDrawer}>  
          <CiMenuFries />  
        </div>  
        <Drawer onClose={onClose} open={open} className="text-black">  
          {navItems.map((item) => (  
            <div className="mb-2" key={item.label}>  
              <a  
                onClick={() => {  
                  setSubLink(item.id);  
                }}  
              >  
                {item.label}  
              </a>  
            </div>  
          ))}  
        </Drawer>  
      </div>  
      <div ref={button} className={styles.headerButtonContainer}>  
        <Rounded  
          onClick={() => {  
            setIsActive(!isActive);  
          }}  
          className={styles.button}  
        >  
          <div  
            className={`${styles.burger} ${  
              isActive ? styles.burgerActive : ""  
            }`}  
          ></div>  
        </Rounded>  
      </div>  
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>  
    </>  
  );  
}  