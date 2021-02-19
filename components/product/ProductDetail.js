import React, { Fragment } from "react";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.setState({
      isVideo: false
    })
  }

  hideFlash = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 760) {
      const sizeWarning = document.getElementById("sizeWarning");
      sizeWarning.classList.add("sizeOpacity");
      sizeWarning.classList.remove("select-size-text-animate");
    }
  };

  handleVideo = () => {
    const myBody = document.getElementById("myBody");
    myBody.classList.add("photoswipe-blur");

    document.getElementById("videoOverlay").classList.add("active");
    document.getElementById("videoContainer").classList.add("active");

    this.props.hasVideo(true);

    this.setState({
      isVideo: true
    })

  };

  render() {
    let productSummary;
    let productExplain;

    if (this.props.showSizeTable === true) {
      productSummary = "productSummary";
      productExplain = "productExplain";
    }
    return (
      <Fragment>
        <div className="grid-x product-cells align-center">
          {/* begin cell */}
          <div className="cell large-12 xlarge-10 xxlarge-9">
            <div className="woocommerce-notices-wrapper" />
            {/* begin grid-x */}
            <div className="grid-x">
              {/* begin product-images-cell */}
              <div className="product-images-cell cell small-12 medium-5 large-6  thumbs-right">
                <div className="product-images-wrapper">
                  <div
                    className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images barberry-images"
                    data-columns={4}
                  >
                    {/* begin product-images-inner */}
                    <div className="product-images-inner">
                      <div className="product_tool_buttons_placeholder">
                        <div
                          onClick={() => this.handleVideo()}
                          className="single_product_video_trigger"
                        >
                          <span className="tooltip">Play Video</span>
                        </div>
                      </div>
                      {/* begin product-image-wrapper */}
                      <div className="product-image-wrapper">
                        <figure
                          id="product-images"
                          className="woocommerce-product-gallery__wrapper"
                          style={{
                            opacity: 1,
                            visibility: "inherit",
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <div
                            data-thumb="https://bafk.com.tr/wp-content/uploads/2020/09/gym-king-basis-tracksuit-grey-marl__48_2_2048x2048-200x200.jpg"
                            className="woocommerce-product-gallery__image product-gallery-cell"
                          >
                            <img
                              width={1251}
                              height={1732}
                              src="wp-content/uploads/2020/09/gym-king-basis-tracksuit-grey-marl__48_2_2048x2048-1251x1732.jpg"
                              className="single-product-img wp-post-image"
                              alt=""
                              loading="lazy"
                              title="gym-king-basis-tracksuit-grey-marl__48_2_2048x2048"
                              data-caption
                              data-src="https://bafk.com.tr/wp-content/uploads/2020/09/gym-king-basis-tracksuit-grey-marl__48_2_2048x2048.jpg"
                              data-large_image="https://bafk.com.tr/wp-content/uploads/2020/09/gym-king-basis-tracksuit-grey-marl__48_2_2048x2048.jpg"
                              data-flickity-lazyload="https://bafk.com.tr/wp-content/uploads/2020/09/gym-king-basis-tracksuit-grey-marl__48_2_2048x2048.jpg"
                              data-large_image_width={1479}
                              data-large_image_height={2048}
                              srcSet="/images/product/sweat.jpg"
                              sizes="(max-width: 1251px) 100vw, 1251px"
                            />
                          </div>
                        </figure>
                      </div>
                      {/* end product-image-wrapper */}
                    </div>

                    <div className="product-vr-thumbnails-wrapper">
                      {/* begin product-thumbnails */}
                      <div
                        className="product-vr-thumbnails-container shadow"
                        data-thumb={4}
                        data-parallax='{"y" : 30, "smoothness": 20}'
                        style={{ opacity: 1 }}
                      >
                        {/* begin product-thumbnails */}
                        <div
                          className="product-vr-thumbnails"
                          style={{
                            opacity: 1,
                            visibility: "inherit",
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <div className="woocommerce-product-thumb__image is-nav-selected">
                            <img
                              alt=""
                              title="gym-king-basis-tracksuit-grey-marl__48_2_2048x2048"
                              src="/images/product/s1.jpg"
                            />
                          </div>
                          <div className="woocommerce-product-thumb__image">
                            <img
                              alt=""
                              title="gym-king-basis-tracksuit-grey-marl__47_2_2048x2048"
                              src="/images/product/s2.jpg"
                            />
                          </div>
                          <div className="woocommerce-product-thumb__image">
                            <img
                              alt=""
                              title="gym-king-basis-tracksuit-grey-marl__43_2_2048x2048"
                              src="/images/product/s3.jpg"
                            />
                          </div>
                          <div className="woocommerce-product-thumb__image">
                            <img
                              alt=""
                              title="gym-king-basis-tracksuit-grey-marl__45_2"
                              src="/images/product/s4.jpg"
                            />
                          </div>
                        </div>
                        {/* end product-thumbnails */}
                      </div>
                      {/* end product-thumbnails-container */}
                    </div>

                    {/* end product-vr-thumbnails-wrapper */}
                    {/* begin product-thumbnails-wrapper */}
                    <div className="product-thumbnails-wrapper">
                      {/* begin product-thumbnails */}
                      <div
                        className="product-thumbnails-container"
                        data-thumb={4}
                        data-parallax='{"y" : 30, "smoothness": 20}'
                      >
                        {/* begin product-thumbnails */}
                        <div className="product-thumbnails"></div>
                        {/* end product-thumbnails */}
                      </div>
                      {/* end product-thumbnails-container */}
                    </div>
                    {/* end product-thumbnails-wrapper */}
                  </div>
                </div>
              </div>
              {/* end product-images-cell */}
              {/* begin product-info-cell */}
              <div className="product-info-cell cell small-12 medium-7 large-6">
                {/* <div class="product-info-wrapper" data-parallax='{"y" : -100, "smoothness": 10}'> */}
                <div className="product-info-wrapper">
                  {/* begin product_summary_top */}
                  <div className="product_summary_top">
                    {/* begin title-wrapper */}
                    <div className="product-text-center title-wrapper">
                      <div className="breadcrumbs-wrapper">
                        <div className="breadcrumbs" itemProp="breadcrumb">
                          <span>
                            <a href="index.html">Home</a>
                          </span>
                          <span className="delimiter">/</span>
                          <span>
                            <a href="urun-kategori/erkek-esofmanlari/index.html">
                              Erkek Eşofmanlari
                            </a>
                          </span>
                          <span className="delimiter">/</span>
                          <span>Basis Zip Through Hooide Grey</span>
                        </div>
                      </div>
                      {/* begin page-title-wrapper */}
                      <div className="page-title-wrapper">
                        <h1 className="product_title entry-title">
                          Basis Zip Through Hooide Grey
                        </h1>
                      </div>
                      {/* end page-title-wrapper */}
                    </div>
                    {/* end title-wrapper */}
                  </div>
                  {/* end product_summary_top */}
                  {/* begin product_summary_middle */}
                  <div className="product_summary_middle">
                    <p className="price">
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
                      </del>{" "}
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
                    </p>
                    <div className="woocommerce-product-details__short-description">
                      <p className={productExplain}>
                        6 yaşımda aşçı olmak istedim. 7 yaşımda Napolyon olmak
                        istedim. Hırsım o gün bugündür düzenli bir şekilde
                        artmayı sürdürüyor.
                      </p>
                      {this.props.showSizeTable == true && (
                        <span
                          id="sizeWarning"
                          className="select-size-span select-size-text-animate"
                        >
                          Beden Seç
                        </span>
                      )}
                    </div>
                  </div>
                  {/* end product_summary_middle */}
                  {/* begin product_summary_middle */}
                  <div className={productSummary + " product_summary_bottom"}>
                    <form
                      className="variations_form cart"
                      action="https://bafk.com.tr/product/basis-zip-through-hooide-grey/"
                      method="post"
                      encType="multipart/form-data"
                      data-product_id={3986}
                    >
                      <table className="variations" cellSpacing={0}>
                        <tbody>
                          <tr>
                            <td className="label">
                              <label htmlFor="pa_beden">Beden</label>
                            </td>
                            <td className="value">
                              <div className="variation-selector variation-select-label hidden">
                                <select
                                  id="pa_beden"
                                  className
                                  name="attribute_pa_beden"
                                  data-attribute_name="attribute_pa_beden"
                                  data-show_option_none="yes"
                                >
                                  <option value>Bir seçim yapın</option>
                                  <option value="xs">XS</option>
                                  <option value="s">S</option>
                                  <option value="m">M</option>
                                  <option value="l">L</option>
                                  <option value="xl">XL</option>
                                  <option value="xxl">XXL</option>
                                </select>
                              </div>
                              <div
                                className="product-size-section tawcvs-swatches"
                                data-attribute_name="attribute_pa_beden"
                              >
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-xs "
                                  data-value="xs"
                                >
                                  XS<span className="swatch__tooltip">XS</span>
                                </span>
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-s "
                                  data-value="s"
                                >
                                  S<span className="swatch__tooltip">S</span>
                                </span>
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-m "
                                  data-value="m"
                                >
                                  M<span className="swatch__tooltip">M</span>
                                </span>
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-l "
                                  data-value="l"
                                >
                                  L<span className="swatch__tooltip">L</span>
                                </span>
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-xl "
                                  data-value="xl"
                                >
                                  XL<span className="swatch__tooltip">XL</span>
                                </span>
                                <span
                                  onClick={() => this.hideFlash()}
                                  className="swatch swatch-label swatch-xxl "
                                  data-value="xxl"
                                >
                                  XXL
                                  <span className="swatch__tooltip">XXL</span>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="single_variation_wrap">
                        <div className="woocommerce-variation single_variation" />
                        <div className="woocommerce-variation-add-to-cart variations_button">
                          <div className="addtocart-button-group">
                            <div className="quantity hidden">
                              <input
                                type="hidden"
                                id="quantity_6021129dc13c5"
                                className="qty"
                                name="quantity"
                                defaultValue={1}
                              />
                            </div>
                            <div className="button-group-inner">
                              <div className="addtocart-button-group-inner ">
                                <button
                                  type="submit"
                                  className="product-insert-to-cart single_add_to_cart_button button alt progress-btn"
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
                        </div>
                      </div>
                    </form>
                    <div
                      id="footer-cart-position"
                      className="product_summary_bottom_inner"
                    >
                      <div
                        className="yith-wcwl-add-to-wishlist add-to-wishlist-3986  wishlist-fragment on-first-load"
                        data-fragment-ref={3986}
                        data-fragment-options='{"base_url":"","in_default_wishlist":false,"is_single":true,"show_exists":false,"product_id":3986,"parent_product_id":3986,"product_type":"variable","show_view":true,"browse_wishlist_text":"Favorilerim","already_in_wishslist_text":"\u00dcr\u00fcn Zaten Favorilerinizde.","product_added_text":"Favorilere Eklendi","heading_icon":"fa-heart-o","available_multi_wishlist":false,"disable_wishlist":false,"show_count":false,"ajax_loading":false,"loop_position":"after_add_to_cart","item":"add_to_wishlist"}'
                      >
                        {/* ADD TO WISHLIST */}
                        <div className="yith-wcwl-add-button">
                          <a
                            href="index6417.html?add_to_wishlist=3986"
                            rel="nofollow"
                            data-product-id={3986}
                            data-product-type="variable"
                            data-original-product-id={3986}
                            className="add_to_wishlist single_add_to_wishlist"
                            data-title="Favorilere Ekle"
                          >
                            <i className="yith-wcwl-icon fa fa-heart-o" />{" "}
                            <span className="product-fav">Favorilere Ekle</span>
                          </a>
                        </div>

                        {/* COUNT TEXT */}
                      </div>
                      <style
                        type="text/css"
                        data-type="vc_shortcodes-custom-css"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                                   /* */\n                                                ",
                        }}
                      />
                      <div className="sizeguide-link">
                        <a
                          data-open="sizeGuideModal"
                          className="product-size-guide barberry-open-popup barberry-sizeguide-btn"
                        >
                          Beden Tablosu
                        </a>
                      </div>
                      <div className="sizeguide-link">
                        <a
                          data-open="sizeGuideModal"
                          className="product-size-guide barberry-open-popup barberry-sizeguide-btn"
                        >
                          Yorumlar
                        </a>
                      </div>
                      <div
                        className="reveal"
                        id="sizeGuideModal"
                        data-reveal
                        data-close-on-click="true"
                        data-animation-in="fade-in"
                        data-animation-out="fade-out"
                      >
                        <div className="nano">
                          <div className="nano-content">
                            <h3 className="barberry-sizeguide-title">
                              Tişört Beden Tablosu
                            </h3>
                            <div className="barberry-sizeguide-content">
                              <img
                                className="aligncenter wp-image-3882 size-full"
                                src="wp-content/uploads/2020/09/beden.png"
                                alt=""
                                width={998}
                                height={678}
                              />
                            </div>
                            <div className="table-scroll">
                              <table className="barberry-sizeguide-table">
                                <tbody>
                                  <tr>
                                    <td>Size</td>
                                    <td>UK</td>
                                    <td>US</td>
                                    <td>EU</td>
                                    <td>Japan</td>
                                  </tr>
                                  <tr>
                                    <td>XS</td>
                                    <td>6 - 8</td>
                                    <td>4</td>
                                    <td>34</td>
                                    <td>7</td>
                                  </tr>
                                  <tr>
                                    <td>S</td>
                                    <td>8 -10</td>
                                    <td>6</td>
                                    <td>36</td>
                                    <td>9</td>
                                  </tr>
                                  <tr>
                                    <td>M</td>
                                    <td>10 - 12</td>
                                    <td>8</td>
                                    <td>38</td>
                                    <td>11</td>
                                  </tr>
                                  <tr>
                                    <td>L</td>
                                    <td>12 - 14</td>
                                    <td>10</td>
                                    <td>40</td>
                                    <td>13</td>
                                  </tr>
                                  <tr>
                                    <td>XL</td>
                                    <td>14 - 16</td>
                                    <td>12</td>
                                    <td>42</td>
                                    <td>15</td>
                                  </tr>
                                  <tr>
                                    <td>XXL</td>
                                    <td>16 - 28</td>
                                    <td>14</td>
                                    <td>44</td>
                                    <td>17</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div
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
                    </div>
                  </div>
                  {/* end product_summary_middle */}
                </div>
              </div>
              {/* end product-info-cell */}
            </div>
            {/* end grid-x */}
          </div>
          {/* end cell */}
        </div>
        <div id="videoOverlay" className="single_video_overlay"></div>

      </Fragment>
    );
  }
}

export default ProductDetail;
