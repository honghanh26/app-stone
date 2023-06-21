import { ItemProps } from "@/types";
import Link from "next/link";
import React from "react";

export default function TypeItem({title}: ItemProps) {
  return (
    <div className="product-small col has-hover product type-product status-publish first instock has-post-thumbnail shipping-taxable product-type-simple">
      <div className="col-inner">
        <div className="badge-container absolute left top z-1" />
        <div className="product-small box">
          <div className="box-image">
            <div className="image-zoom">
              {" "}
              <Link href="https://atcstone.vn/da-granite-magma-gold-3/">
                {" "}
                <img
                  width={450}
                  height={338}
                  src="https://atcstone.vn/wp-content/uploads/2023/06/DA-GRANITE-MAGMA-GOLD-450x338.jpg"
                  data-src="https://atcstone.vn/wp-content/uploads/2023/06/DA-GRANITE-MAGMA-GOLD-450x338.jpg"
                  className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                  alt="DA GRANITE MAGMA GOLD 450x338 - Trang chủ"
                  loading="lazy"
                  title="Trang chủ"
                />
              </Link>
            </div>
            <div className="image-tools is-small top right show-on-hover" />
            <div className="image-tools is-small hide-for-small bottom left show-on-hover" />
            <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
              {" "}
              <Link
                href="https://atcstone.vn/da-granite-magma-gold-3/"
                data-quantity={1}
                className="add-to-cart-grid no-padding is-transparent product_type_simple"
                data-product_id={5999}
                data-product_sku=""
                aria-label="Đọc thêm về “ĐÁ GRANITE MAGMA GOLD”"
                rel="nofollow"
              >
                <div className="cart-icon tooltip is-small tooltipstered">
                  <strong>+</strong>
                </div>
              </Link>
            </div>
          </div>
          <div className="box-text box-text-products text-center grid-style-2">
            <div className="title-wrapper">
              <p
                className="name product-title woocommerce-loop-product__title h-6"
              >
                <Link href="https://atcstone.vn/da-granite-magma-gold-3/">
                  {title}
                </Link>
              </p>
            </div>
            <div className="price-wrapper h-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
