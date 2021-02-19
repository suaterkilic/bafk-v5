import React, { Fragment } from "react";
import Typewriter from "typewriter-effect";
class SearchModal extends React.Component {
  constructor(props) {
    super(props);
  }


  searchModalClose = () => {
    const myBody = document.getElementById("myBody");
    myBody.classList.remove("offcanvas_top", "lock-scroll");

    /*const searchModal = document.getElementById("searchModal");
    searchModal.classList.add("hide_toggle_menu");
    */
    const myOverlay = document.getElementById("myOverlay");
    myOverlay.classList.remove("toggle_menu_overlay");

    //searchModal.style.visibility = "hidden";
  };

  render() {
    
    return (
      <Fragment>
        <div
          id="searchModal"
          className="offcanvas_aside offcanvas_aside_top site-search"
          style={{ height: "50vh" }}
        >
          <div className="nano has-scrollbar">
            <div
              className="nano-content"
              tabIndex={0}
              style={{ right: "-19px" }}
            >
              <div className="offcanvas_aside_content">
                {/* begin offcanvas_search */}
                <div className="offcanvas_search woocommerce">
                  {/* begin grid-container */}
                  <div className="grid-container">
                    <button
                      onClick={this.searchModalClose}
                      className="close-icon"
                    >
                      <span className="close-icon_top" />
                      <span className="close-icon_bottom" />
                    </button>
                    {/* begin search-header */}
                    <div className="search-header" style={{ opacity: 1 }}>
                      <p className="search-text">Ne arıyorsun?</p>
                      <div className="widget_product_search">
                        <div className="search-wrapp">
                          <form
                            className="woocommerce-product-search search-form barberry-ajax-search"
                            role="search"
                            method="get"
                            action="https://bafk.com.tr/"
                            data-thumbnail={1}
                            data-price={1}
                            data-post_type="product"
                            data-count={8}
                          >
                            <div>
                              <input
                                type="text"
                                name="s"
                                id="search-input"
                                className="search-field search-input"
                                placeholder="Yazmaya başla..."
                                autoComplete="off"
                              />
                              <input
                                type="hidden"
                                name="post_type"
                                defaultValue="product"
                              />
                              <a
                                role="button"
                                tabIndex={0}
                                className="search-clear"
                              >
                                Temizle
                              </a>
                              <div className="search_label">
                                <div className="search_label-text">
                                  <Typewriter
                                    onInit={(typewriter) => {
                                      typewriter
                                        .typeString(
                                          "Tişört, Eşofman, Şort, Şapka veya Ayakkabı"
                                        )
                                        .pauseFor(500)
                                        .deleteAll()
                                        .typeString("Yazmaya başla...")
                                        .start();
                                    }}
                                  />
                                </div>
                                {/*<span
                                  id="typedCursor"
                                  className="typed-cursor"
                                  style={{
                                    display: "none",
                                    animationIterationCount: 0,
                                  }}
                                >
                                  |
                                </span>*/}
                              </div>
                              <input type="submit" defaultValue="Ara" />
                            </div>
                          </form>
                          <div className="search-results-wrapp">
                            <div className="barberry-search-loader" />
                            <div
                              className="search-results-inner"
                              style={{
                                display: "none",
                                width: "100%",
                                zIndex: 9999,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end search-header */}
                  </div>
                  {/* end grid-container */}
                </div>
                {/* end offcanvas_search */}{" "}
              </div>
            </div>
            <div className="nano-pane" style={{ display: "none" }}>
              <div
                className="nano-slider"
                style={{ height: "515px", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchModal;
