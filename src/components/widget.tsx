import { WidgetProps } from "@/types";
import React from "react";

import styles from "./styles.module.css";

export default function Widget({
  title,
  containerStyles,
  children,
}: WidgetProps) {
  return (
    <aside className={`widget woocommerce ${styles.widget} ${containerStyles}`}>
      <span className={`widget-title shop-sidebar ${styles.widgetTitle}`}>{title}</span>
      <div className={`is-divider small ${styles.divider}`} />
      {children}
    </aside>
  );
}
