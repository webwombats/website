import { AppPropsType } from "next/dist/next-server/lib/utils";
import Router from "next/router";

import * as gtag from "@lib/analytics";
import "@styles/index.css";

if (process.env.NODE_ENV === "production") {
  Router.events.on("routeChangeComplete", url => gtag.trackPageview(url));
}

const MyApp = ({ Component, pageProps }: AppPropsType) => (
  <Component {...pageProps} />
);

export default MyApp;
