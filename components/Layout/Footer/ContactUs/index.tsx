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
  }, [addToast, clipboard]);

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 border-t border-tundora">
      <div className="container mx-auto px-6 md:px-0 grid gap-8 text-center font-semibold">
        <h3 className="text-2xl sm:text-3xl leading-tight tracking-tight">
          Want us to make your idea a real product? Shoot a message and let's
          work together!
        </h3>
        <p
          className="underline hover:no-underline cursor-pointer text-2xl sm:text-3xl"
          onClick={handleClick}
        >
          hi@webwombats.com
        </p>
      </div>
    </section>
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
