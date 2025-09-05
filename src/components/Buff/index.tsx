import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { opacity, slideUp } from "./animation";
import styles from "./style.module.scss";
import Button from "../Button/Button";
import OrderPopover from "../popover/OrderPopover/OrderPopover";

export default function BuffSection() {
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
    "Looking for a lean and protein-rich alternative? Our buffalo meat (buff) offers a distinct flavor and is a great choice for curries, stews, and grilling. A staple in many cuisines, our buff is carefully selected for quality and freshness. Bringing the authentic taste of the Nepali meat market to kitchens in Australia. We serve what we eat and deliver the authentic flavors of your homeland.";

  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section
      id="buff"
      ref={description}
      className={styles.description}
      aria-labelledby="buff-meat-title"
    >
      <div className={styles.body}>
        {/* ✅ SEO Heading */}
        <h2
          id="buff-meat-title"
          className="lg:text-[60px] text-[35px] font-medium mb-4"
        >
          Buff <span className="text-[#f80710]">Meat</span> – Fresh Nepali Butchery in Ingleburn
        </h2>

        {/* ✅ SEO Text */}
        <article>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  className="text-[18px]"
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </article>

        {/* ✅ Call-to-action */}
        <div className="mt-4 w-fit" onClick={show_location_modal}>
          <Button data={{ name: "Order Fresh Buff Meat Now" }} />
        </div>

        {/* ✅ Modal */}
        <OrderPopover
          isModalOpen={is_order}
          handleOk={handle_order_ok}
          handleCancel={handle_order_cancel}
          orderFor="Buff Meat"
        >
          Order Fresh Buff Meat
        </OrderPopover>

        {/* ✅ Image with SEO alt text */}
        <motion.figure
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="mt-6"
        >
          <Image
            src={"/images/buff.png.png"}
            alt="Fresh buffalo meat cuts from PCS Butchery Ingleburn NSW – perfect for Nepali curries, grilling, and stews"
            width={600}
            height={400}
            className="rounded-[8px]"
            priority
          />
          <figcaption className="sr-only">
            Fresh buffalo meat (buff) available at PCS Butchery Ingleburn
          </figcaption>
        </motion.figure>
      </div>

      {/* ✅ Product Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Buffalo Meat (Buff)",
            "image": "https://www.pcsbutchery.com.au/images/buff.png.png",
            "description":
              "Fresh buffalo meat (buff) from PCS Butchery Ingleburn. Perfect for Nepali curries, grilling, and stews. Halal-certified and freshly sourced.",
            "brand": {
              "@type": "Brand",
              "name": "PCS Butchery"
            },
            "sku": "BUFF-PCS-001",
            "offers": {
              "@type": "Offer",
              "url": "https://www.pcsbutchery.com.au/#buff",
              "priceCurrency": "AUD",
              "price": "19.99", // example, update real price
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          }),
        }}
      />
    </section>
  );
}
