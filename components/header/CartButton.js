import React, { Fragment } from "react";

class CartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  cartModal = () => {

    const myBody = document.getElementById('myBody');
    myBody.classList.add("offcanvas_open", "offcanvas_right", "lock-scroll")

    const myCart = document.getElementById('myCart');
    myCart.style.visibility = 'visible';
    
    const myOverlay = document.getElementById("myOverlay");
    myOverlay.classList.add("toggle_menu_overlay");

    if(myOverlay.classList.contains('overlayHide')){
      myOverlay.classList.remove('overlayHide')
    }

  }

  render() {
    return (
      <Fragment>
        <a onClick={() => this.cartModal()} className="link header-cart">
          <span style={{ marginRight: '8px' }} className="header-cart-title">Sepet</span>
          <span className="header-cart-count">
            <span className="header-cart-count-background" />
            <span className="header-cart-count-number">0</span>
          </span>
        </a>
      </Fragment>
    );
  }
}

export default CartButton;
