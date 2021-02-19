import React, { Fragment } from "react";

const PostHeader = () => {
  return (
    <Fragment>
      <div style={{ backgroundColor: '#fff' }} className="page-header page-title-default title-size-default title-design-default color-scheme-default">
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
                      href="https://barberry.temashdesign.com/demo-furniture/"
                      rel="v:url"
                      property="v:title"
                    >
                      Home
                    </a>
                  </span>
                  <span className="delimiter">/</span>
                  <span>
                    <a
                      rel="v:url"
                      href="https://barberry.temashdesign.com/demo-furniture/category/furniture/"
                    >
                      Furniture
                    </a>
                  </span>
                  <span className="delimiter">/</span>
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
                  Kitchen inspired on ancient Japanese tradition
                </h1>
              </div>
              {/* end .page-title-wrapper */}
              <div className="entry-meta barberry-entry-meta">
                <span
                  className="page-title-delimiter"
                  style={{ width: "70px", opacity: 1, visibility: "inherit" }}
                />
                <ul
                  className="entry-meta-list"
                  style={{
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                    listStyle: 'none'
                  }}
                >
                  <li className="blogHeader1 meta-author">
                    Posted by{" "}
                    <a
                      
                      href="https://barberry.temashdesign.com/demo-furniture/author/temash_barberry/"
                      rel="author"
                    >
                      <span className="blogHeader2 vcard author author_name">
                        <span className="fn">Artem</span>
                      </span>
                    </a>
                  </li>
                  <li className="blogHeader3 meta-date">
                    On <span className="blogHeader4">20, Oct</span>{" "}
                  </li>
                  <li className="blogHeaderA meta-categories">
                    In{" "}
                    <a
                      className="blogHeaderAChild"
                      href="https://barberry.temashdesign.com/demo-furniture/category/furniture/"
                      rel="category tag"
                    >
                      Furniture
                    </a>
                    ,{" "}
                    <a
                      className="blogHeaderAChild"
                      href="https://barberry.temashdesign.com/demo-furniture/category/kitchen/"
                      rel="category tag"
                    >
                      Kitchen
                    </a>
                  </li>
                  <li className="blogHeader5 post-share" style={{ position: 'relative' }}>
                    <div
                      className="post-share-container"
                      data-name="Share"
                      data-share-elem="facebook,twitter,google,pinterest"
                    >
                      <a
                        href="javascript:;"
                        className="social-sharing"
                        data-shareimg="https://barberry.temashdesign.com/demo-furniture/wp-content/uploads/sites/7/2018/10/blog-img05.jpg"
                        data-name="Kitchen inspired on ancient Japanese tradition"
                      >
                        <span className="blogHeader6">Share</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* end .title-wrapper */}
          </div>
          {/* end .title-section-wrapper */}
        </div>
        {/* end .title-section */}
      </div>
    </Fragment>
  );
};

export default PostHeader;
