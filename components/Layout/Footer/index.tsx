import ContactUs from "./ContactUs";

const Footer = () => (
  <>
    <ContactUs />
    <footer className="pt-8 pb-6 px-6 md:px-0 border-t border-tundora text-center">
      <p className="text-sm text-body-font-color py-1">
        Copyright © {new Date().getFullYear()} Web Wombats. All rights reserved.
      </p>
    </footer>
  </>
);

export default Footer;
