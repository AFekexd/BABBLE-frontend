import { toast } from "react-toastify";

export const CustomToast = (msg: string, type: "success" | "error") => {
  toast(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    progress: undefined,
    type: type,
  });
};
