import { toast } from "react-toastify";
import handleErrors from "../controllers/clientControllers/handleErrors";
import { toastConfig } from "../helpers/constants";

const useToastHandler = (ref) => {
  const loadingToast = (msg) => {
    if (!toast.isActive(ref.current)) {
      ref.current = toast(msg ?? 'Please wait loading...', {
        ...toastConfig,
        theme: 'light',
        isLoading: true,
      })
    }
  }

  const dataToast = (data, msg) => {
    if (data) {
      toast.update(ref.current, {
        ...toastConfig,
        render: msg ?? data?.message,
        type: data.success ? 'success' : 'error',
        isLoading: false,
        autoClose: data.success ? 5000 : false,
      });
    }
  }

  const errorToast = (error, msg) => {
    let errorsArr = handleErrors(error)
    toast.update(ref.current, {
      render: msg ?? `${errorsArr.length} Errors: ${errorsArr[0]}`,
      ...toastConfig,
      type: 'error',
      isLoading: false,
    })
  }
  return { loadingToast, dataToast, errorToast }
}

export default useToastHandler;