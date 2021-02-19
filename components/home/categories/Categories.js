import React, { Fragment } from "react";
import Link from 'next/link';
const Categories = () => {
  return (
    <Fragment>
      <div
        style={{}}
        data-vc-full-width="true"
        data-vc-full-width-init="false"
        className="normal_height vc_row wpb_row vc_row-fluid"
      >
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="woocommerce columns-4">
                <div className="grid-container">
                  <div className="grid-x grid-margin-x">
                    <div className="cell large-12">
                      <ul className="products columns-4 category-grid-layout-1 product-grid-layout-1 ">
                        <li className="product-category product first">
                          <div className="category_wrapper">
                            <div className="category_image">
                              <Link href="/category">
                                <a
                                  className="category-image"
                                >
                                  <img
                                    src="/images/category/1.jpg"
                                    alt="Erkek Eşofmanlari"
                                    width={500}
                                    height={700}
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="category_details">
                              <Link href="/category">
                                <a>
                                  <div className="more-products">4 ürün</div>
                                  <h2 className="category-title">
                                    Erkek Eşofmanlari
                                  </h2>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="product-category product">
                          <div className="category_wrapper">
                            <div className="category_image">
                              <Link href="/category">
                                <a
                                  className="category-image"
                                >
                                  <img
                                    src="/images/category/1.jpg"
                                    alt="Erkek Şortları"
                                    width={500}
                                    height={700}
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="category_details">
                              <Link href="/category">
                                <a>
                                  <div className="more-products">6 ürün</div>
                                  <h2 className="category-title">
                                    Erkek Şortları
                                  </h2>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vc_row-full-width vc_clearfix" />
    </Fragment>
  );
};

export default Categories;
