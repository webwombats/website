import { ThemeProvider, createGlobalStyle } from "styled-components";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import Router from "next/router";

import theme from "../theme";
import * as gtag from "../lib/analytics";

if (process.env.NODE_ENV === "production") {
  Router.events.on("routeChangeComplete", url => gtag.trackPageview(url));
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }

  body, html {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
`;

const MyApp = ({ Component, pageProps }: AppPropsType) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
