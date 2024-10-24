import React from "react";
import { FormProvider } from "react-hook-form";

const ReactFormProvider = ({ children, methods, onSubmit }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default ReactFormProvider;
