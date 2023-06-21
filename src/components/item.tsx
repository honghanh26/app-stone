import Link from "next/link";
import React from "react";

import { ItemProps } from "@/types";

export default function Item({ title }: ItemProps) {
  return (
    <div className="product-small box has-hover box-bounce box-text-bottom">
      <div className="box-image">
        <div className="">
          {" "}
          <Link href="https://atcstone.vn/da-op-lat-nen/">
            {" "}
            <img
              width={450}
              height={338}
              src="https://atcstone.vn/wp-content/uploads/2020/09/DA-HOA-CUONG-LAT-NEN-CAO-CAP-450x338.jpg"
              data-src="https://atcstone.vn/wp-content/uploads/2020/09/DA-HOA-CUONG-LAT-NEN-CAO-CAP-450x338.jpg"
              className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
              alt="DA HOA CUONG LAT NEN CAO CAP 450x338 - Trang chủ"
              loading="lazy"
              title="Trang chủ"
            />
          </Link>
        </div>
        <div className="image-tools top right show-on-hover" />
        <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
          {" "}
          <Link
            href="https://atcstone.vn/da-op-lat-nen/"
            data-quantity={1}
            className="add-to-cart-grid no-padding is-transparent product_type_simple"
            data-product_id={1764}
            data-product_sku=""
            aria-label="Đọc thêm về “ĐÁ LÁT NỀN”"
            rel="nofollow"
          >
            <div className="cart-icon tooltip is-small tooltipstered">
              <strong>+</strong>
            </div>
          </Link>
        </div>
      </div>
      <div
        className="box-text text-center is-small dark"
        style={{ backgroundColor: "rgb(236, 120, 40)" }}
      >
        <div className="title-wrapper">
          <p
            className="name product-title woocommerce-loop-product__title h-5"
          >
            <Link href="https://atcstone.vn/da-op-lat-nen/">{title}</Link>
          </p>
        </div>
        <div className="price-wrapper h-0" />
      </div>
    </div>
  );
}
