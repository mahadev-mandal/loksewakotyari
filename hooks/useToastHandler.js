import { toast } from "react-toastify";
import handleErrors from "../controllers/clientControllers/handleErrors";
import { toastConfig } from "../helpers/constants";

const useToastHandler = (ref) => {
  const loadingToast = () => {
    if (!toast.isActive(ref.current)) {
      ref.current = toast('Please wait saving...', {
        ...toastConfig,
        theme: 'light',
        isLoading: true,
      })
    }
  }

  const dataToast = (data) => {
    if (data) {
      toast.update(ref.current, {
        ...toastConfig,
        render: data?.message,
        type: data.success ? 'success' : 'error',
        isLoading: false,
        autoClose: data.success ? 5000 : false,
      });
    }
  }

  const errorToast = (error) => {
    let errorsArr = handleErrors(error)
    toast.update(ref.current, {
      render: `${errorsArr.length} Errors: ${errorsArr[0]}`,
      ...toastConfig,
      type: 'error',
      isLoading: false,
    })
  }
  return { loadingToast, dataToast, errorToast }
}

export default useToastHandler;