import React from "react";
import "../assets/css/common.css";
import "../assets/css/iconsae34.css";

import Navbar from "./navbar";

export default function Header() {
  return (
    <header
      id="header"
      className="header has-sticky sticky-jump"
    >
      <div className="header-wrapper">
        <div id="top-bar" className="header-top hide-for-sticky nav-dark">
          <div className="flex-row container">
            <div className="flex-col hide-for-medium flex-left">
              <ul className="nav nav-left medium-nav-center nav-small nav-divided">
                <li className="html custom html_topbar_left">
                  <strong>Cung cấp và thi công đá hoa cương cao cấp</strong>
                </li>
              </ul>
            </div>
            <div className="flex-col hide-for-medium flex-center">
              <ul className="nav nav-center nav-small nav-divided" />
            </div>
            <div className="flex-col hide-for-medium flex-right">
              <ul className="nav top-bar-nav nav-right nav-small nav-divided">
                <li
                  id="menu-item-1675"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1675"
                >
                  <a
                    href="https://atcstone.vn/gioi-thieu/"
                    className="nav-top-link"
                  >
                    Giới thiệu
                  </a>
                </li>
                <li
                  id="menu-item-556"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-556"
                >
                  <a href="https://atcstone.vn/shop/" className="nav-top-link">
                    Cửa hàng
                  </a>
                </li>
                <li
                  id="menu-item-189"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-189"
                >
                  <a href="https://atcstone.vn/blog/" className="nav-top-link">
                    Tin tức
                  </a>
                </li>
                <li
                  id="menu-item-1676"
                  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-285 current_page_item menu-item-1676 active"
                >
                  <a
                    href="https://atcstone.vn/lien-he/"
                    aria-current="page"
                    className="nav-top-link"
                  >
                    Liên hệ
                  </a>
                </li>
                <li className="header-divider" />
                <li className="html header-social-icons ml-0">
                  <div className="social-icons follow-icons">
                    <a
                      href="https://www.facebook.com/ATCStone.vn/"
                      target="_blank"
                      data-label="Facebook"
                      rel="noopener noreferrer nofollow"
                      className="icon plain facebook tooltip tooltipstered"
                    >
                      <i className="icon-facebook" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      data-label="Instagram"
                      className="icon plain instagram tooltip tooltipstered"
                    >
                      <i className="icon-instagram" />
                    </a>
                    <a
                      href="mailto:your@email"
                      data-label="E-mail"
                      rel="nofollow"
                      className="icon plain email tooltip tooltipstered"
                    >
                      <i className="icon-envelop" />
                    </a>
                    <a
                      href="https://www.pinterest.com/atcstone999/"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      data-label="Pinterest"
                      className="icon plain pinterest tooltip tooltipstered"
                    >
                      <i className="icon-pinterest" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCfTSL1VHg2BchiOxag8a4uw?view_as=subscriber"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      data-label="YouTube"
                      className="icon plain youtube tooltip tooltipstered"
                    >
                      <i className="icon-youtube" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-col show-for-medium flex-grow">
              <ul className="nav nav-center nav-small mobile-nav nav-divided">
                <li className="html custom html_topbar_left">
                  <strong>Cung cấp và thi công đá hoa cương cao cấp</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="masthead" className="header-main hide-for-sticky">
          <div
            className="header-inner flex-row container logo-left medium-logo-center"
            role="navigation"
          >
            <div id="logo" className="flex-col logo">
              {" "}
              <a
                href="https://atcstone.vn/"
                title="ATCSTONE - ĐÁ HOA CƯƠNG CAO CẤP "
                rel="home"
              >
                {" "}
                  <img width="175" height="76"
                  src="https://atcstone.vn/wp-content/uploads/2019/03/LOGO-ATC-STONE-vien-01.png"
                  className="header_logo header-logo" alt="ATCSTONE"/>
                  <img width="175" height="76"
                  src="https://atcstone.vn/wp-content/uploads/2019/03/LOGO-ATC-STONE-vien-01.png"
                  className="header-logo-dark" alt="ATCSTONE"/>
              </a>
            </div>
            <div className="flex-col show-for-medium flex-left">
              <ul className="mobile-nav nav nav-left ">
                <li className="nav-icon has-icon">
                  {" "}
                  <a
                    href="#"
                    data-open="#main-menu"
                    data-pos="left"
                    data-bg="main-menu-overlay"
                    data-color=""
                    className="is-small"
                    aria-label="Menu"
                    aria-controls="main-menu"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="icon-menu" />{" "}
                    <span className="menu-title uppercase hide-for-small">
                      Menu
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-col hide-for-medium flex-left flex-grow">
              <ul className="header-nav header-nav-main nav nav-left nav-uppercase">
                <li className="header-block">
                  <div className="header-block-block-1">
                    <div
                      className="row row-collapse align-middle ho-tro hide-for-medium"
                      id="row-1615121049"
                    >
                      <div id="col-1359097519" className="col medium-4 large-4">
                        <div className="col-inner">
                          <div className="searchform-wrapper ux-search-box relative is-normal">
                            <form
                              role="search"
                              method="get"
                              className="searchform"
                              action="https://atcstone.vn/"
                            >
                              <div className="flex-row relative">
                                <div className="flex-col flex-grow">
                                  {" "}
                                  <label
                                    className="screen-reader-text"
                                    htmlFor="woocommerce-product-search-field-0"
                                  >
                                    Tìm kiếm:
                                  </label>{" "}
                                  <input
                                    type="search"
                                    id="woocommerce-product-search-field-0"
                                    className="search-field mb-0"
                                    placeholder="Bạn cần tìm sản phẩm nào?"
                                    defaultValue=""
                                    name="s"
                                    autoComplete="off"
                                  />{" "}
                                  <input
                                    type="hidden"
                                    name="post_type"
                                    defaultValue="product"
                                  />
                                </div>
                                <div className="flex-col">
                                  {" "}
                                  <button
                                    type="submit"
                                    value="Tìm kiếm"
                                    className="ux-search-submit submit-button secondary button icon mb-0"
                                  >
                                    {" "}
                                    <i className="icon-search" />{" "}
                                  </button>
                                </div>
                              </div>
                              <div className="live-search-results text-left z-top">
                                <div
                                  className="autocomplete-suggestions"
                                  style={{
                                    position: "absolute",
                                    display: "none",
                                    maxHeight: 300,
                                    zIndex: 9999,
                                  }}
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "#col-1359097519>.col-inner{padding:0 65px 0 0}",
                          }}
                        />
                      </div>
                      <div id="col-341643310" className="col medium-4 large-4">
                        <div className="col-inner">
                          <div className="icon-box featured-box icon-box-left text-left is-small">
                            <div className="icon-box-img" style={{ width: 57 }}>
                              <div className="icon">
                                <div className="icon-inner">
                                  {" "}
                                  
                                    <img width="400" height="400"
                                    src="https://atcstone.vn/wp-content/uploads/2020/09/atc-stone-1-400x400.jpg"
                                    className="attachment-medium size-medium"
                                    alt="atc stone 1 400x400 - Liên hệ"
                                    loading="lazy"
                                    srcSet="https://atcstone.vn/wp-content/uploads/2020/09/atc-stone-1-400x400.jpg
                                    400w,
                                    https://atcstone.vn/wp-content/uploads/2020/09/atc-stone-1-100x100.jpg
                                    100w,
                                    https://atcstone.vn/wp-content/uploads/2020/09/atc-stone-1-600x600.jpg
                                    600w,
                                    https://atcstone.vn/wp-content/uploads/2020/09/atc-stone-1-280x280.jpg
                                    280w,
                                    https://atcstone.vn/wp-content/uploads/2020/09/atc-stone-1-e1602551324165.jpg
                                    64w" sizes="(max-width: 400px) 100vw, 400px"
                                    title="Liên hệ" />
                                </div>
                              </div>
                            </div>
                            <div className="icon-box-text last-reset">
                              <p>
                                <span style={{ color: "#282828" }}>
                                  <strong>
                                    <span style={{ fontSize: "130%" }}>
                                      EMAIL ATC STONE
                                    </span>
                                  </strong>
                                </span>
                              </p>
                              <div className="col-md-8 border-2 ">
                                <div className="col-md-18 col-xs-18">
                                  <span style={{ fontSize: "140%" }}>
                                    <strong>
                                      <span style={{ color: "#ff6600" }}>
                                        <em>
                                          <span className="text-cs">
                                            atcstone999@gmail.com
                                          </span>
                                        </em>
                                      </span>
                                    </strong>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="col-104548996" className="col medium-4 large-4">
                        <div className="col-inner">
                          <div className="icon-box featured-box icon-box-left text-left is-small">
                            <div className="icon-box-img" style={{ width: 51 }}>
                              <div className="icon">
                                <div className="icon-inner">
                                  {" "}
                                  <img width="257" height="250"
                                    src="https://atcstone.vn/wp-content/uploads/2020/10/logo-dien-thoai-ban-1.jpg"
                                    className="attachment-medium size-medium"
                                    alt="logo dien thoai ban 1 - Liên hệ"
                                    loading="lazy" title="Liên hệ" />
                                </div>
                              </div>
                            </div>
                            <div className="icon-box-text last-reset">
                              <p>
                                <span
                                  style={{ fontSize: "130%", color: "#282828" }}
                                >
                                  <strong>HOTLINE ATCSTONE</strong>
                                </span>
                              </p>
                              <div className="col-md-8 border-2 ">
                                <div className="col-md-18 col-xs-18">
                                  <span style={{ fontSize: "140%" }}>
                                    <strong>
                                      <span style={{ color: "#ff6600" }}>
                                        <em>
                                          <span className="text-cs">
                                            0908 099 419 - 08 999 06 000
                                          </span>
                                        </em>
                                      </span>
                                    </strong>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-col hide-for-medium flex-right">
              <ul className="header-nav header-nav-main nav nav-right nav-uppercase" />
            </div>
            <div className="flex-col show-for-medium flex-right">
              <ul className="mobile-nav nav nav-right ">
                <li className="account-item has-icon">
                  {" "}
                  <a
                    href="https://atcstone.vn/my-account/"
                    className="account-link-mobile is-small"
                    title="Tài khoản"
                  >
                    {" "}
                    <i className="icon-user" />{" "}
                  </a>
                </li>
                <li className="cart-item has-icon">
                  {" "}
                  <a
                    href="https://atcstone.vn/cart/"
                    className="header-cart-link off-canvas-toggle nav-top-link is-small"
                    data-open="#cart-popup"
                    data-class="off-canvas-cart"
                    title="Giỏ hàng"
                    data-pos="right"
                  >
                    {" "}
                    <i
                      className="icon-shopping-basket"
                      data-icon-label={0}
                    ></i>{" "}
                  </a>
                  <div
                    id="cart-popup"
                    className="mfp-hide widget_shopping_cart"
                  >
                    <div className="cart-popup-inner inner-padding">
                      <div className="cart-popup-title text-center">
                        <h4 className="uppercase">Giỏ hàng</h4>
                        <div className="is-divider" />
                      </div>
                      <div className="widget_shopping_cart_content">
                        <p className="woocommerce-mini-cart__empty-message">
                          Chưa có sản phẩm trong giỏ hàng.
                        </p>
                      </div>
                      <div className="cart-sidebar-content relative" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="top-divider full-width" />
          </div>
        </div>
        <Navbar />
        <div className="header-bg-container fill">
          <div className="header-bg-image fill" />
          <div className="header-bg-color fill" />
        </div>
      </div>
    </header>
  );
}
