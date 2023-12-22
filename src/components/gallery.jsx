import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title" style={{ marginBottom: '10px' }}>
          <div>产品推荐</div>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {/* {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
            
                  </div>
                ))
              : "Loading..."} */}
              <div
                className="col-sm-12 col-md-6 col-lg-6 portfolio-items-item"
              >
                <img alt="" src="img/0005.jpg" style={{ width: '100%' }} />
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-6 portfolio-items-item"
              >
                <img alt="" src="img/2.jpg" style={{ width: '100%' }} />
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-6 portfolio-items-item"
              >
                <img alt="" src="img/1.jpg" style={{ width: '100%' }} />
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-6 portfolio-items-item"
              >
                <img alt="" src="img/3.jpg" style={{ width: '100%' }} />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
