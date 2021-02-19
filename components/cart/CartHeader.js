import React, { Fragment } from "react";

const CartHeader = () => {
  return (
    <Fragment>
      <div
        className="page-header page-title-default title-size-default title-design-default color-scheme-dark"
        style={{}}
      >
        {/* begin title-section */}
        <div
          className="title-section grid-container"
          data-parallax='{"y" : -40, "smoothness": 10}'
        >
          {/* begin title-section-wrapper */}
          <div className="title-section-wrapper grid-x align-middle align-center">
            {/* begin page-title-wrapper */}
            <div className="title-wrapper">
              <div className="breadcrumbs-wrapper">
                <div
                  className="breadcrumbs"
                  style={{
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <span>
                    <a
                      href="https://bafk.com.tr/"
                      rel="v:url"
                      property="v:title"
                    >
                      Home
                    </a>
                  </span>
                  <span className="delimiter">/</span>
                  <span className="current">Sepet</span>
                </div>
                {/* .breadcrumbs */}
              </div>
              {/* .breadcrumbs-wrapper */}
              {/* begin page-title-wrapper */}
              <div className="page-title-wrapper">
                <h1
                  className="page-title entry-title"
                  style={{
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Sepet{" "}
                </h1>
              </div>
              {/* end .page-title-wrapper */}
              <div
                className="term-description"
                style={{
                  opacity: 1,
                  visibility: "inherit",
                  transform: "translate(0px, 0px)",
                }}
              >
                <p>Tüm Ürünlerde Kargo BEDAVA</p>
              </div>
            </div>
            {/* end .title-wrapper */}
          </div>
          {/* end .title-section-wrapper */}
        </div>
        {/* end .title-section */}
        {/* begin page-title-wrapper */}
        <div className="page-header-bg-wrapper bg-loaded">
          <div
            className="page-header-bg rellax"
            data-rellax-speed="-1.5"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          />
        </div>
        {/* end .page-title-wrapper */}
      </div>
    </Fragment>
  );
};

export default CartHeader;
