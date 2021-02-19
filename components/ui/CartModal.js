import React, { Fragment } from "react";
import Link from "next/link";

class CartModal extends React.Component {
  constructor(props) {
    super(props);
  }

  closeCartModal = () => {
      const myBody = document.getElementById("myBody");
      myBody.classList.remove("offcanvas_right","lock-scroll");

      /*setTimeout(() => {
        myBody.classList.remove("offcanvas_open");
      }, 200)*/

      const myOverlay = document.getElementById("myOverlay");
      myOverlay.classList.add('overlayHide')
      setTimeout(() => {
        myOverlay.classList.remove("toggle_menu_overlay");
      }, 200)

    /*const myCart = document.getElementById("myCart");
    myCart.style.visibility = "hidden";*/
  };

  render() {
    return (
      <Fragment>
        <div id="myCart" className="offcanvas_aside offcanvas_aside_right">
          <div className="offcanvas_aside_content">
            <div className="offcanvas_minicart">
              <div className="offcanvas_header">
                <div onClick={() => this.closeCartModal()} className="close-icon">
                  <span className="close-icon_top" />
                  <span className="close-icon_bottom" />
                </div>
              </div>
              <div className="widget woocommerce widget_shopping_cart">
                <h2 className="widgettitle">Sepet</h2>
                <div className="widget_shopping_cart_content">
                  <div className="shopping-cart-widget-body nano has-scrollbar">
                    <div
                      className="nano-content"
                      tabIndex={0}
                      style={{ right: "-19px" }}
                    >
                      <ul className="cart_list product_list_widget woocommerce-mini-cart ">
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                          <div className="mini-cart-thumbnail">
                            <a
                              className="remove remove_from_cart_button"
                              aria-label="Bu ürünü çıkar"
                            >
                              ×
                            </a>
                            <Link href="/product">
                            <a
                              className="cart-item-image"
                            >
                              <img
                                width={500}
                                height={700}
                                src="/images/cart/1.jpg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />{" "}
                            </a>
                            </Link>
                          </div>
                          <div className="mini-cart-content">
                            <div className="mini-cart-title">
                              <Link href="/product">
                              <a>
                                Basis Zip Through Hooide Grey - S{" "}
                              </a>
                              </Link>
                              <div
                                className="product-quantity"
                                data-title="Miktar"
                              >
                                1{" "}
                              </div>
                            </div>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  89<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>{" "}
                          </div>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                          <div className="mini-cart-thumbnail">
                            <Link href="/product">
                            <a
                              className="remove remove_from_cart_button"
                              aria-label="Bu ürünü çıkar"
                              data-product_id={3967}
                            >
                              ×
                            </a>
                            </Link>
                            <Link href="/product">

                            <a
                              className="cart-item-image"
                            >
                              <img
                                width={500}
                                height={700}
                                src="/images/cart/2.jpg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />{" "}
                            </a>
                            </Link>

                          </div>
                          <div className="mini-cart-content">
                            <div className="mini-cart-title">
                            <Link href="/product">
                              <a>
                                Basis Zip Througr Hoodie Black - L{" "}
                              </a>
                            </Link>

                              <div
                                className="product-quantity"
                                data-title="Miktar"
                              >
                                1{" "}
                              </div>
                            </div>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  39<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>{" "}
                          </div>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                          <div className="mini-cart-thumbnail">
                            <a
                              className="remove remove_from_cart_button"
                              aria-label="Bu ürünü çıkar"
                              data-product_id={4002}
                              data-cart_item_key="bb45e9283a29a8971776bbf21387d422"
                              data-product_sku={8556310025}
                            >
                              ×
                            </a>
                            <Link href="/product">

                            <a
                              className="cart-item-image"
                            >
                              <img
                                width={500}
                                height={700}
                                src="/images/cart/1.jpg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />{" "}
                            </a>
                            </Link>
                          </div>
                          <div className="mini-cart-content">
                            <div className="mini-cart-title">
                              <Link href="/product">
                              <a>
                                Contrast Core Plus Poly Tracksuit Top Blue - M{" "}
                              </a>
                              </Link>
                              <div
                                className="product-quantity"
                                data-title="Miktar"
                              >
                                1{" "}
                                <input
                                  type="hidden"
                                  name="cart[bb45e9283a29a8971776bbf21387d422][qty]"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  99<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>{" "}
                          </div>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                          <div className="mini-cart-thumbnail">
                            <a
                              className="remove remove_from_cart_button"
                              aria-label="Bu ürünü çıkar"
                              data-product_id={3986}
                              data-cart_item_key="4bd7f39d3d0c98d9c854d1ddb5a55487"
                              data-product_sku={8232532350}
                            >
                              ×
                            </a>
                            <Link href="/product">
                            <a
                              className="cart-item-image"
                            >
                              <img
                                width={500}
                                height={700}
                                src="/images/cart/3.jpg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />{" "}
                            </a>
                            </Link>
                          </div>
                          <div className="mini-cart-content">
                            <div className="mini-cart-title">
                              <Link href="/product">
                              <a>
                                Basis Zip Through Hooide Grey - M{" "}
                              </a>
                              </Link>
                              <div
                                className="product-quantity"
                                data-title="Miktar"
                              >
                                1{" "}
                                <input
                                  type="hidden"
                                  name="cart[4bd7f39d3d0c98d9c854d1ddb5a55487][qty]"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  89<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>{" "}
                          </div>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                          <div className="mini-cart-thumbnail">
                            <a
                              className="remove remove_from_cart_button"
                              aria-label="Bu ürünü çıkar"
                              data-product_id={4106}
                              data-cart_item_key="77065a3dca8cfff7e00a6594534d6f4b"
                              data-product_sku="8542100221-1-1-1"
                            >
                              ×
                            </a>
                            <Link href="/product">
                            <a
                              className="cart-item-image"
                            >
                              <img
                                width={500}
                                height={700}
                                src="/images/cart/5.jpeg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />{" "}
                            </a>
                            </Link>
                          </div>
                          <div className="mini-cart-content">
                            <div className="mini-cart-title">
                              <Link href="/product">
                              <a>
                                BAFK Gri Yanları Şeritli Eşofman Takımı - M{" "}
                              </a>
                              </Link>
                              <div
                                className="product-quantity"
                                data-title="Miktar"
                              >
                                1{" "}
                                <input
                                  type="hidden"
                                  name="cart[77065a3dca8cfff7e00a6594534d6f4b][qty]"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  69<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>{" "}
                          </div>
                        </li>
                      </ul>
                      {/* end product list */}
                    </div>
                    <div className="nano-pane">
                      <div
                        className="nano-slider"
                        style={{
                          height: "638px",
                          transform: "translate(0px, 0px)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="shopping-cart-widget-footer">
                    <hr className="cart-horizontal-rule" />
                    <p className="woocommerce-mini-cart__total total">
                      <strong>Ara toplam:</strong>{" "}
                      <span className="amount">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              ₺
                            </span>
                            389<sup>,50</sup>
                          </bdi>
                        </span>
                      </span>{" "}
                    </p>
                    <p className="woocommerce-mini-cart__buttons buttons">
                      <Link href="/cart">
                        <a className="button wc-forward cart-but">
                          <span>Sepeti görüntüle</span>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="button btn-blk checkout wc-forward">
                          <span>Ödeme</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CartModal;
