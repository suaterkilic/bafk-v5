import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Overlay from "../components/ui/Overlay";
import SearchModal from "../components/ui/SearchModal";
import CartModal from "../components/ui/CartModal";

function Layout({ children }) {

  const closeLoginModal = () => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.remove("zf-has-scroll", "is-reveal-open");

    
    const headLoginModal = document.getElementById('head_loginModal');
    headLoginModal.classList.remove("modalFadeIn") 
    headLoginModal.classList.add("animated", "fadeOut")

    setTimeout(() => {
      headLoginModal.style.display = 'none';
      const accountModalOverlay = document.getElementById('accountModalOverlay'); 
      accountModalOverlay.style.display = 'none';

      headLoginModal.classList.remove("animated", "fadeOut")

    }, 700);

    document.getElementById('myBody').classList.remove('photoswipe-blur');



  }

  return (
    <Fragment>
      <div className="bb-container" id="bb-container">
        <Header />
        <div className="offcanvas_container">
          <div className="offcanvas_main_content">
            {children}
            <Footer />
          </div>
          <Overlay />
          <SearchModal />
          <CartModal />
        </div>
      </div>
      <div id="accountModalOverlay" className="reveal-overlay" style={{ display: "none" }}>
        <div
          className="reveal"
          id="head_loginModal"
          data-reveal
          data-close-on-click="true"
          data-animation-in="fade-in"
          data-animation-out="fade-out"
          role="dialog"
          aria-hidden="true"
          data-yeti-box="head_loginModal"
          data-resize="head_loginModal"
          data-n="j14pjq-n"
          style={{ display: "none", top: "140px" }}
          tabIndex={-1}
        >
          <h3 className="login-title">Giriş Yap</h3>
          <form
            method="post"
            className="login woocommerce-form woocommerce-form-login "
            action="https://bafk.com.tr/hesabim/"
          >
            <p className="form-row form-row-first">
              <label htmlFor="username">
                Kullanıcı adı veya e-posta adresi&nbsp;
                <span className="required">*</span>
              </label>
              <input
                type="text"
                className="woocommerce-Input woocommerce-Input--text input-text"
                name="username"
                id="username"
                autoComplete="username"
                defaultValue
              />
            </p>
            <p className="form-row form-row-last">
              <label htmlFor="password">
                Parola&nbsp;<span className="required">*</span>
              </label>
              <span className="password-input">
                <input
                  className="woocommerce-Input woocommerce-Input--text input-text"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                />
                <span className="show-password-input" />
              </span>
            </p>
            <div className="clear" />
            <p className="form-row form-group login-form-footer">
              <label className="woocommerce-form__label woocommerce-form__label-for-checkbox inline">
                <input
                  className="woocommerce-form__input woocommerce-form__input-checkbox"
                  name="rememberme"
                  type="checkbox"
                  id="rememberme"
                  defaultValue="forever"
                />{" "}
                <span>Beni hatırla</span>
              </label>
              <span className="woocommerce-LostPassword lost_password">
                <a href="https://bafk.com.tr/hesabim/lost-password/">
                  Parolanızı mı unuttunuz?
                </a>
              </span>
            </p>
            <p className="form-actions">
              <input
                type="hidden"
                id="woocommerce-login-nonce"
                name="woocommerce-login-nonce"
                defaultValue="b9501e72fd"
              />
              <input
                type="hidden"
                name="_wp_http_referer"
                defaultValue="/product/basis-zip-through-hooide-grey/"
              />
              <button
                type="submit"
                className="woocommerce-Button button"
                name="login"
                value="Giriş Yap"
              >
                Giriş Yap
              </button>
            </p>
          </form>
          <div className="create-account-qs">
            <div className="bb-login-form-divider">
              <span>Or</span>
            </div>
            <a
              className="button btn--border"
              href="https://bafk.com.tr/hesabim/#register"
            >
              Create an Account
            </a>{" "}
          </div>
          <div onClick={() => closeLoginModal()} className="close-icon" data-close aria-label="Close modal">
            <span className="close-icon_top" />
            <span className="close-icon_bottom" />
          </div>
        </div>
      </div>
    
    
    </Fragment>
  );
}

export default Layout;
