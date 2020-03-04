export const GA_TRACKING_ID = "UA-134274102-3";

declare global {
  interface Window {
    gtag: any;
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageview = (url: string) => {
  try {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url
    });
  } catch (err) {
    console.error("Failed sending metrics", err);
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = ({
  action,
  category,
  label,
  value
}: {
  action: string;
  category: string;
  label: string;
  value: string;
}) => {
  try {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value
    });
  } catch (err) {
    console.error("Failed sending metrics", err);
  }
};
