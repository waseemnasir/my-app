import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateFormData } from "../features/auth/signUpSlice";

export const useSignUpForm = () => {
  const initialState = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profession: "",
    telephone: "",
  };
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const [isCompany, setIsCompany] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInput = useCallback(
    (field) => (event) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("Submitted data:", formData);
      dispatch(updateFormData(formData));
    },
    [formData, dispatch]
  );

  return {
    formData,
    handleInput,
    handleSubmit,
    isCompany,
    setIsCompany,
  };
};
