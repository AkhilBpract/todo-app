import React from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

const defaultValues = {
  name: "",
};

const schema = object({
  name: string().required(),
});
const useHandleUseForm = () => {
  const methods = useForm({ defaultValues });
  return methods;
};

export default useHandleUseForm;
