import React from "react";
import Link from "next/link";

import { categories } from "@/constants";

export default function Navbar() {
  return (
    <div id="wide-nav" className="header-bottom wide-nav nav-dark">
      <div className="flex-row container">
        <div className="flex-col flex-left">
          <ul className="nav header-nav header-bottom-nav nav-left nav-box nav-size-medium nav-spacing-xsmall nav-uppercase">
            {categories.map((category) => (
              <li
                id="menu-item-624"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-624"
              >
                <Link href="/" className="nav-top-link px-2 md:px-4">
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
