import React, { Fragment } from "react";
import Link from "next/link";


class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isStyle: false,
      customMargin: {}
    }
  }

  componentDidMount = () => {
    const uri = window.location.pathname;

    if(uri == '/product'){
      
      const style = {
        marginBottom: '80px' 
      };
      
      this.setState({
        isStyle: true,
        customMargin: style
      });
    }
  }

  render(){
    return (
      <Fragment>
        <footer style={this.state.customMargin} id="site-footer" data-footer-copy={1}>
          {/* begin grid-container */}
          <div className="grid-container">
            <div className="site-footer-inner">
              <div className="widget-area">
                <div className="grid-x grid-padding-x small-up-1 large-up-4">
                  <div className="footer-nav-items cell text-left">
                    <aside id="nav_menu-3" className="widget widget_nav_menu">
                      <h4 className="widget-title">BAFK</h4>
                      <div className="menu-footer-hakkimizda-container">
                        <ul id="menu-footer-hakkimizda" className="menu">
                          <li
                            id="menu-item-4032"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4032"
                          >
                            <Link href="/faq">
                              <a>Sıkça Sorulan Sorular</a>
                            </Link>
                          </li>
                          <li
                            id="menu-item-4033"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4033"
                          >
                            <Link href="/about">
                              <a>Hakkımızda</a>
                            </Link>
                          </li>
                          <li
                            id="menu-item-4035"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4035"
                          >
                            <a href="blog/index.html">Blog</a>
                          </li>
                          <li
                            id="menu-item-4034"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4034"
                          >
                            <Link href="/contact">
                              <a>İletişim</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                  <div className="footer-nav-items cell text-left">
                    <aside id="nav_menu-4" className="widget widget_nav_menu">
                      <h4 className="widget-title">Kullanıcı</h4>
                      <div className="menu-footer-hesabim-container">
                        <ul id="menu-footer-hesabim" className="menu">
                          <li
                            id="menu-item-4036"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4036"
                          >
                            <Link href="/order-tracking">
                              <a>Sipariş Takibi</a>
                            </Link>
                          </li>
                          <li
                            id="menu-item-4039"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4039"
                          >
                            <a href="sepet/index.html">Sepet</a>
                          </li>
                          <li
                            id="menu-item-4038"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4038"
                          >
                            <a href="odeme/index.html">Ödeme</a>
                          </li>
                          <li
                            id="menu-item-4037"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4037"
                          >
                            <Link href="/login">
                              <a>Hesabım</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                  <div className="footer-nav-items cell text-left">
                    <aside id="nav_menu-2" className="widget widget_nav_menu">
                      <h4 className="widget-title">Sözleşmeler</h4>
                      <div className="menu-footer-sozlesmeler-container">
                        <ul id="menu-footer-sozlesmeler" className="menu">
                          <li
                            id="menu-item-3504"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-3504"
                          >
                            <Link href="/contracts/sale-contract">
                              <a>Mesafeli Satış Sözleşmesi</a>
                            </Link>
                          </li>
                          <li
                            id="menu-item-4030"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4030"
                          >
                            <Link href="/contracts/confidentiality-agreement">
                              <a>Gizlilik Sözleşmesi</a>
                            </Link>
                          </li>
                          <li
                            id="menu-item-4029"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4029"
                          >
                            <Link href="/contracts/member-contract">
                              <a>Üyelik Sözleşmesi</a>
                            </Link>
                          </li>
                          <li
                            id="menu-item-4031"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4031"
                          >
                            <Link href="/contracts/personal-data-protected">
                              <a>Kişisel Verilerin Korunması</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                  <div className="footer-nav-items cell text-right">
                    <aside id="text-1" className="widget widget_text">
                      <h4 className="widget-title">BAFK The Original</h4>
                      <div className="textwidget">
                        <p>
                          Dünyaca ünlü tasarımcıların imzasını taşıyan sıra dışı
                          sokak modası.
                        </p>
                        <fieldset>
                          <input
                            className="footer-input"
                            type="email"
                            name="EMAIL"
                            placeholder="Your email address"
                            required
                          />
                          <input
                            className="footer-btn"
                            type="submit"
                            defaultValue="Sign up"
                          />
                        </fieldset>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
              {/* begin copyright-section */}
              <div className="copyright-section">
                {/* begin grid-x */}
                <div className="grid-x grid-padding-x">
                  {/* begin cell */}
                  <div className="cell large-4">
                    <ul className="social-icons">
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
                      <li className="youtube">
                        <a target="_blank" title="YouTube" href="#">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-youtube" />
                          </svg>
                          <span className="s-circle_bg" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end cell */}
                  {/* begin cell */}
                  <div className="cell large-4 footer_text">
                    <strong>BAFK</strong> Tüm Hakları Gizlidir.
                  </div>
                  {/* end cell */}
                  {/* begin cell */}
                  <div className="cell large-4 footer-payment">
                    <div className="footer-credit-card-icons">
                      <img
                        src="/icons/payment-icon-visa.png"
                        alt="Visa"
                        title="Visa"
                      />
                      <img
                        src="/icons/payment-icon-mastercard.png"
                        alt="MasterCard"
                        title="MasterCard"
                      />
                      <img
                        src="/icons/payment-icon-amex.png"
                        alt="Amex"
                        title="Amex"
                      />
                      <img
                        src="/icons/payment-icon-paypal.png"
                        alt="PayPal"
                        title="PayPal"
                      />
                      <img
                        src="/icons/payment-icon-amazon.png"
                        alt="Amazon"
                        title="Amazon"
                      />
                    </div>
                  </div>
                  {/* end cell */}
                </div>
                {/* end grid-x */}
              </div>
              {/* end copyright-section */}
            </div>
          </div>
          {/* end grid-container */}
          <div className="footer__wrapper" />
        </footer>      
      </Fragment>
    );
  }
};

export default Footer;
