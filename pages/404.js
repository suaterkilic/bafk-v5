import React, { Fragment } from "react";
import Layout from "../components/layout";

const NotFound = () => {
  return (
    <Fragment>
      <div
        id="myBody"
        className="error404 wp-embed-responsive theme-barberry woocommerce-js wpb-js-composer js-comp-ver-6.5.0 vc_responsive no-offcanvas-animation header-has-title header-has-overlap catalog-ajax-filter posts-has-parallax bb_classic_notif notice_clickable tag-cloud-equal buy_now_enable"
        footer-data="1"
      >
        <Layout>
          <div
            id="primary"
            className="content-area"
            style={{
              opacity: 1,
              visibility: "inherit",
              paddingTop: 0,
              marginBottom: '441px'
            }}
          >
            {/* begin site-content */}
            <div id="content" className="site-content" role="main">
              {/* begin grid-container */}
              <div className="grid-container content-page-wrapper" style={{
                  marginTop: '-113px'
              }}>
                {/* begin grid-x */}
                <div className="grid-x grid-margin-x  align-center">
                  {/* begin cell */}
                  <div className="cell medium-8 large-9">
                    <section className="error-404 not-found">
                      <header className="page-header">
                        {/* begin page-title-wrapper */}
                        <div className="page-title-wrapper">
                          <h1
                            className="page-title"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            Oops! That page can’t be found.
                          </h1>
                        </div>
                        {/* end page-title-wrapper */}
                      </header>
                      <div className="page-content">
                        <div className="error-404-description">
                          It looks like nothing was found at this location.
                          Maybe try a search?
                        </div>
                        <div className="error-404-searchform">
                          <form
                            role="search"
                            method="get"
                            className="search-form"
                            action="https://barberry.temashdesign.com/demo-furniture/"
                          >
                            <label className="screen-reader-text">
                              Search for:
                            </label>
                            <input
                              type="search"
                              className="search-field"
                              placeHolder="Sen ne aradığını farkında mısın acaba ki?"
                              name="s"
                            />
                            <input
                              type="submit"
                              className="search-submit"
                              defaultValue="Search"
                            />
                          </form>
                        </div>
                      </div>
                    </section>
                  </div>
                  {/* end cell large-12 */}
                </div>
                {/* end grid-x */}
              </div>
              {/* end grid-container */}
            </div>
            {/* end site-content */}
          </div>
        </Layout>
      </div>
    </Fragment>
  );
};

export default NotFound;
