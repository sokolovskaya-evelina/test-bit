import React from 'react';
import {withProviders} from "./providers";
import {createGlobalStyle} from "styled-components";
import {desktopSpace, mobileSpace} from "./theme/variables";
import Header from "../widgets/Header";
import OrganizationPage from "../pages/organizationPage";

const Global = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    src: url('./../shared/fonts/ibm-plex-sans-v19-latin-regular.woff2') format('woff2'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    src: url('./../shared/fonts/ibm-plex-sans-v19-latin-500.woff2') format('woff2'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    src: url('./../shared/fonts/ibm-plex-sans-v19-latin-600.woff2') format('woff2'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    src: url('./../shared/fonts/ibm-plex-sans-v19-latin-700.woff2') format('woff2');
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${p => p.theme.colors.baseBlack};
    color: ${p => p.theme.colors.baseWhite};
    font-family: 'IBM Plex Sans', Helvetica, sans-serif;
    margin: ${desktopSpace.lvl3} 25px;
    letter-spacing: 0;

    ${p => p.theme.mediaQueries.mobile} {
      margin: ${mobileSpace.lvl3} 0;
    }
  }
`

function App() {
    return (
        <>
            <Global />
            <Header/>
            <OrganizationPage/>
        </>
    );
}

export default withProviders(App);
