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
    "Mutton and goat meat from Nepal, celebrated for their exquisite quality and robust flavor, are not only cherished staples in Nepali cuisine but also prized exports to discerning markets like Australia. Raised amidst Nepal's diverse landscapes using traditional farming methods, these meats offer unmatched tenderness and succulence, reflecting the country's rich culinary heritage";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div id="mutton" ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          <div className="lg:text-[60px] text-[35px] font-medium mb-4">
            Mutton <span className="text-[#f80710]">& Goat</span>
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
          <div
            style={{
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "20px",
                  color: "var(--accent-color)",
                }}
              >
                <div className="mb-2">Price:</div>{" "}
              </div>
              <span>Head : 300 per kg</span>,{" "}
              <span>Leg Piece : 300 per kg</span>, <span>Leg : 300 per kg</span>
              ,
            </div>
          </div>
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
            src={"/images/goat.png"}
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
