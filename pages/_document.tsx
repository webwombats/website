import Document, { Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "@lib/analytics";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en" className="bg-background-color">
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,900&display=swap"
            rel="stylesheet"
          /> */}
        </Head>

        <body>
          <Main />
          <NextScript />

          {/* Global Site Tag - Google Analytics & Hotjar */}
          {process.env.NODE_ENV === "production" && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                  `
                }}
              />

              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:1751492,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                  `
                }}
              />
            </>
          )}
        </body>
      </html>
    );
  }
}
