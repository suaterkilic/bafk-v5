import React, { Fragment } from "react";
import Link from "next/link";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    const el = document.getElementById("myBody");
    el.classList.add("offcanvas_open", "offcanvas_left", "lock-scroll");

    const test = document.getElementById("testEl");
    test.classList.remove("hide_toggle_menu");

    const myMenu = document.getElementById("myMenu");

    if (myMenu.classList.contains("leftMenu")) {
      myMenu.classList.remove("leftMenu");
    }

    myMenu.classList.add("noneLeft");
    myMenu.style.visibility = "visible";

    const myOverlay = document.getElementById("myOverlay");
    if (myOverlay.classList.contains("overlayHide")) {
      myOverlay.classList.remove("overlayHide");
    }
    myOverlay.classList.add("toggle_menu_overlay");
  };

  mouseOver = (e) => {
    const hoverHeader = document.getElementById('hoverHeader');
    hoverHeader.setAttribute('data-sticky', 'visible')

    const mainHeader = document.getElementById('mainHeader');
    mainHeader.setAttribute('data-sticky', 'visible')

    e.currentTarget.className += ' is-active';

    e.currentTarget.querySelector('ul').classList.add('js-dropdown-active')

    const myOverlay = document.getElementById("myOverlay");
    myOverlay.classList.add("toggle_menu_overlay", "opacityImportant");

  }

  mouseOut = (e) => {

    const hoverHeader = document.getElementById('hoverHeader');
    hoverHeader.removeAttribute('data-sticky');

    e.currentTarget.querySelector('li').classList.remove('is-active');
    e.currentTarget.querySelector('ul').classList.remove('js-dropdown-active')

    const myOverlay = document.getElementById("myOverlay");
    myOverlay.classList.remove("toggle_menu_overlay", "opacityImportant");

  }

  render() {
    return (
      <Fragment>
        <div className="left-nav barberry-navigation cell auto">
          <nav className="navigation-foundation">
            <ul
              id="menu-primary-menu"
              className="dropdown menu"
              data-dropdown-menu
              data-hover-delay={150}
              data-closing-time={0}
              role="menubar"
              data-n="9ijprz-n"
            >
              <li
                onMouseOver={(e) => this.mouseOver(e)}
                onMouseOut={(e) => this.mouseOut(e)}
                id="menu-item-id"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3626 current_page_item menu-item-has-children menu-item-3649 active dropdown is-dropdown-submenu-parent hasmenu opens-right"
                role="menuitem"
                aria-haspopup="true"
                aria-label="Home"
                data-is-click="false"
              >
                <Link href="/">
                <a
                  className="dropdown-toggle"
                >
                  <span>Anasayfa</span>
                </a>
                </Link>
                <ul
                  className="dropdown-submenu menu submenu is-dropdown-submenu first-sub vertical"
                  data-submenu
                  role="menubar"
                  style={{}}
                >
                  <li
                    id="menu-item-3496"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3496 is-submenu-item is-dropdown-submenu-item"
                    role="menuitem"
                  >
                    <Link href="/">
                    <a>
                      <span>Anasayfa</span>
                    </a>
                    </Link>
                  </li>
                  <li
                    id="menu-item-3745"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3745 is-submenu-item is-dropdown-submenu-item"
                    role="menuitem"
                  >
                    <a href="https://barberry.temashdesign.com/demo-furniture/collections-slider/">
                      <span>Collections slider</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-3618"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3618 is-submenu-item is-dropdown-submenu-item"
                    role="menuitem"
                  >
                    <a href="https://barberry.temashdesign.com/demo-furniture/full-screen-slider/">
                      <span>Full-screen slider</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li
                onMouseOver={(e) => this.mouseOver(e)}
                onMouseOut={(e) => this.mouseOut(e)}
                id="menu-item-3495"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3495 dropdown is-dropdown-submenu-parent hasmenu opens-right"
                role="menuitem"
                aria-haspopup="true"
                aria-label="Features"
                data-is-click="false"
              >
                <Link href="/about">
                <a
                  className="dropdown-toggle"
                >
                  <span>Biz Kimiz</span>
                </a>
                </Link>
                <ul
                  className="dropdown-submenu menu submenu is-dropdown-submenu first-sub vertical"
                  data-submenu
                  role="menubar"
                  style={{}}
                >
                  <li
                    id="menu-item-3296"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3296 is-submenu-item is-dropdown-submenu-item"
                    role="menuitem"
                  >
                    <Link href="/about">
                    <a>
                      <span>Hakkımızda</span>
                    </a>
                    </Link>
                  </li>
                  <li
                    id="menu-item-3703"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3703 is-submenu-item is-dropdown-submenu-item"
                    role="menuitem"
                  >
                    <a href="https://barberry.temashdesign.com/demo-furniture/?header_layout=left">
                      <span>Left logo header</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-3783"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3783 is-submenu-item is-dropdown-submenu-item"
                    role="menuitem"
                  >
                    <a href="https://barberry.temashdesign.com/demo-furniture/?header_layout=offcanvas&topbar_toggle=1">
                      <span>
                        Header with Top Bar (Languages &amp; Currency)
                      </span>
                    </a>
                  </li>
                  <li
                    id="menu-item-3301"
                    onMouseOver={(e) => this.mouseOver(e)}
                    onMouseOut={(e) => this.mouseOut(e)}
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3301 dropdown is-dropdown-submenu-parent hasmenu is-submenu-item is-dropdown-submenu-item opens-right"
                    role="menuitem"
                    aria-haspopup="true"
                    aria-label="Pages"
                    data-is-click="false"
                  >
                    <a href="#" className="dropdown-toggle">
                      <span>Pages</span>
                    </a>
                    <ul
                      className="dropdown-submenu menu submenu is-dropdown-submenu vertical"
                      data-submenu
                      role="menubar"
                      style={{}}
                    >
                      <li
                        id="menu-item-3598"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3598 is-submenu-item is-dropdown-submenu-item"
                        role="menuitem"
                      >
                        <a href="https://barberry.temashdesign.com/demo-furniture/about-us-dark/">
                          <span>About Us – Dark</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-3802"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3802 is-submenu-item is-dropdown-submenu-item"
                        role="menuitem"
                      >
                        <a href="https://barberry.temashdesign.com/demo-furniture/faqs/">
                          <span>FAQs</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-3572"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3572 is-submenu-item is-dropdown-submenu-item"
                        role="menuitem"
                      >
                        <a href="https://barberry.temashdesign.com/demo-furniture/contact/">
                          <span>Contact</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-3563"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3563 is-submenu-item is-dropdown-submenu-item"
                        role="menuitem"
                      >
                        <a href="https://barberry.temashdesign.com/demo-furniture/contact-map/">
                          <span>Contact – with map</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-3300"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3300 is-submenu-item is-dropdown-submenu-item"
                        role="menuitem"
                      >
                        <a href="https://barberry.temashdesign.com/demo-furniture/404">
                          <span>Page – 404</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                onMouseOver={(e) => this.mouseOver(e)}
                onMouseOut={(e) => this.mouseOut(e)}
                id="menu-item-2135"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2135 dropdown is-dropdown-submenu-parent is-mega-menu opens-right with-offsets"
                role="menuitem"
                aria-haspopup="true"
                aria-label="The Shop"
                data-is-click="false"
              >
                <Link href="/category">
                <a
                  className="dropdown-toggle"
                >
                  <span>Erkek</span>
                </a>
                </Link>
                <ul
                  className="dropdown-submenu menu submenu is-dropdown-submenu first-sub vertical"
                  data-submenu
                  role="menubar"
                  style={{}}
                >
                  <li
                    role="menuitem"
                    className="is-submenu-item is-dropdown-submenu-item"
                  >
                    <div
                      style={{
                        backgroundImage:
                          "url(https://barberry.temashdesign.com/demo-furniture/wp-content/uploads/sites/7/2019/05/menu-bg.jpg)",
                        backgroundPosition: "right top",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        backgroundColor: "#ffffff",
                        width: "1000px",
                      }}
                      className="mega-menu-content"
                    >
                      <div className="grid-x">
                        <div id="menu-item-29" className="cell medium-3">
                          <div className="menu-item-mega">
                            <Link href="/category">
                            <a className="dropdown-toggle">Üst Giyim</a>
                            </Link>
                            <div className="mega-menu-submenu">
                              <ul className="sub-menu check">
                                <li
                                  id="menu-item-3280"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3280"
                                  role="menuitem"
                                >
                                  <Link href="/category">
                                  <a>
                                    <span>Mont</span>
                                  </a>
                                  </Link>
                                </li>
                                <li
                                  id="menu-item-30"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-30"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/shop/?shop_sidebar=0&products_per_row=4">
                                    <span>No Sidebar</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-31"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-31"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/shop/?products_per_row=4&products_layout=product-grid-layout-1">
                                    <span>Classic Product Style</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3394"
                                  className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3394"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/product-category/livingroom/">
                                    <span>Category with background</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3287"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3287"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/shop/?products_per_row=3">
                                    <span>Shop – 3 Columns</span>
                                    <span className="items-badge">
                                      <span className="trending-badge">
                                        Trending
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-176"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-176"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/shop/?products_per_row=4">
                                    <span>Shop – 4 Columns</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3295"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3295"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/shop/?header_layout=offcanvas">
                                    <span>Offcanvas header menu</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div id="menu-item-32" className="cell medium-3">
                          <div className="menu-item-mega">
                            <a href="#" className="dropdown-toggle">
                              Product Layout
                            </a>
                            <div className="mega-menu-submenu">
                              <ul className="sub-menu check">
                                <li
                                  id="menu-item-3288"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3288"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/product/spot-table-lamp/">
                                    <span>Product – Style 1</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3289"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3289"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/product/lounge-chair/">
                                    <span>Product – Style 2</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3290"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3290"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/product/aliquam-venenatis-bathtub/">
                                    <span>Product – Style 3</span>
                                    <span className="items-badge">
                                      <span className="hot-badge">Hot</span>
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3849"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3849"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/product/commodo-blown-lamp/?product_sidebar=1">
                                    <span>Product – with sidebar</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3291"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3291"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/product/commodo-blown-lamp/">
                                    <span>Simple product (On Sale)</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3292"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3292"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/product/spot-table-lamp/">
                                    <span>Variable product</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3418"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3418"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/product/libero-headphones/">
                                    <span>
                                      Variable product with description
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3293"
                                  className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3293"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/product/vulputate-mixer/">
                                    <span>Grouped product</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div id="menu-item-174" className="cell medium-3">
                          <div className="menu-item-mega">
                            <a href="#" className="dropdown-toggle">
                              Other Pages
                            </a>
                            <div className="mega-menu-submenu">
                              <ul className="sub-menu check">
                                <li
                                  id="menu-item-2143"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2143"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/cart/">
                                    <span>Cart</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-2922"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2922"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/checkout/">
                                    <span>Checkout</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-2921"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2921"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/my-account/">
                                    <span>My account</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3066"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3066"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/order-tracking/">
                                    <span>Order Tracking</span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-3286"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3286"
                                  role="menuitem"
                                >
                                  <a href="https://barberry.temashdesign.com/demo-furniture/wishlist/">
                                    <span>Wishlist</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                onMouseOver={(e) => this.mouseOver(e)}
                onMouseOut={(e) => this.mouseOut(e)}
                id="menu-item-3497"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3497 dropdown is-dropdown-submenu-parent hasmenu opens-right"
                role="menuitem"
                aria-haspopup="true"
                aria-label="The Blog"
                data-is-click="false"
              >
                <Link href="/blog">
                <a
                  className="dropdown-toggle"
                >
                  <span>Blog</span>
                </a>
                </Link>
                <ul
                  className="dropdown-submenu menu submenu is-dropdown-submenu first-sub vertical"
                  data-submenu
                  role="menubar"
                  style={{}}
                >
                  <li
                    id="menu-item-3498"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3498 is-submenu-item is-dropdown-submenu-item"
                    role="menuitem"
                  >
                    <Link href="/blog">
                    <a>
                      <span>Blog</span>
                    </a>
                    </Link>
                  </li>
                  <li
                    id="menu-item-3244"
                    className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3244 is-submenu-item is-dropdown-submenu-item"
                    role="menuitem"
                  >
                    <a href="https://barberry.temashdesign.com/demo-furniture/classics-from-yesterday-and-tomorrow-now-together/">
                      <span>Blog – Post</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-3398"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3398 is-submenu-item is-dropdown-submenu-item"
                    role="menuitem"
                  >
                    <a href="https://barberry.temashdesign.com/demo-furniture/classics-from-yesterday-and-tomorrow-now-together/?blog_single_sidebar=1">
                      <span>Blog – Post with sidebar</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div onClick={() => this.toggleMenu()} className="menu-trigger grid-x align-middle">
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
      </Fragment>
    );
  }
}

export default Navigation;
