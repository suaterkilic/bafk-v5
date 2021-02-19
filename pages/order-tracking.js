import React, { Fragment } from "react";
import Layout from "../components/layout.js";

const OrderTracking = () => {
  return (
    <Fragment>
      <div
        id="myBody"
        className="page-template-default page page-id-3064 wp-embed-responsive theme-barberry woocommerce-js wpb-js-composer js-comp-ver-6.5.0 vc_responsive no-offcanvas-animation header-has-title header-has-overlap catalog-ajax-filter posts-has-parallax bb_classic_notif notice_clickable tag-cloud-equal buy_now_enable"
        footer-data="1"
      >
        <Layout>
          <div className="page-header page-title-default title-size-default title-design-default color-scheme-dark">
            {/* begin title-section */}
            <div
              className="title-section grid-container"
              data-parallax='{"y" : -40, "smoothness": 10}'
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                WebkitTransform:
                  "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
              }}
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
                      <span className="current">Sipariş Takibi</span>
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
                      Sipariş Takibi{" "}
                    </h1>
                  </div>
                  {/* end .page-title-wrapper */}
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
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              />
            </div>
            {/* end .page-title-wrapper */}
          </div>

          <div
            id="primary"
            className="order-tracking-content default-width-page content-area"
            style={{
              marginBottom: "451.188px",
              opacity: 1,
              visibility: "inherit",
              paddingTop: 0
            }}
          >
            {/* begin site-content */}
            <div id="content" className="site-content" role="main">
              {/* begin grid-container */}
              <div className="grid-container content-page-wrapper">
                {/* begin grid-x */}
                <div className="grid-x grid-margin-x">
                  {/* begin cell */}
                  <div className="cell large-12">
                    <article
                      id="post-3064"
                      className="post-3064 page type-page status-publish hentry"
                    >
                      <div className="entry-content">
                        <div className="woocommerce">
                          {/* begin grid-x */}
                          <div className="grid-x">
                            {/* begin cell */}
                            <div className="cell medium-8 large-6 medium-offset-2 large-offset-3">
                              <form
                                action="https://bafk.com.tr/siparis-takibi/"
                                method="post"
                                className="woocommerce-form woocommerce-form-track-order track_order"
                              >
                                <div className="track-order-inner">
                                  <p>
                                    Siparişinizi takip etmek için lütfen
                                    aşağıdaki kutuya sipariş numaranızı girin ve
                                    Takip Et butonuna tıklayın. Size gönderilen
                                    sipariş onay e-postasında sipariş numaranızı
                                    bulabilirsiniz.
                                  </p>
                                  <p className="form-row form-row-first">
                                    <label htmlFor="orderid">
                                      Sipariş numarası
                                    </label>{" "}
                                    <input
                                      className="input-text"
                                      type="text"
                                      name="orderid"
                                      id="orderid"
                                      defaultValue
                                      placeholder="Sipariş onay e-postasında bulunur."
                                    />
                                  </p>{" "}
                                  <p className="form-row form-row-last">
                                    <label htmlFor="order_email">
                                      Fatura e-posta adresi
                                    </label>{" "}
                                    <input
                                      className="input-text"
                                      type="text"
                                      name="order_email"
                                      id="order_email"
                                      defaultValue
                                      placeholder="Ödeme sırasında kullanmış olduğunuz e-posta adresi."
                                    />
                                  </p>{" "}
                                  <div className="clear" />
                                  <p className="form-row">
                                    <button
                                      type="submit"
                                      className="button"
                                      name="track"
                                      value="Takip et"
                                    >
                                      Takip et
                                    </button>
                                  </p>
                                  <input
                                    type="hidden"
                                    id="woocommerce-order-tracking-nonce"
                                    name="woocommerce-order-tracking-nonce"
                                    defaultValue="4092328a46"
                                  />
                                  <input
                                    type="hidden"
                                    name="_wp_http_referer"
                                    defaultValue="/siparis-takibi/"
                                  />
                                </div>
                              </form>
                            </div>
                            {/* end cell small-4 large-offset-2 */}
                          </div>
                          {/* end grid-x */}
                        </div>
                      </div>
                      {/* .entry-content */}
                    </article>
                    {/* #post */}
                  </div>
                  {/* end cell large-12 */}
                </div>
                {/* end grid-x */}
              </div>
              {/* end grid-container */}
            </div>
            {/* end site-content */}
            <div className="prefooter" />
          </div>
        </Layout>
      </div>
    </Fragment>
  );
};

export default OrderTracking;
