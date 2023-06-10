import { toast } from "react-toastify"

export const ToastContainer = () => {
    `
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
    `
}

export const notifySuccess = (message) => {
    toast.success(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: 'colored'
    })
}

export const notifyError = (message) => {
    toast.error(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: 'colored'
    })
}