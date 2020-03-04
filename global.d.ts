export {};

declare global {
  interface Window {
    gtag: any;
  }

  namespace JSX {
    interface IntrinsicElements {
      "amp-analytics": any;
    }
  }
}
