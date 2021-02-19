import React, { Fragment } from "react";

const SideBar = () => {
  return (
    <Fragment>
      <div className="small-12 large-3 cell" style={{
          marginTop: '57px'
      }}>
        <div className="right-sidebar-wrapper">
          <aside className="site-sidebar site-sidebar--blog widget-area">
            <aside className="widget widget_search">
              <form
                role="search"
                method="get"
                className="search-form"
                action="https://barberry.temashdesign.com/demo-furniture/"
              >
                <label className="screen-reader-text">Search for:</label>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Makale bizim işimiz"
                  name="s"
                />
                <input
                  type="submit"
                  className="search-submit"
                  defaultValue="Search"
                />
              </form>
            </aside>
            <aside className="widget widget_recent_entries">
              <h4 className="widget-title">Recent Posts</h4>
              <ul>
                <li>
                  <a href="https://barberry.temashdesign.com/demo-furniture/classics-from-yesterday-and-tomorrow-now-together/">
                    Classics from yesterday and tomorrow now together
                  </a>
                  <span className="post-date">22, Oct</span>
                </li>
                <li>
                  <a href="https://barberry.temashdesign.com/demo-furniture/kitchen-inspired-on-ancient-japanese-tradition/">
                    Kitchen inspired on ancient Japanese tradition
                  </a>
                  <span className="post-date">20, Oct</span>
                </li>
                <li>
                  <a href="https://barberry.temashdesign.com/demo-furniture/traditional-feel-in-the-kitchen/">
                    Traditional feel in the kitchen
                  </a>
                  <span className="post-date">14, Sep</span>
                </li>
              </ul>
            </aside>
            <aside className="widget widget_categories">
              <h4 className="widget-title">Categories</h4>
              <ul>
                <li className="cat-item cat-item-239">
                  <a href="https://barberry.temashdesign.com/demo-furniture/category/decor/">
                    Decor
                  </a>
                </li>
                <li className="cat-item cat-item-240">
                  <a href="https://barberry.temashdesign.com/demo-furniture/category/furniture/">
                    Furniture
                  </a>
                </li>
                <li className="cat-item cat-item-253">
                  <a href="https://barberry.temashdesign.com/demo-furniture/category/kitchen/">
                    Kitchen
                  </a>
                </li>
                <li className="cat-item cat-item-241">
                  <a href="https://barberry.temashdesign.com/demo-furniture/category/lifestyle/">
                    Lifestyle
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="widget widget_recent_comments">
              <h4 className="widget-title">Recent Comments</h4>
              <ul id="recentcomments">
                <li className="recentcomments">
                  <span className="comment-author-link">Artem</span> on{" "}
                  <a href="https://barberry.temashdesign.com/demo-furniture/product/ceramic-teapot/#comment-52">
                    Ceramic Teapot
                  </a>
                </li>
                <li className="recentcomments">
                  <span className="comment-author-link">Artem</span> on{" "}
                  <a href="https://barberry.temashdesign.com/demo-furniture/product/libero-headphones/#comment-50">
                    Libero Headphones
                  </a>
                </li>
                <li className="recentcomments">
                  <span className="comment-author-link">Artem</span> on{" "}
                  <a href="https://barberry.temashdesign.com/demo-furniture/product/libero-headphones/#comment-49">
                    Libero Headphones
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="widget widget_meta">
              <h4 className="widget-title">Meta</h4>
              <ul>
                <li>
                  <a
                    rel="nofollow"
                    href="https://barberry.temashdesign.com/demo-furniture/wp-login.php"
                  >
                    Log in
                  </a>
                </li>
                <li>
                  <a href="https://barberry.temashdesign.com/demo-furniture/feed/">
                    Entries feed
                  </a>
                </li>
                <li>
                  <a href="https://barberry.temashdesign.com/demo-furniture/comments/feed/">
                    Comments feed
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.org/">WordPress.org</a>
                </li>
              </ul>
            </aside>
          </aside>
          {/* .site-sidebar */}{" "}
        </div>
      </div>
    </Fragment>
  );
};
export default SideBar;
