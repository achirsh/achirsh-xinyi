import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title" style={{ marginBottom: '10px' }}>
          <div>欢迎瘢痕技术咨询</div>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    {/* <img src={d.img} alt="..." className="team-img" /> */}
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <a href={'tel:' + d.job.replace(/[^\d]/g, '')}>{d.job}</a>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
