import React, { Fragment } from "react";
import Link from 'next/link';
import Search from './Search';
import CartButton from './CartButton';

class RightHeader extends React.Component {
  constructor(props){
    super(props);
  }

  headLoginModal = () => {

    const root = document.getElementsByTagName('html')[0];
    root.classList.add("zf-has-scroll", "is-reveal-open");

    document.getElementById('myBody').classList.add('photoswipe-blur');

    const accountModalOverlay = document.getElementById('accountModalOverlay'); 
    
    accountModalOverlay.style.display = 'block';

    const headLoginModal = document.getElementById('head_loginModal'); 
    headLoginModal.classList.add("modalFadeIn");

    headLoginModal.style.display = 'block';
  }

  render(){
    return (
      <Fragment>
        <div className="tools cell auto text-right">
          <div className="header-expanded-view">
            <div className="header-expanded-view-inner">
              <Search />

              <a href="favorilerim/index.html" className="header-wishlist">
                <svg
                  className="svg-icon"
                  viewBox="0 0 24 24"
                  enableBackground="new 0 0 24 24"
                  xmlSpace="preserve"
                >
                  <use x={0} y={0} xlinkHref="#i-wishlist" />
                </svg>
                <sup className="wishlist_items_number">0</sup>
              </a>
              <div className="header-account navigation-foundation">
                <ul
                  className="dropdown menu my-account-form  my-account-has-drop "
                  data-close-on-click="false"
                  data-close-on-click-inside="false"
                  data-click-open="false"
                  data-dropdown-menu
                  data-hover-delay={150}
                  data-closing-time={0}
                  data-alignment="right"
                >
                  <li>
                    <a onClick={() => this.headLoginModal()} data-open="head_loginModal">
                      <span>Hesabım</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <CartButton />
        </div>
      </Fragment>
    );
  }
};

export default RightHeader;