import { useCallback } from "react";
import { useClipboard } from "use-clipboard-copy";
import { useToasts, ToastProvider } from "react-toast-notifications";

const Toast = () => (
  <div className="w-screen-90 md:w-auto text-white p-4 rounded bg-indigo-500 m-3">
    <span className="text-center">
      An email copied to the clipboard. Open your favorite email client and drop
      us a line 🤗
    </span>
  </div>
);

const ContactUs = () => {
  const clipboard = useClipboard();
  const { addToast } = useToasts();

  const handleClick = useCallback(() => {
    clipboard.copy("hi@webwombats.com");
    addToast({
      autoDismiss: true
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-24 grid gap-8 text-center">
      <h3 className="text-3xl">
        Want us to make your idea a real product? Shoot a message
      </h3>
      <p
        className="underline hover:no-underline cursor-pointer text-3xl"
        onClick={handleClick}
      >
        hi@webwombats.com
      </p>
    </div>
  );
};

const ContactUsWithToast = () => (
  <ToastProvider
    autoDismiss
    autoDismissTimeout={4000}
    components={{ Toast: Toast }}
    placement="top-center"
  >
    <ContactUs />
  </ToastProvider>
);

export default ContactUsWithToast;
