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
    "Lamb, the renowned Savor the exceptional tenderness and flavor of our carefully selected lamb. Whether you're planning a traditional roast or a delicious grill, our lamb cuts are sure to impress. Experience the difference in quality and taste with PCS Butchery lamb. goat of Nepal, yields a delicacy prized for its exquisite quality and unique flavor profile.Revered for its tender texture and rich taste, Chyangra meat holds a cherished place in Nepali gastronomy and cultural traditions. This treasured delicacy, sourced from Nepal's pristine landscapes, is sought-after not only domestically but also in discerning markets worldwide, including Australia, where its exceptional quality continues to be celebrated and enjoyed.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <>
      <div id="lamb" ref={description} className={styles.description}>
        <div className={styles.body}>
          <p>
            <div className="lg:text-[60px] text-[35px] font-medium mb-4">
              Special <span className="text-[#f80710]"> Lamb</span>
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
              orderFor="lamb"
            >
              Lamb
            </OrderPopover>
          </p>
          <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
            <Image
              src={"/images/lamb.jpg"}
              alt="image"
              width={600}
              height={400}
              className="rounded-[8px]"
            />
          </motion.p>
        </div>
      </div>
    </>
  );
}
