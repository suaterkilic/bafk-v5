import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Navigation from "./Navigation";
import RightHeader from "./RightHeader";
import SvgIcon from "./SearchIcon";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      displayState: '',
      scrollState: 0,
      scrollAndProduct: false
    }
  }

  componentDidMount = () => {

    const windowWidth = window.innerWidth;
    const pathName = window.location.pathname;

    if (windowWidth <= 760 && pathName == "/product") {
      this.setState({
        displayState: 'none',
        scrollAndProduct : true
      });
    } else {
      this.setState({
        displayState: 'block'
      })
    }

    const header = document.getElementById("mainHeader");

    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.scrollY == 0) {
        header.classList.remove("header--stick");
      }

      const windowYOffset = Math.ceil(window.pageYOffset);

      if (windowYOffset > 250) {
        this.setState({
          scrollState: 1
        });

        header.classList.add("header--stick");
        header.classList.remove("header--unstick");
      } else {
        if(this.state.scrollState == 1){
          header.classList.remove("header--stick");
          header.classList.add("header--unstick");

          this.setState({
            scrollState: 0
          })
        }
      }
    });

    window.removeEventListener("scroll", scrollCallBack);
  };

  render() {
    return (
      <Fragment>
        <Head>
          <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          
          <title>BAFK Original</title>
        </Head>
        <style jsx>{`
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 100;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 100;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 100;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2)
              format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 200;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 200;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 200;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2)
              format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 300;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 300;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 300;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2)
              format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2)
              format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2)
              format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2)
              format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2)
              format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 100;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 100;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 100;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          /* vietnamese */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2)
              format("woff2");
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
              U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }

          /* latin-ext */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2)
              format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin */
          @font-face {
            font-family: "Josefin Sans";
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `}</style>
        <SvgIcon />

        <header
          id="mainHeader"
          className="site-header header-default header--clone header-color-default header-has-bg"
        >
          <div className="header-inner">
            <div className="header-wrapper grid-container">
              <div
                className="header-sections grid-x align-middle"
                style={{ opacity: 1, visibility: "inherit" }}
              >
                <Navigation />

                <div className="site-branding cell shrink text-center">
                  <Link href="/">
                    <a rel="home">
                      {this.state.displayState == "block" && (
                        <>
                          <img
                            className="site-logo"
                            src="/logo/bafk-default.svg"
                            title="The Original"
                            alt="BAFK"
                          />
                          <img
                            className="sticky-logo"
                            src="/logo/bafk-default.svg"
                            title="The Original"
                            alt="BAFK"
                          />
                        </>
                      )}
                      {
                        this.state.displayState == 'none' && this.state.scrollAndProduct == true && (
                          <>
                          <img
                            className="site-logo"
                            src="/logo/bafk-default.svg"
                            title="The Original"
                            alt="BAFK"
                          />
                          <img
                            className="sticky-logo"
                            src="/logo/bafk-default.svg"
                            title="The Original"
                            alt="BAFK"
                          />
                        </>
                        )
                      }
                    </a>
                  </Link>
                </div>
                <RightHeader />
              </div>
            </div>
          </div>
        </header>

        <header id="hoverHeader" className="site-header header-default header-color-default header-has-bg">
          <div className="header-inner">
            <div className="header-wrapper grid-container">
              <div
                className="header-sections grid-x align-middle"
                style={{ opacity: 1, visibility: "inherit" }}
              >
                <Navigation />
                <div className="site-branding cell shrink text-center">
                  <Link href="/">
                    <a rel="home">
                      {this.state.displayState == "block" ? (
                        <>
                          <img
                            className="site-logo"
                            src="/logo/bafk-default.svg"
                            title="The Original"
                            alt="BAFK"
                          />
                        </>
                      ) : (
                        <></>
                      )}
                    </a>
                  </Link>
                </div>
                <RightHeader />
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
