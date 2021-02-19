import React, { Fragment } from "react";
import Layout from "../components/layout";
import SectionBanner from "../components/home/banner/SectionBanner";
import Slider from "../components/home/slider/Slider";
import Categories from "../components/home/categories/Categories";
import Product from "../components/home/product/Product";

export default class Home extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return (
      <Fragment>
        <div
          id="myBody"
          footer-data="1"
          className="home page-template-default page page-id-3488 page-parent wp-embed-responsive vc_responsive no-offcanvas-animation header-has-no-title header-has-overlap posts-has-parallax bb_classic_notif tag-cloud-default"
        >
          <Layout>
            <div id="primary" className="default-width-page content-area">
              <div id="content" className="site-content" role="main">
                <div className="home-grid-container grid-container content-page-wrapper">
                  <div className="grid-x grid-margin-x">
                    <div className="cell large-12">
                      <article
                        id="post-3488"
                        className="post-3488 page type-page status-publish hentry"
                      >
                        <div className="entry-content">
                          {/* Components */}
                          <Slider />
                          <Categories />
                          <Product />
                          {/* Components */}
  
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prefooter" />
            </div>
            {/* Components */}
            <SectionBanner />
            {/* Components */}
          </Layout>
        </div>
      </Fragment>
    );

  }
}
