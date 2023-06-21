import React from "react";

import { TitleProps } from "@/types";

export default function Title({title}: TitleProps) {
  return (
    <div
      className="row row-collapse align-equal align-center"
    >
      <div className="col medium-3 small-1 large-3">
        <div className="col-inner" />
      </div>
      <div className="col medium-6 small-10 large-6">
        <div className="col-inner">
          <div
            className="container section-title-container mt-4"
          >
            <h3 className="section-title section-title-center">
              <b />
              <span className="section-title-main">{title}</span>
              <b />
              <a href="#" target="">
                <i className="icon-angle-right" />
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div className="col medium-3 small-1 large-3">
        <div className="col-inner" />
      </div>
    </div>
  );
}
