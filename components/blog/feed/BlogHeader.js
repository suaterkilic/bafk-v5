import React, { Fragment } from "react";

const BlogHeader = () => {
  return (
    <Fragment>
      <div className="page-header page-title-default title-size-default title-design-default color-scheme-default">
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
                  The Blog
                </h1>
              </div>
              {/* end .page-title-wrapper */}
            </div>
            {/* end .title-wrapper */}
            <div className="blog-categories-wrapper">
              <div
                className="blog-categories"
                style={{
                  opacity: 1,
                  visibility: "inherit",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div className="barberry-show-categories">
                  <a href="#">
                    <span>All Articles</span>
                  </a>
                </div>
                <div className="barberry-categories">
                  <ul className="list_blog_categories list-centered">
                    <li className="cat-item current-cat">
                      <a href="https://barberry.temashdesign.com/demo-furniture/blog/">
                        All Articles{" "}
                      </a>
                    </li>
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
                </div>
              </div>
            </div>
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
    </Fragment>
  );
};

export default BlogHeader;
