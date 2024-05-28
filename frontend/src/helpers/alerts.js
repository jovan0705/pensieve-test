import Swal from "sweetalert2";

export const errorAlert = (message) => {
  return Swal.fire({
    position: "center",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
