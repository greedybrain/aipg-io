import { Toast, toast } from "react-hot-toast";

type ToastHandler = "error" | "success" | "custom" | "loading";
type ToastOptions =
    | Partial<
          Pick<
              Toast,
              | "id"
              | "icon"
              | "duration"
              | "ariaProps"
              | "className"
              | "style"
              | "position"
              | "iconTheme"
          >
      >
    | undefined;
type TNotifyArgs = {
    type: ToastHandler;
    message: string;
    toastOptions?: ToastOptions;
    id?: string;
};

const options: ToastOptions = { position: "top-center" };
export const notify = ({ type, message, toastOptions, id }: TNotifyArgs) => {
    return toast[type](message, { ...options, ...toastOptions, id });
};

export const setOverflow = (overflow: "hidden" | "scroll") =>
    (document.body.style.overflow = overflow);
