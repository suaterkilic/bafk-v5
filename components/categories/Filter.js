import React, { Fragment } from "react";

const Filter = () => {
  return (
    <Fragment>
      <header className="woocommerce-archive-header">
        {/* begin woocommerce-archive-header-inside */}
        <div className="woocommerce-archive-header-inside">
          <div className="product-found">
            <div>
              We've got <span>4</span> products for you
            </div>
          </div>
          <div className="woocommerce-archive-header-tools">
            <form className="woocommerce-ordering" method="get">
              <select name="orderby" className="orderby" aria-label="Sipariş">
                <option value="menu_order" selected="selected">
                  Varsayılan Sıralama
                </option>
                <option value="popularity">
                  En çok incelenene göre sırala
                </option>
                <option value="rating">En çok oy alana göre sırala</option>
                <option value="date">En yeniye göre sırala</option>
                <option value="price">
                  Fiyata göre sırala: Düşükten yükseğe
                </option>
                <option value="price-desc">
                  Fiyata göre sırala: Yüksekten düşüğe
                </option>
              </select>
              <input type="hidden" name="paged" defaultValue={1} />
            </form>
            <button className="button filter_switch" data-toggled="off">
              <span className="f-cross">
                <i className="f-plus" />
              </span>
              <span className="f-switchtext">
                <span className="f-switchword is-show">Filters</span>
                <span className="f-switchword is-close">Close</span>
              </span>
            </button>
          </div>
        </div>
        {/* end woocommerce-archive-header-inside */}
        {/* begin site-shop-filters */}
        <div className="site-shop-filters">
          {/* begin site-shop-filters-inside */}
          <div className="site-shop-filters-inside">
            <aside className="widget-area">
              <div className="grid-x small-up-1 medium-up-3 large-up-4 shop-filters-area-content">
                <div className="cell">
                  <aside
                    id="woocommerce_price_filter-2"
                    className="widget woocommerce widget_price_filter"
                  >
                    <h4 className="widget-title">Filter by price</h4>
                    <form
                      method="get"
                      action="https://bafk.com.tr/erkek-esofmanlari/"
                    >
                      <div className="price_slider_wrapper">
                        <div
                          className="price_slider"
                          style={{ display: "none" }}
                        />
                        <div className="price_slider_amount" data-step={10}>
                          <input
                            type="text"
                            id="min_price"
                            name="min_price"
                            defaultValue={30}
                            data-min={30}
                            placeholder="En düşük fiyat"
                          />
                          <input
                            type="text"
                            id="max_price"
                            name="max_price"
                            defaultValue={100}
                            data-max={100}
                            placeholder="En yüksek fiyat"
                          />
                          <button type="submit" className="button">
                            Filtrele
                          </button>
                          <div
                            className="price_label"
                            style={{ display: "none" }}
                          >
                            Fiyat: <span className="from" /> —{" "}
                            <span className="to" />
                          </div>
                          <div className="clear" />
                        </div>
                      </div>
                    </form>
                  </aside>
                </div>
                <div className="cell">
                  <aside
                    id="barberry_attributes_filter-3"
                    className="widget woocommerce barberry_attributes_filter widget_layered_nav"
                  >
                    <h4 className="widget-title">Filter by material</h4>
                    <ul>
                      <li className="wc-layered-nav-term ">
                        <a href="urun-kategori/erkek-esofmanlari/indexcbb1.html?filter_material=fabric">
                          <span className="nav-title">Fabric</span>
                        </a>{" "}
                        <span className="count">1</span>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </aside>
          </div>
          {/* end site-shop-filters-inside */}
        </div>
        {/* end site-shop-filters */}
        <div className="barberry-active-filters"></div>
      </header>
    </Fragment>
  );
};

export default Filter;
