import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectErrorMessage, clearError } from "../../redux/slices/errorSlice";

import "react-toastify/dist/ReactToastify.css";

import "./styles.css";
import { useEffect } from "react";

const Error = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage);
      dispatch(clearError());
    }
  }, [dispatch, errorMessage]);

  return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
