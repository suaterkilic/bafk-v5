import React, { Fragment } from "react";
import Layout from "../components/layout";

const Login = () => {
  return (
    <Fragment>
      <div
        id="myBody"
        className="page-template-default page page-id-1708 wp-embed-responsive theme-barberry woocommerce-account woocommerce-page woocommerce-no-js wpb-js-composer js-comp-ver-6.5.0 vc_responsive no-offcanvas-animation header-has-title header-has-overlap catalog-ajax-filter posts-has-parallax bb_classic_notif notice_clickable tag-cloud-equal buy_now_enable"
         data-rsssl="1"
      >
        <Layout>
          <div id="primary" className="default-width-page content-area">
            {/* begin site-content */}
            <div id="content" className="site-content" role="main">
              {/* begin grid-container */}
              <div className="grid-container content-page-wrapper">
                {/* begin grid-x */}
                <div className="grid-x grid-margin-x">
                  {/* begin cell */}
                  <div className="cell large-12">
                    <article
                      id="post-1708"
                      className="post-1708 page type-page status-publish hentry"
                    >
                      <div className="entry-content">
                        <div className="woocommerce">
                          {/* begin grid-x */}
                          <div className="grid-x login-cells">
                            {/* begin login-content */}
                            <div id="customer_login" className="login-content">
                              <div className="woocommerce-notices-wrapper" />
                              {/* begin login-content-inner */}
                              <div className="login-content-inner">
                                <div
                                  id="bb-login-wrap"
                                  className="inline slide-up fade-in"
                                >
                                  <div className="title-wrapper">
                                    <div className="breadcrumbs-wrapper">
                                      <div
                                        className="breadcrumbs"
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
                                        <span className="current">
                                          My account
                                        </span>
                                      </div>
                                      {/* .breadcrumbs */}
                                    </div>
                                    {/* .breadcrumbs-wrapper */}
                                    <div className="page-title-wrapper">
                                      <h1 className="page-title">Log in</h1>
                                    </div>
                                  </div>
                                  <form
                                    method="post"
                                    className="login woocommerce-form woocommerce-form-login "
                                    action="https://barberry.temashdesign.com/demo-furniture/my-account/?action=login"
                                  >
                                    <p className="form-row form-row-first">
                                      <label htmlFor="username">
                                        Username or email&nbsp;
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
                                        Password&nbsp;
                                        <span className="required">*</span>
                                      </label>
                                      <input
                                        className="woocommerce-Input woocommerce-Input--text input-text"
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="current-password"
                                      />
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
                                        <span>Remember me</span>
                                      </label>
                                      <span className="woocommerce-LostPassword lost_password">
                                        <a href="lost-password/index.html">
                                          Lost your password?
                                        </a>
                                      </span>
                                    </p>
                                    <p className="form-actions">
                                      <input
                                        type="hidden"
                                        id="woocommerce-login-nonce"
                                        name="woocommerce-login-nonce"
                                        defaultValue="3edd645e23"
                                      />
                                      <input
                                        type="hidden"
                                        name="_wp_http_referer"
                                        defaultValue="/demo-furniture/my-account/"
                                      />
                                      <button
                                        type="submit"
                                        className="woocommerce-Button button"
                                        name="login"
                                        value="Log in"
                                      >
                                        Log in
                                      </button>
                                    </p>
                                    <div className="bb-login-form-divider">
                                      <span>Or login with</span>
                                    </div>
                                    <div className="form-row row-submit-login-social text-center">
                                      <div
                                        className="nsl-container nsl-container-block"
                                        data-align="left"
                                      >
                                      
                                      </div>
                                    </div>
                                  </form>
                                  <div className="bb-login-form-divider">
                                    <span>Or</span>
                                  </div>
                                  <a
                                    href="#"
                                    id="bb-show-register-button"
                                    className="button btn--border"
                                  >
                                    Create an Account
                                  </a>
                                </div>
                                <div id="bb-register-wrap">
                                  <div className="title-wrapper">
                                    <div className="breadcrumbs-wrapper">
                                      <div
                                        className="breadcrumbs"
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
                                        <span className="current">
                                          My account
                                        </span>
                                      </div>
                                      {/* .breadcrumbs */}
                                    </div>
                                    {/* .breadcrumbs-wrapper */}
                                    <div className="page-title-wrapper">
                                      <h1 className="page-title">Register</h1>
                                    </div>
                                  </div>
                                  <form
                                    method="post"
                                    className="woocommerce-form woocommerce-form-register register"
                                  >
                                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                      <label htmlFor="reg_email">
                                        Email address&nbsp;
                                        <span className="required">*</span>
                                      </label>
                                      <input
                                        type="email"
                                        className="woocommerce-Input woocommerce-Input--text input-text"
                                        name="email"
                                        id="reg_email"
                                        autoComplete="email"
                                        defaultValue
                                      />
                                    </p>
                                    <div className="woocommerce-password-text">
                                      <p>
                                        A password will be sent to your email
                                        address.
                                      </p>
                                    </div>
                                    <div className="woocommerce-privacy-policy-text">
                                      <p>
                                        Your personal data will be used to
                                        support your experience throughout this
                                        website, to manage access to your
                                        account, and for other purposes
                                        described in our{" "}
                                        <a
                                          href="https://barberry.temashdesign.com/demo-furniture/privacy-policy/"
                                          className="woocommerce-privacy-policy-link"
                                          target="_blank"
                                        >
                                          privacy policy
                                        </a>
                                        .
                                      </p>
                                    </div>
                                    <p className="form-actions woocommerce-form-row">
                                      <input
                                        type="hidden"
                                        id="woocommerce-register-nonce"
                                        name="woocommerce-register-nonce"
                                        defaultValue={9409612412}
                                      />
                                      <input
                                        type="hidden"
                                        name="_wp_http_referer"
                                        defaultValue="/demo-furniture/my-account/"
                                      />{" "}
                                      <button
                                        type="submit"
                                        className="woocommerce-Button button"
                                        name="register"
                                        value="Register"
                                      >
                                        Register
                                      </button>
                                    </p>
                                    <div className="bb-login-form-divider">
                                      <span>Or</span>
                                    </div>
                                    <a
                                      href="#"
                                      id="bb-show-login-button"
                                      className="button btn--border"
                                    >
                                      Log in
                                    </a>
                                    <p />
                                  </form>
                                </div>
                              </div>
                              {/* end login-content-inner */}
                            </div>
                            {/* end login-content */}
                          </div>
                          {/* end grid-x */}
                        </div>
                      </div>
                      {/* .entry-content */}
                    </article>
                    {/* #post */}
                  </div>
                  {/* end cell large-12 */}
                </div>
                {/* end grid-x */}
              </div>
              {/* end grid-container */}
            </div>
            {/* end site-content */}
            <div className="prefooter" />
          </div>
        </Layout>
      </div>
    
    
    </Fragment>
  );
};
export default Login;
