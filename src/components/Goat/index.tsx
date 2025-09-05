import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { opacity, slideUp } from "./animation";
import styles from "./style.module.scss";
import Button from "../Button/Button";
import OrderPopover from "../popover/OrderPopover/OrderPopover";

export default function GoatSection() {
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
    "Tender and full of rich flavor, our fresh goat meat is a staple in Nepali, Indian, and Middle Eastern cuisines. At PCS Butchery in Ingleburn, NSW, we provide high-quality goat cuts perfect for curries, slow cooking, or grilling. Our Halal-certified goat is sourced with care to bring authentic taste and tradition to your table.";

  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section
      id="goat"
      ref={description}
      className={`${styles.description} py-10`}
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Schema metadata for Goat */}
      <meta itemProp="brand" content="PCS Butchery" />
      <meta itemProp="name" content="Fresh Goat Meat - PCS Butchery" />
      <meta
        itemProp="description"
        content="Order fresh goat meat online or in-store at PCS Butchery, Ingleburn NSW. Halal, Nepali butchery near you with tender cuts perfect for curries, grilling, and slow cooking."
      />
      <meta itemProp="category" content="Goat, Fresh Meat, Halal Butchery" />

      <div className={styles.body}>
        <header>
          <h2 className="lg:text-[60px] text-[35px] font-bold mb-4">
            Fresh <span className="text-[#f80710]">Goat</span> Meat in Ingleburn
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

        {/* CTA */}
        <div className="mt-4 w-fit" onClick={show_location_modal}>
          <Button data={{ name: "Order Fresh Goat Meat" }} />
        </div>

        {/* Order Modal */}
        <OrderPopover
          isModalOpen={is_order}
          handleOk={handle_order_ok}
          handleCancel={handle_order_cancel}
          orderFor="Goat"
        >
          Goat
        </OrderPopover>

        {/* Goat Image */}
        <motion.figure
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="mt-6"
        >
          <Image
            src={"/images/goat.png"}
            alt="Halal fresh goat meat available at PCS Butchery, Ingleburn NSW"
            width={600}
            height={400}
            className="rounded-[8px] shadow-md"
            itemProp="image"
          />
          <figcaption className="text-sm text-gray-600 mt-2">
            Halal-certified fresh goat cuts at PCS Butchery, Shop 4/14 Oxford
            Rd, Ingleburn NSW.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
