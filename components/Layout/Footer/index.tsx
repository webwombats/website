import ContactUs from "./ContactUs";

const Footer = () => (
  <>
    <ContactUs />
    <footer className="pt-8 pb-6 px-6 md:px-0 border-t border-gray-800 text-center">
      <p className="text-sm md:text-base text-gray-500 font-semibold py-1">
        Copyright © {new Date().getFullYear()} Web Wombats. All rights reserved.
      </p>
    </footer>
  </>
);

export default Footer;
