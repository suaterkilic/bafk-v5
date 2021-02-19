import React, { Fragment } from "react";
import Link from "next/link";
import ReactDOM from 'react-dom';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
  }

  closeMenu = () => {
    const myMenu = document.getElementById("myMenu");
    myMenu.classList.remove("noneLeft");
    myMenu.classList.add("leftMenu");

    const myOverlay = document.getElementById("myOverlay");
    myOverlay.classList.add("overlayHide");
    setTimeout(() => {
      myOverlay.classList.remove("toggle_menu_overlay");
    }, 200);

    const myBody = document.getElementById("myBody");
    myBody.classList.remove("offcanvas_open", "offcanvas_left", "lock-scroll");

    /*const test = document.getElementById("testEl");
    test.classList.add("hide_toggle_menu");

    const myBody = document.getElementById("myBody");
    const myMenu = document.getElementById("myMenu");

    myMenu.removeAttribute("style");

    myBody.classList.remove("offcanvas_open", "lock-scroll");

    const myOverlay = document.getElementById("myOverlay");
    myOverlay.classList.remove("toggle_menu_overlay");

    myBody.classList.remove("offcanvas_left");*/
  };

  headLoginModal = () => {
    this.closeMenu();
    const root = document.getElementsByTagName('html')[0];
    root.classList.add("zf-has-scroll", "is-reveal-open");

    document.getElementById('myBody').classList.add('photoswipe-blur');

    const accountModalOverlay = document.getElementById('accountModalOverlay'); 
    
    accountModalOverlay.style.display = 'block';

    const headLoginModal = document.getElementById('head_loginModal'); 
    headLoginModal.classList.add("modalFadeIn");

    headLoginModal.style.top = -24 + 'px';
    headLoginModal.style.display = 'block';
  }

  subMenu = (e) => {
      const drillDown = document.getElementById('drillDown');
      e.currentTarget.querySelector('ul').classList.add('is-active');
      e.currentTarget.querySelector('ul').classList.remove('invisible');

      const listHeight = e.currentTarget.querySelector('ul').offsetHeight;
      //const listHeight = firstNode.parentElement.offsetHeight;
      drillDown.style.height = listHeight + 'px';
  }

  handleBack = (e) => {
    const drillDown = document.getElementById('drillDown');
    setTimeout(() => {
      drillDown.style.height = 174 + 'px';
    }, 50)

    const firstNode = e.target.parentElement;

    firstNode.parentElement.classList.add("is-closing");
    firstNode.parentElement.classList.add("suat");

    setTimeout(() => {
      firstNode.parentElement.classList.remove("is-active");
    }, 30)

    firstNode.parentElement.classList.remove("is-closing");
    firstNode.parentElement.classList.remove("suat");
    firstNode.parentElement.classList.add("invisible", "suat2");
  }

  handleBackSub = (e) => {

    const firstNode = e.target.parentElement;

    const offsetHeight = firstNode.parentElement.offsetHeight;

    firstNode.parentElement.classList.add("is-closing");
    firstNode.parentElement.classList.add("suat");

    setTimeout(() => {
      firstNode.parentElement.classList.remove("is-active");
    }, 30)

    firstNode.parentElement.classList.remove("is-closing");
    firstNode.parentElement.classList.remove("suat");
    firstNode.parentElement.classList.add("invisible", "suat2");
  }

  render() {
    return (
      <Fragment>
        <div id="myMenu" className="offcanvas_aside offcanvas_aside_left">
          <div className="nano has-scrollbar">
            <div
              className="nano-content"
              tabIndex={0}
              style={{ right: "-19px" }}
            >
              <div id="testEl" className="offcanvas_aside_content">
                <div className="offcanvas_mainmenu">
                  <div onClick={() => this.closeMenu()} className="close-icon">
                    <span className="close-icon_top" />
                    <span className="close-icon_bottom" />
                  </div>
                  {/* begin offcanvas-navs */}
                  <div className="offcanvas-navs">
                    <div className="header-mobiles-primary-menu">
                      <div
                        id="drillDown"
                        className="is-drilldown animate-height"
                        style={{ height: "174.167px", maxWidth: "500px" }}
                      >
                        <ul
                          id="menu-primary-menu-1"
                          className="vertical menu drilldown mobile-menu"
                          data-drilldown
                          data-close-on-click="true"
                          data-auto-height="true"
                          data-animate-height="true"
                          data-parent-link="true"
                          data-back-button='<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
                          role="tree"
                          aria-multiselectable="false"
                          data-mutate="w31ukp-drilldown"
                          data-n="o8qfil-n"
                        >
                          <li
                            onClick={(e) => this.subMenu(e)}
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3626 current_page_item menu-item-has-children menu-item-3649 is-drilldown-submenu-parent"
                            role="treeitem"
                            aria-haspopup="true"
                            aria-label="Home"
                            aria-expanded="false"
                          >
                            <a aria-current="page" tabIndex={0}>
                              <span>Anasayfa</span>
                            </a>
                            <ul
                              className="menu vertical nested submenu is-drilldown-submenu invisible"
                              data-submenu
                              role="group"
                              aria-hidden="true"
                            >
                              <li onClick={(e) => this.handleBack(e)} className="js-drilldown-back">
                                <a tabIndex={0}>Geri Dön</a>
                              </li>
                              <li
                                data-is-parent-link
                                className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item"
                                role="menuitem"
                              >
                                <Link href="/">
                                <a
                                  aria-current="page"
                                >
                                  <span>Anasayfa</span>
                                </a>
                                </Link>
                              </li>
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3496 is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                              >
                                <a href="https://barberry.temashdesign.com/demo-furniture/home-modern/">
                                  <span>Home Modern</span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3745 is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                              >
                                <a href="https://barberry.temashdesign.com/demo-furniture/collections-slider/">
                                  <span>Collections slider</span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3618 is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                              >
                                <a href="https://barberry.temashdesign.com/demo-furniture/full-screen-slider/">
                                  <span>Full-screen slider</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            onClick={(e) => this.subMenu(e)}
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3495 is-drilldown-submenu-parent"
                            role="treeitem"
                            aria-haspopup="true"
                            aria-label="Features"
                            aria-expanded="false"
                          >
                            <a tabIndex={0}>
                              <span>Biz Kimiz</span>
                            </a>
                            <ul
                              className="menu vertical nested submenu is-drilldown-submenu invisible"
                              data-submenu
                              role="group"
                              aria-hidden="true"
                            >
                              <li onClick={(e) => this.handleBack(e)} className="js-drilldown-back">
                                <a tabIndex={0}>Geri Dön</a>
                              </li>
                              <li
                                data-is-parent-link
                                className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item"
                                role="menuitem"
                              >
                                <Link href="/about">
                                <a>
                                  <span>Biz Kimiz</span>
                                </a>
                                </Link>
                              </li>
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3296 is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                              >
                                <a href="https://barberry.temashdesign.com/demo-furniture/?header_layout=offcanvas">
                                  <span>Offcanvas header menu</span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3703 is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                              >
                                <a href="https://barberry.temashdesign.com/demo-furniture/?header_layout=left">
                                  <span>Left logo header</span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3783 is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                              >
                                <a href="https://barberry.temashdesign.com/demo-furniture/?header_layout=offcanvas&topbar_toggle=1">
                                  <span>
                                    Header with Top Bar (Languages &amp;
                                    Currency)
                                  </span>
                                </a>
                              </li>
                              <li
                                onClick={(e) => this.subMenu(e)}
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3301 is-drilldown-submenu-parent is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                                aria-haspopup="true"
                                aria-label="Pages"
                                aria-expanded="false"
                              >
                                <a tabIndex={0}>
                                  <span>Pages</span>
                                </a>
                                <ul
                                  className="menu vertical nested submenu is-drilldown-submenu invisible"
                                  data-submenu
                                  role="group"
                                  aria-hidden="true"
                                >
                                  <li onClick={(e) => this.handleBackSub(e)} className="js-drilldown-back">
                                    <a tabIndex={0}>Back</a>
                                  </li>
                                  <li
                                    data-is-parent-link
                                    className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item"
                                    role="menuitem"
                                  >
                                    <a href="#">
                                      <span>Pages</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3598 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/about-us-dark/">
                                      <span>About Us – Dark</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3802 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/faqs/">
                                      <span>FAQs</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3572 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/contact/">
                                      <span>Contact</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3563 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/contact-map/">
                                      <span>Contact – with map</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3300 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
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
                            onClick={(e) => this.subMenu(e)}
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2135 is-drilldown-submenu-parent"
                            role="treeitem"
                            aria-haspopup="true"
                            aria-label="The Shop"
                            aria-expanded="false"
                          >
                            <a tabIndex={0}>
                              <span>Erkek</span>
                            </a>
                            <ul
                              className="menu vertical nested submenu is-drilldown-submenu invisible"
                              data-submenu
                              role="group"
                              aria-hidden="true"
                            >
                              <li onClick={(e) => this.handleBack(e)} className="js-drilldown-back">
                                <a tabIndex={0}>Geri Dön</a>
                              </li>
                              <li
                                data-is-parent-link
                                className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item"
                                role="menuitem"
                              >
                                <Link href="/category">
                                <a>
                                  <span>Eşofman</span>
                                </a>
                                </Link>
                              </li>
                              <li
                                data-is-parent-link
                                className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item"
                                role="menuitem"
                              >
                                <Link href="/category">
                                <a>
                                  <span>Şort</span>
                                </a>
                                </Link>
                              </li>
                              <li
                              onClick={(e) => this.subMenu(e)}
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29 is-drilldown-submenu-parent is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                                aria-haspopup="true"
                                aria-label="Shop Layout"
                                aria-expanded="false"
                              >
                                <a tabIndex={0}>
                                  <span>Shop Layout</span>
                                </a>
                                <ul
                                  className="menu vertical nested submenu is-drilldown-submenu invisible"
                                  data-submenu
                                  role="group"
                                  aria-hidden="true"
                                >
                                  <li onClick={(e) => this.handleBackSub(e)} className="js-drilldown-back">
                                    <a tabIndex={0}>Back</a>
                                  </li>
                                  <li
                                    data-is-parent-link
                                    className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item"
                                    role="menuitem"
                                  >
                                    <a>
                                      <span>Shop Layout</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3280 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/shop/">
                                      <span>With Sidebar</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-30 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/shop/?shop_sidebar=0&products_per_row=4">
                                      <span>No Sidebar</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-31 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/shop/?products_per_row=4&products_layout=product-grid-layout-1">
                                      <span>Classic Product Style</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3394 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/product-category/livingroom/">
                                      <span>Category with background</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3287 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/shop/?products_per_row=3">
                                      <span>Shop – 3 Columns</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-176 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/shop/?products_per_row=4">
                                      <span>Shop – 4 Columns</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3295 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/shop/?header_layout=offcanvas">
                                      <span>Offcanvas header menu</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                              onClick={(e) => this.subMenu(e)}
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-32 is-drilldown-submenu-parent is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                                aria-haspopup="true"
                                aria-label="Product Layout"
                                aria-expanded="false"
                              >
                                <a tabIndex={0}>
                                  <span>Product Layout</span>
                                </a>
                                <ul
                                  className="menu vertical nested submenu is-drilldown-submenu invisible"
                                  data-submenu
                                  role="group"
                                  aria-hidden="true"
                                >
                                  <li onClick={(e) => this.handleBackSub(e)} className="js-drilldown-back">
                                    <a tabIndex={0}>Back</a>
                                  </li>
                                  <li
                                    data-is-parent-link
                                    className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item"
                                    role="menuitem"
                                  >
                                    <a href="#">
                                      <span>Product Layout</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3288 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/product/spot-table-lamp/">
                                      <span>Product – Style 1</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3289 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/product/lounge-chair/">
                                      <span>Product – Style 2</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3290 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/product/aliquam-venenatis-bathtub/">
                                      <span>Product – Style 3</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3849 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/product/commodo-blown-lamp/?product_sidebar=1">
                                      <span>Product – with sidebar</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3291 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/product/commodo-blown-lamp/">
                                      <span>Simple product (On Sale)</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3292 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/product/spot-table-lamp/">
                                      <span>Variable product</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3418 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/product/libero-headphones/">
                                      <span>
                                        Variable product with description
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-product menu-item-3293 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/product/vulputate-mixer/">
                                      <span>Grouped product</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                              onClick={(e) => this.subMenu(e)}
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-174 is-drilldown-submenu-parent is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                                aria-haspopup="true"
                                aria-label="Other Pages"
                                aria-expanded="false"
                              >
                                <a tabIndex={0}>
                                  <span>Other Pages</span>
                                </a>
                                <ul
                                  className="menu vertical nested submenu is-drilldown-submenu invisible"
                                  data-submenu
                                  role="group"
                                  aria-hidden="true"
                                >
                                  <li onClick={(e) => this.handleBackSub(e)} className="js-drilldown-back">
                                    <a tabIndex={0}>Back</a>
                                  </li>
                                  <li
                                    data-is-parent-link
                                    className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item"
                                    role="menuitem"
                                  >
                                    <a href="#">
                                      <span>Other Pages</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2143 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/cart/">
                                      <span>Cart</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2922 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/checkout/">
                                      <span>Checkout</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2921 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/my-account/">
                                      <span>My account</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3066 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/order-tracking/">
                                      <span>Order Tracking</span>
                                    </a>
                                  </li>
                                  <li
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3286 is-submenu-item is-drilldown-submenu-item"
                                    role="treeitem"
                                  >
                                    <a href="https://barberry.temashdesign.com/demo-furniture/wishlist/">
                                      <span>Wishlist</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li
                            onClick={(e) => this.subMenu(e)}
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3497 is-drilldown-submenu-parent"
                            role="treeitem"
                            aria-haspopup="true"
                            aria-label="The Blog"
                            aria-expanded="false"
                          >
                            <a tabIndex={0}>
                              <span>Blog</span>
                            </a>
                            <ul
                              className="menu vertical nested submenu is-drilldown-submenu invisible"
                              data-submenu
                              role="group"
                              aria-hidden="true"
                            >
                              <li onClick={(e) => this.handleBack(e)} className="js-drilldown-back">
                                <a tabIndex={0}>Geri Dön</a>
                              </li>
                              <li
                                data-is-parent-link
                                className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item"
                                role="menuitem"
                              >
                                <Link href="/blog">
                                <a>
                                  <span>Blog</span>
                                </a>
                                </Link>
                              </li>
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3498 is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                              >
                                <a href="https://barberry.temashdesign.com/demo-furniture/blog/">
                                  <span>Blog – Listing</span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-3244 is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                              >
                                <a href="https://barberry.temashdesign.com/demo-furniture/classics-from-yesterday-and-tomorrow-now-together/">
                                  <span>Blog – Post</span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3398 is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                              >
                                <a href="https://barberry.temashdesign.com/demo-furniture/classics-from-yesterday-and-tomorrow-now-together/?blog_single_sidebar=1">
                                  <span>Blog – Post with sidebar</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="header-mobiles-account-menu">
                      <div
                        className="is-drilldown animate-height"
                        style={{ height: "104.653px", maxWidth: "500px" }}
                      >
                        <ul
                          className="vertical menu drilldown mobile-menu"
                          data-drilldown
                          data-close-on-click="true"
                          data-auto-height="true"
                          data-animate-height="true"
                          data-back-button='<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
                          role="tree"
                          aria-multiselectable="false"
                          data-mutate="416yce-drilldown"
                          data-n="42jcqe-n"
                        >
                          <li 
                            onClick={() => this.headLoginModal()}
                            className="offcanvas-my-account-link"
                            role="treeitem"
                          >
                            <a>
                              <span>My account</span>
                            </a>
                          </li>
                          <li
                            className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--wishlist "
                            role="treeitem"
                          >
                            <a href="https://barberry.temashdesign.com/demo-furniture/wishlist/">
                              <span>Wishlist</span>
                            </a>
                          </li>
                          <li className="compare-mob-link" role="treeitem">
                            <a
                              href="https://barberry.temashdesign.com/demo-furniture/compare/"
                              className="barberry-show-compare-mob"
                            >
                              <span>Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* end offcanvas-navs */}
                  <div className="offcanvas-bottom">
                    <hr className="menu-horizontal-rule" />
                    <ul className="social-icons">
                      <li className="facebook">
                        <a target="_blank" title="Facebook" href="#">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-facebook" />
                          </svg>
                          <span className="s-circle_bg" />
                        </a>
                      </li>
                      <li className="twitter">
                        <a target="_blank" title="Twitter" href="#">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-twitter" />
                          </svg>
                          <span className="s-circle_bg" />
                        </a>
                      </li>
                      <li className="pinterest">
                        <a target="_blank" title="Pinterest" href="#">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-pinterest" />
                          </svg>
                          <span className="s-circle_bg" />
                        </a>
                      </li>
                      <li className="instagram">
                        <a target="_blank" title="Instagram" href="#">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-instagram" />
                          </svg>
                          <span className="s-circle_bg" />
                        </a>
                      </li>
                      <li className="youtube">
                        <a target="_blank" title="YouTube" href="#">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-youtube" />
                          </svg>
                          <span className="s-circle_bg" />
                        </a>
                      </li>
                    </ul>
                    {/* begin offcanvas-contact-section */}
                    <div className="offcanvas-contact-section">
                      <div className="offcanvas-contact">
                        <a href="mailto:info@bafk.com.tr">info@bafk.com.tr</a>
                        <br />
                        <a href="tel:+902122941112">+90 (212) 294 11 12</a>
                        <br />
                      </div>
                    </div>
                    {/* end offcanvas-contact-section */}
                  </div>
                </div>
              </div>
            </div>
            <div className="nano-pane" style={{ display: "none" }}>
              <div
                className="nano-slider"
                style={{ height: "993px", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
        </div>
        <div id="myOverlay" className="offcanvas_overlay"></div>
      </Fragment>
    );
  }
}

export default Overlay;
