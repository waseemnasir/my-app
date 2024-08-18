import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const useLoginForm = (props) => {
  const {currentIndex,setCurrentIndex}=props

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCompany, setIsCompany] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password, rememberMe }));
    setCurrentIndex(currentIndex + 1);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isCompany,
    setIsCompany,
    rememberMe,
    setRememberMe,
    showPassword,
    handleTogglePasswordVisibility,
    handleSubmit,
    currentIndex,
    setCurrentIndex,
  };
};

export default useLoginForm;
