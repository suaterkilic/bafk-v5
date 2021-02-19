import React, { Fragment } from "react";

const TopBar = () => {
  return (
    <Fragment>
      <div className="topbar" style={{ opacity: 1, visibility: "inherit" }}>
        {/* begin grid-container */}
        <div className="grid-container">
          {/* begin topbar-sections */}
          <div className="topbar-sections grid-x align-middle">
            {/* begin topbar-left */}
            <div className="topbar-left cell auto">
              <div className="topbar-socials">
                <ul className="social-icons">
                  <li className="facebook">
                    <a target="_blank" title="Facebook" href="#">
                      <svg
                        className="svg-icon"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                      >
                        <use x={0} y={0} xlinkHref="#i-facebook" />
                      </svg>
                      <span className="s-circle_bg" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a target="_blank" title="Twitter" href="#">
                      <svg
                        className="svg-icon"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                      >
                        <use x={0} y={0} xlinkHref="#i-twitter" />
                      </svg>
                      <span className="s-circle_bg" />
                    </a>
                  </li>
                  <li className="pinterest">
                    <a target="_blank" title="Pinterest" href="#">
                      <svg
                        className="svg-icon"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                      >
                        <use x={0} y={0} xlinkHref="#i-pinterest" />
                      </svg>
                      <span className="s-circle_bg" />
                    </a>
                  </li>
                  <li className="instagram">
                    <a target="_blank" title="Instagram" href="#">
                      <svg
                        className="svg-icon"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                      >
                        <use x={0} y={0} xlinkHref="#i-instagram" />
                      </svg>
                      <span className="s-circle_bg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topbar-contact">
                <a href="tel:+12 (0) 12-345-678">
                  <strong>Call</strong> +12 (0) 12-345-678
                </a>
              </div>
            </div>
            {/* end topbar-left */}
            {/* begin topbar-right */}
            <div className="topbar-right cell shrink">
              <div className="topbar-wpml">
                <div className="language_currency_switcher">
                  <div className="language_switcher intro-text-on">
                    <span className="intro-text">I speak</span>
                    <nav className="navigation-foundation barberry-switcher wpml-ls-statics-shortcode_actions wpml-ls">
                      <ul
                        className="dropdown menu"
                        data-dropdown-menu
                        data-hover-delay={0}
                        data-closing-time={0}
                        role="menubar"
                        data-e="8dfxq6-e"
                        data-n="4r2ae5-n"
                      >
                        <li
                          tabIndex={0}
                          className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-first-item is-dropdown-submenu-parent opens-right"
                          role="menuitem"
                          aria-haspopup="true"
                          aria-label="English"
                          data-is-click="false"
                        >
                          <a
                            href="#"
                            className="js-wpml-ls-item-toggle wpml-ls-item-toggle"
                          >
                            <span className="wpml-ls-native">English</span>
                          </a>
                          <ul
                            className="menu submenu is-dropdown-submenu first-sub vertical"
                            data-submenu
                            role="menubar"
                            style={{}}
                          >
                            <li
                              className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-fr is-submenu-item is-dropdown-submenu-item"
                              role="menuitem"
                            >
                              <a href="#">
                                <span className="wpml-ls-native">Français</span>
                                <span className="wpml-ls-display">
                                  <span className="wpml-ls-bracket"> (</span>
                                  French
                                  <span className="wpml-ls-bracket">)</span>
                                </span>
                              </a>
                            </li>
                            <li
                              className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-it wpml-ls-last-item is-submenu-item is-dropdown-submenu-item"
                              role="menuitem"
                            >
                              <a href="#">
                                <span className="wpml-ls-native">Italiano</span>
                                <span className="wpml-ls-display">
                                  <span className="wpml-ls-bracket"> (</span>
                                  Italian
                                  <span className="wpml-ls-bracket">)</span>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="currency_switcher intro-text-on">
                    <span className="intro-text">and my currency is</span>
                    <nav className="navigation-foundation barberry-switcher barberry-barberry-currency-switcher product wcml_currency_switcher">
                      <ul
                        className="dropdown menu"
                        data-dropdown-menu
                        data-hover-delay={0}
                        data-closing-time={0}
                        role="menubar"
                        data-e="bhv5ee-e"
                        data-n="df2h2c-n"
                      >
                        <li
                          tabIndex={0}
                          role="menuitem"
                          className="is-dropdown-submenu-parent opens-right"
                          aria-haspopup="true"
                          aria-label="($) USD"
                          data-is-click="false"
                        >
                          <a rel="USD">
                            <span>($) USD</span>
                          </a>
                          <ul
                            className="menu submenu is-dropdown-submenu first-sub vertical"
                            data-submenu
                            role="menubar"
                            style={{}}
                          >
                            <li
                              role="menuitem"
                              className="is-submenu-item is-dropdown-submenu-item"
                            >
                              <a rel="EUR">(€) EUR</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            {/* end topbar-right */}
          </div>
          {/* end topbar-sections */}
        </div>
        {/* end grid-container */}
      </div>
    </Fragment>
  );
};

export default TopBar;
