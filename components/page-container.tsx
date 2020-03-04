import { FC } from "react";
import Head from "next/head";
import Router from "next/router";

import { trackPageview } from "../lib/analytics";

interface Props {
  title: string;
  description?: string;
}

Router.events.on("routeChangeComplete", url => {
  trackPageview(url);
});

const PageContainer: FC<Props> = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title || "Web Wombats - Our slogan here"}</title>
        {description && (
          <meta
            name="description"
            content={description || "Web Wombats is ... descriptions here"}
          />
        )}
      </Head>
      {children}
    </div>
  );
};

export default PageContainer;
