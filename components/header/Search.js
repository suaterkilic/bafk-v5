import React, { Fragment } from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  searchShow = () => {
    const myBody = document.getElementById('myBody');
    myBody.classList.add("offcanvas_open", "offcanvas_top", "lock-scroll");

    const searchModal = document.getElementById('searchModal');
    searchModal.classList.remove("hide_toggle_menu");

    searchModal.style.visibility = 'visible';

    const myOverlay = document.getElementById("myOverlay");
    myOverlay.classList.add("toggle_menu_overlay");

 
  }

  searchOpen = () => {
    this.searchShow();
    
  }

  render() {
    return (
      <Fragment>
        <span onClick={this.searchOpen} id="header-search" className="header-search">
          <svg
            className="svg-icon"
            viewBox="0 0 24 24"
            enableBackground="new 0 0 24 24"
            xmlSpace="preserve"
          >
            <use x={0} y={0} xlinkHref="#i-search" />
          </svg>
        </span>
      </Fragment>
    );
  }
}

export default Search;
