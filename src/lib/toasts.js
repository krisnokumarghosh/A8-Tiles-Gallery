import toast from "react-hot-toast";

export const successToast = (msg) => {
  toast.success(msg, {
    style: {
      borderLeft: "3px solid #536257",
      padding: "12px 16px",
      color: "#111827",
    },
    iconTheme: {
      primary: "#536257",
      secondary: "#fff",
    },
  });
};

export const errorToast = (msg) => {
  toast.error(msg, {
    style: {
      borderLeft: "3px solid #b91c1c",
      padding: "12px 16px",
      color: "#111827",
    },
    iconTheme: {
      primary: "#b91c1c",
      secondary: "#fff",
    },
  });
};
