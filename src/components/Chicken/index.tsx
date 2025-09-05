import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { opacity, slideUp } from "./animation";
import styles from "./style.module.scss";
import Button from "../Button/Button";
import OrderPopover from "../popover/OrderPopover/OrderPopover";

export default function ChickenSection() {
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
    "From whole birds to convenient cuts, our fresh chicken selection offers something for every family meal. Choose from a variety of options, including marinated chicken, all raised with care and delivered fresh daily. Make mealtime easy and delicious with PCS Butchery chicken in Ingleburn, NSW.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section
      id="chicken"
      ref={description}
      className={`${styles.description} py-10`}
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="brand" content="PCS Butchery" />
      <meta itemProp="name" content="Fresh Chicken - PCS Butchery" />
      <meta
        itemProp="description"
        content="Buy fresh chicken online or in-store at PCS Butchery, Ingleburn NSW. We offer whole chicken, marinated chicken, and convenient cuts. Halal and Nepali butchery near you."
      />
      <meta itemProp="category" content="Chicken, Fresh Meat, Butchery" />

      <div className={styles.body}>
        <header>
          <h2 className="lg:text-[60px] text-[35px] font-bold mb-4">
            Fresh <span className="text-[#f80710]">Chicken</span> in Ingleburn
          </h2>
        </header>

        <article>
          <p className="text-[18px] leading-relaxed text-gray-800 mb-4">
            {phrase.split(" ").map((word, index) => (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>
        </article>

        <div className="mt-4 w-fit" onClick={show_location_modal}>
          <Button data={{ name: "Order Fresh Chicken" }} />
        </div>

        <OrderPopover
          isModalOpen={is_order}
          handleOk={handle_order_ok}
          handleCancel={handle_order_cancel}
          orderFor="Chicken"
        >
          Chicken
        </OrderPopover>

        <motion.figure
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="mt-6"
        >
          <Image
            src={"/images/chicken.png"}
            alt="Fresh chicken cuts and whole chicken available at PCS Butchery, Ingleburn NSW"
            width={600}
            height={400}
            className="rounded-[8px] shadow-md"
            itemProp="image"
          />
          <figcaption className="text-sm text-gray-600 mt-2">
            Fresh chicken cuts and whole birds at PCS Butchery, Ingleburn NSW.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
