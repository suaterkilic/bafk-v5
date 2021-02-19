import React, { Fragment } from "react";

const Hamburger = () => {
  return (
    <Fragment>
      <header className="site-header header-offcanvas header-color-default header-has-bg header--clone">
        {/* begin header-inner */}
        <div className="header-inner">
          {/* begin header-wrapper */}
          <div className="header-wrapper grid-container">
            {/* begin header-sections */}
            <div
              className="header-sections grid-x align-middle"
              style={{ opacity: 1, visibility: "inherit" }}
            >
              {/* begin left-nav */}
              <div className="left-nav barberry-navigation cell auto">
                <nav className="navigation-foundation">
                  <div
                    id="trigger"
                    className="menu-trigger grid-x align-middle"
                  >
                    <div className="nav_burger cell shrink">
                      <span className="burger_top" />
                      <span className="burger_middle" />
                      <span className="burger_bottom" />
                    </div>
                    <div className="menu-title cell auto">
                      <span>Menu</span>
                    </div>
                  </div>
                </nav>
              </div>
              {/* end left-nav */}
              {/* begin site-branding */}
              <div className="site-branding cell shrink text-center">
                <a
                  href="https://barberry.temashdesign.com/demo-furniture/"
                  rel="home"
                >
                  <img
                    className="site-logo"
                    src="https://barberry.temashdesign.com/demo-furniture/wp-content/themes/barberry/images/barberry-logo.svg"
                    title="eCommerce WP Theme for WooCommerce"
                    alt="Barberry Furniture"
                  />
                  <img
                    className="site-logo-light"
                    src="https://barberry.temashdesign.com/demo-furniture/wp-content/themes/barberry/images/barberry-logo-light.svg"
                    title="eCommerce WP Theme for WooCommerce"
                    alt="Barberry Furniture"
                  />
                  <img
                    className="sticky-logo"
                    src="https://barberry.temashdesign.com/demo-furniture/wp-content/themes/barberry/images/barberry-logo.svg"
                    title="eCommerce WP Theme for WooCommerce"
                    alt="Barberry Furniture"
                  />
                </a>
              </div>
              {/* end site-branding */}
              {/* begin tools */}
              <div className="tools cell auto text-right">
                {/* begin header-expanded-view */}
                <div className="header-expanded-view">
                  <div className="header-expanded-view-inner">
                    <span id="header-search" className="header-search">
                      <svg
                        className="svg-icon"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                      >
                        <use x={0} y={0} xlinkHref="#i-search" />
                      </svg>
                    </span>{" "}
                    <a
                      href="https://barberry.temashdesign.com/demo-furniture/wishlist/"
                      className="header-wishlist"
                    >
                      <svg
                        className="svg-icon"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                      >
                        <use x={0} y={0} xlinkHref="#i-wishlist" />
                      </svg>
                      <sup className="wishlist_items_number">0</sup>
                    </a>{" "}
                    <a
                      href="https://barberry.temashdesign.com/demo-furniture/compare/"
                      className="header-compare barberry-show-compare"
                    >
                      <svg
                        className="svg-icon"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                      >
                        <use x={0} y={0} xlinkHref="#i-compare" />
                      </svg>
                      <sup className="compare_items_number barberry-product-empty">
                        0
                      </sup>
                    </a>{" "}
                    <div className="header-account navigation-foundation">
                      <ul
                        className="dropdown menu my-account-form  my-account-has-drop "
                        data-close-on-click="false"
                        data-close-on-click-inside="false"
                        data-click-open="false"
                        data-dropdown-menu
                        data-hover-delay={150}
                        data-closing-time={0}
                        data-alignment="right"
                        role="menubar"
                        data-n="zznd7j-n"
                      >
                        <li role="menuitem">
                          <a
                            data-open="head_loginModal"
                            aria-controls="head_loginModal"
                            aria-haspopup="true"
                            tabIndex={0}
                          >
                            <span>My account</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* end header-expanded-view */}
                <a
                  href="https://barberry.temashdesign.com/demo-furniture/cart/"
                  className="link header-cart "
                >
                  <span className="header-cart-title">Cart</span>
                  <span className="header-cart-count">
                    <span className="header-cart-count-background" />
                    <span className="header-cart-count-number">0</span>
                  </span>
                </a>
              </div>
              {/* end tools */}
            </div>
            {/* end header-sections */}
          </div>
          {/* end header-wrapper */}
        </div>
        {/* end header-inner */}
      </header>
    </Fragment>
  );
};

export default Hamburger;
