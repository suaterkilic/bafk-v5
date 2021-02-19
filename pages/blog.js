import React, { Fragment } from "react";
import Layout from "../components/layout";
import BlogHeader from "../components/blog/feed/BlogHeader";
import Post from "../components/blog/feed/Post";
import SideBar from "../components/blog/feed/SideBar";

const BlogFeed = () => {
  return (
    <Fragment>
      <div
        id="myBody"
        className="blog wp-embed-responsive theme-barberry woocommerce-js wpb-js-composer js-comp-ver-6.5.0 vc_responsive no-offcanvas-animation header-has-title header-has-overlap catalog-ajax-filter blog-pagination-load_more_button posts-has-parallax bb_classic_notif notice_clickable tag-cloud-equal buy_now_enable"
        footer-data="1"
      >
        <Layout>
          <BlogHeader />
          <div
            id="primary"
            className="blog-primary blog-content-area"
            style={{ opacity: 1, visibility: "inherit", marginBottom: '442px', marginTop: '-57px', paddingTop: 0 }}
          >
            <div className="grid-container">
              <div className="grid-x align-center">
                <div className="small-12 large-10 blog-list-cells cell">
                  <div className="site-content">
                    <div className="blog-listing">
                      <div className="grid-x grid-margin-x">
                        <Post />
                        <SideBar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </Fragment>
  );
};

export default BlogFeed;
