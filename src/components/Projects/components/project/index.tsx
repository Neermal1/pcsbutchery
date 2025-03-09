"use client";
import React from "react";
import styles from "./style.module.scss";
import { Tooltip } from "antd";
import Image from "next/image";

export default function index({ index, title, manageModal, image }: any) {
  return (
    <Tooltip
      key={index}
      trigger={"hover"}
      placement="right"
      title={
        <Image src={`/images/${image}`} alt="image" width={800} height={700} />
      }
    >
      <div
        onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY);
        }}
        onMouseLeave={(e) => {
          manageModal(false, index, e.clientX, e.clientY);
        }}
        className={styles.project}
      >
        <h2>{title}</h2>
        <p>Top Quality</p>
      </div>
    </Tooltip>
  );
}
