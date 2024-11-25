import React from "react";
import { Field } from "formik";

const FormikTextarea = (props) => {
  const { name, ...rest } = props;
  return (
    <div className="w-full">
      <Field id={name} as="textarea" name={name} {...rest} />
    </div>
  );
};

export default FormikTextarea;
