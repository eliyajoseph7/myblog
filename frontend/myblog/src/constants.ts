import Swal from "sweetalert2";

export const SuccessToast = Swal.mixin({
    toast: true,
    icon: 'success',
    position: 'top-right',
    iconColor: 'green',
    customClass: {
        popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
})

export const ErrorToast = Swal.mixin({
    toast: true,
    icon: 'error',
    position: 'top-right',
    iconColor: 'red',
    customClass: {
        popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
})


