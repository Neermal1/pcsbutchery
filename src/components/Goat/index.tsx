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

"At PCS Butchery, our Special Goat selection embodies the essence of premium quality and unparalleled freshness. Sourced from trusted local farms, each cut is expertly prepared to preserve its natural tenderness and rich, earthy flavor. Perfect for slow-cooked curries, grilled feasts, or hearty stews, our goat meat promises a melt-in-your-mouth experience that elevates every dish. Indulge in the succulent taste and savor the difference that comes from our dedication to quality and tradition. Choose PCS Butchery for a gourmet experience that redefines your culinary expectation";  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div id="goat" ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          <div className="lg:text-[60px] text-[35px] font-medium mb-4">
            Special <span className="text-[#f80710]">Goat</span>
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
            orderFor="mutton and goat"
          >
            Mutton And Goat
          </OrderPopover>
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          <Image
            src={"/images/khashi.png"}
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
