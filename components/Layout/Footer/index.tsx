import ContactUs from "./ContactUs";

const Footer = () => (
  <>
    <ContactUs />
    <footer className="pt-8 pb-6 border-t border-gray-900 text-center">
      <p className="text-xs sm:text-sm text-gray-500 font-semibold py-1">
        Copyright © {new Date().getFullYear()} Web Wombats. All rights reserved.
      </p>
    </footer>
  </>
);

export default Footer;
