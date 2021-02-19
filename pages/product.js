import React, { Fragment } from "react";
import Layout from "../components/layout";
import ProductDetail from "../components/product/ProductDetail";
import ProductBanner from "../components/product/ProductBanner";
import ProductInterview from "../components/product/ProductInterview";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addToCartFooter: "",
      cartFixed: "",
      showSizeTable: false,
      isVideo: false
    };

    this.selector = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  isVideoActive = () => {
    if(this.state.isVideo === true){
      document.getElementById('myBody').classList.add('photoswipe-blur')
    }
  }
  
  handleScroll = () => {
    const windowWidth = window.innerWidth;

    if (!this.selector.current) {
      return 0;
    } else {
      if (windowWidth >= 760) {
        if (
          Math.ceil(window.scrollY) >
          Math.ceil(this.selector.current.getBoundingClientRect().top) + 100
        ) {
          this.setState({
            addToCartFooter: "barberry-has-cart-fixed",
            cartFixed: false,
          });

          this.isVideoActive();

        } else {
          const cartBtn = document.getElementById("footer-cart-position");

          if (window.scrollY > cartBtn.offsetTop + cartBtn.offsetHeight) {
            this.setState({
              addToCartFooter: "",
            });
          this.isVideoActive();

          }
        }
      } else if (windowWidth <= 760) {
        if (
          Math.ceil(window.scrollY) >
          Math.ceil(this.selector.current.getBoundingClientRect().top) + 800
        ) {
          this.setState({
            addToCartFooter: "barberry-has-cart-fixed",
            cartFixed: false,
          });
          this.isVideoActive();


        } else {
          const cartBtn = document.getElementById("footer-cart-position");

          if (window.scrollY > cartBtn.offsetTop + cartBtn.offsetHeight) {
            this.setState({
              addToCartFooter: "",
            });
          this.isVideoActive();

          }
        }
      }
    }
  };

  mobileAddToCartTop = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 760) {
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth",
      });

      this.setState({
        showSizeTable: true,
      });

      setTimeout(() => {
        const sizeWarning = document.getElementById("sizeWarning");
        sizeWarning.classList.remove("select-size-text-animate");
      }, 3000);
    }
  };

  videoClose = () => {
    document.getElementById("videoOverlay").classList.remove("active");
    document.getElementById("videoContainer").classList.remove("active");
    
    const myBody = document.getElementById('myBody');
    myBody.classList.remove('photoswipe-blur');

    this.setState({
      isVideo: false
    })

  }

  componentDidMount() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 760) {
      this.setState({
        cartFixed: true,
      });
    }
    window.addEventListener("scroll", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  hasVideo = (data) => {
    if(data === true){
      this.setState({
        isVideo: true
      })
    }
  }


  render() {
    return (
      <>
        <div
          id="myBody"
          footer-data="1"
          className={
            this.state.addToCartFooter +
            " product-template-default single single-product postid-3986 wp-embed-responsive theme-barberry woocommerce woocommerce-page woocommerce-no-js wpb-js-composer js-comp-ver-6.3.0 vc_responsive no-offcanvas-animation header-has-title header-has-overlap catalog-ajax-filter posts-has-parallax has-wishlist bb_classic_notif tag-cloud-default"
          }
          style={{ scrollBehavior: "smooth" }}
        >
          <Layout>
            <div
              id="primary"
              style={{ marginBottom: "534px" }}
              className="footer-parent product-content-area"
            >
              <div id="content" className="site-content" role="main">
                <div className="product_layout product_layout_default ">
                  <div className="products-nav visible displayVisible">
                    <a
                      href="../basis-zip-througr-hoodie/index.html"
                      className="prev-product"
                    >
                      <div className="preview">
                        <div className="intrinsic">
                          <div className="image-center grid-x align-center">
                            <div className="image">
                              <img
                                width={500}
                                height={700}
                                src="/images/product/prev.jpg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="prev-product__text">
                        <p className="link">Prev product</p>
                      </div>
                    </a>
                    <a
                      href="../contrast-core-plus-poly-tracksuit-top-blue/index.html"
                      className="next-product"
                    >
                      <div className="next-product__text">
                        <p className="link">Next Product</p>
                      </div>
                      <div className="preview">
                        <div className="intrinsic">
                          <div className="image-center grid-x align-center">
                            <div className="image">
                              <img
                                width={500}
                                height={700}
                                src="/images/product/next1.jpg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    id="product-3986"
                    className="product type-product post-3986 status-publish first instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable"
                  >
                    <ProductDetail hasVideo={(e) => this.hasVideo(e)} showSizeTable={this.state.showSizeTable} />
                    <div ref={this.selector} id="bannerContent">
                      <ProductBanner />
                    </div>
                    <ProductInterview />
                  </div>
                </div>
              </div>
              <div className="prefooter" />
            </div>
          </Layout>
          {this.state.cartFixed === false && (
            <div id="addToCartFixed" className="barberry-add-to-cart-fixed">
              <div className="barberry-wrap-content-inner">
                <div className="barberry-wrap-content grid-container">
                  <div className="barberry-wrap-content-sections grid-x align-middle">
                    <div className="barberry-fixed-product-info cell shrink">
                      <div className="barberry-thumb-clone">
                        <img src="https://bafk.com.tr/wp-content/uploads/2020/09/gym-king-basis-tracksuit-grey-marl__48_2_2048x2048-200x200.jpg" />
                      </div>
                      <div className="barberry-title-clone">
                        <h3>Basis Zip Through Hooide Grey</h3>
                        <span className="price">
                          <del>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  109<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>
                          </del>
                          <ins>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  89<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>
                          </ins>
                        </span>
                      </div>
                    </div>
                    <div
                      id="barberry-fixed-product-variations-wrap"
                      className="barberry-fixed-product-variations-wrap cell auto"
                    >
                      <div
                        id="barberry-fixed-product-variations"
                        className="barberry-fixed-product-variations"
                      >
                        <div className="barberry-attr-wrap-clone barberry-attr-wrap-1 tawcvs-swatches">
                          <span
                            className="barberry-attr-clone swatch-clone-1 barberry-attr-label-clone barberry-attribute_pa_beden"
                            data-target=".swatch-1"
                          >
                            XS<span className="swatch__tooltip">XS</span>
                          </span>
                          <span
                            className="barberry-attr-clone swatch-clone-2 barberry-attr-label-clone barberry-attribute_pa_beden"
                            data-target=".swatch-2"
                          >
                            S<span className="swatch__tooltip">S</span>
                          </span>
                          <span
                            className="barberry-attr-clone swatch-clone-3 barberry-attr-label-clone barberry-attribute_pa_beden"
                            data-target=".swatch-3"
                          >
                            M<span className="swatch__tooltip">M</span>
                          </span>
                          <span
                            className="barberry-attr-clone swatch-clone-4 barberry-attr-label-clone barberry-attribute_pa_beden"
                            data-target=".swatch-4"
                          >
                            L<span className="swatch__tooltip">L</span>
                          </span>
                          <span
                            className="barberry-attr-clone swatch-clone-5 barberry-attr-label-clone barberry-attribute_pa_beden"
                            data-target=".swatch-5"
                          >
                            XL<span className="swatch__tooltip">XL</span>
                          </span>
                          <span
                            className="barberry-attr-clone swatch-clone-6 barberry-attr-label-clone barberry-attribute_pa_beden"
                            data-target=".swatch-6"
                          >
                            XXL<span className="swatch__tooltip">XXL</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="barberry-fixed-product-btn cell shrink">
                      <div className="barberry-single-btn-clone single_variation_wrap-clone barberry-clone-disable">
                        <div className="woocommerce-variation-add-to-cart-clone">
                          <div className="addtocart-button-group">
                            <div className="quantity hidden">
                              <input
                                type="hidden"
                                className="qty"
                                name="quantity"
                                defaultValue={1}
                              />
                            </div>
                            <div className="button-group-inner">
                              <div className="addtocart-button-group-inner">
                                <button
                                  type="submit"
                                  className="single_add_to_cart_button button alt progress-btn disabled wc-variation-selection-needed"
                                >
                                  <div className="btn-text">Sepete Ekle</div>
                                  <div className="progress" />
                                  <div className="checked" />
                                </button>
                                <input
                                  type="hidden"
                                  name="add-to-cart"
                                  defaultValue={3986}
                                />
                                <input
                                  type="hidden"
                                  name="product_id"
                                  defaultValue={3986}
                                />
                                <input
                                  type="hidden"
                                  name="variation_id"
                                  className="variation_id"
                                  defaultValue={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            id="mobileAddToCartTop"
                            onClick={this.mobileAddToCartTop}
                            className="woocommerce-variation-mob-btn-clone button"
                          >
                            <div className="btn-text">Sepete Ekle</div>
                            <div className="progress" />
                            <div className="checked" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div id="videoContainer" className="single_video_container">
            <div className="youtube-video">
              <iframe
                title="Superfresh Reklamı"
                src="https://player.vimeo.com/video/414210727?dnt=1&app_id=122963"
                width={1280}
                height={720}
                frameBorder={0}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />{" "}
              <div
                onClick={() => this.videoClose()}
                className="close-icon"
                data-close
                aria-label="Close modal"
              >
                <span className="close-icon_top" />
                <span className="close-icon_bottom" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
