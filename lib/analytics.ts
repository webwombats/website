export const GA_TRACKING_ID = "UA-134274102-3";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageview = (url: string) => {
  try {
    window.gtag("config", GA_TRACKING_ID, {
      // eslint-disable-next-line @typescript-eslint/camelcase
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
      // eslint-disable-next-line @typescript-eslint/camelcase
      event_category: category,
      // eslint-disable-next-line @typescript-eslint/camelcase
      event_label: label,
      value
    });
  } catch (err) {
    console.error("Failed sending metrics", err);
  }
};
