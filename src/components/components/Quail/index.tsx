import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { opacity, slideUp } from "./animation";
import styles from "./style.module.scss";
import Button from "../Button/Button";
import OrderPopover from "../popover/OrderPopover/OrderPopover";

export default function Index() {
  const [is_order, set_is_order] = useState(false);

  const handle_order_ok = async () => {
    set_is_order(false);
  };
  const handle_order_cancel = () => {
    set_is_order(false);
  };
  const show_location_modal = () => {
    set_is_order(true);
  };

  const phrase =
  "At PCS Butchery, we understand that the heart of authentic Nepalese and Indian cuisine lies in the vibrant blend of spices. That's why we offer a wide array of fresh, high-quality spices to elevate your dishes and transport you to the heart of South Asia.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div id="quail" ref={description} className={styles.description}>
      <div className={styles.body}>
        <p className="">
          <div className="lg:text-[60px] text-[35px] font-medium mb-4">
          Quail Meat  <span className="text-[#f80710]">And Eggs</span>
          </div>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                  className="text-[18px]"
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
         
          <div className="mt-4 w-fit" onClick={show_location_modal}>
            <Button
              data={{
                name: "Order Now",
              }}
            />
          </div>
          <OrderPopover
            isModalOpen={is_order}
            handleOk={handle_order_ok}
            handleCancel={handle_order_cancel}
            orderFor="Fish"
          >
            Quail
          </OrderPopover>
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          <Image
            src={"/images/quail.jpg"}
            alt="image"
            width={600}
            height={400}
            className="rounded-[8px]"
          />
        </motion.p>
      </div>
    </div>
  );
}
