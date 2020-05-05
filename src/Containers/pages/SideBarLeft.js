import React from "react";
import { PrimeHeader, PrimeSection } from "./common";
import * as CONSTANTS from "../../constants";

function SideBarLeft({ handlerPageSelect, name, content }) {
  return (
    <div className="container">
      <ol className="breadcrumb">
        <li>
          <a
            onClick={() => {
              handlerPageSelect("Home");
            }}
          >
            Home
          </a>
        </li>
        <li className="active">{name}</li>
      </ol>

      <div className="row">
        {/* <!-- Sidebar --> */}
        <aside className="col-md-4 sidebar sidebar-left">
          <div className="row widget">
            <div className="col-xs-12">
              <h4>Plan</h4>
              <ul className="list-unstyled list-spaces">
                {content.plans.map((plan, index) => {
                  return (
                    <li key={index}>
                      <h6>{plan}</h6>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row widget">
            {content.images.map((image, index) => {
              return (
                <div className="col-xs-12" key={index}>
                  <h4>{image.title}</h4>
                  <p>
                    <img src={image.path} alt={image.title} />
                  </p>
                </div>
              );
            })}
          </div>
        </aside>
        {/* <!-- /Sidebar --> */}

        {/* <!-- Article main content --> */}
        <article className="col-md-8 maincontent">
          <PrimeHeader title={content.title} />
          {CONSTANTS.DOCKER.sections.map((section, index) => {
            return <PrimeSection key={index} section={section} />;
          })}
        </article>
        {/* <!-- /Article --> */}
      </div>
    </div>
  );
}

export default SideBarLeft;
