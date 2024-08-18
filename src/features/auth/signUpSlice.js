import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profession: "",
    telephone: "",
  }
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { updateFormData } = signUpSlice.actions;
export default signUpSlice.reducer;
