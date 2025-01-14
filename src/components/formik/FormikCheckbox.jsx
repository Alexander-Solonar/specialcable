import React from 'react';
import { Field } from 'formik';

const FormikCheckbox = props => {
  const { name, ...rest } = props;
  return (
    <Field
      id={name}
      name={name}
      {...rest}
      className="flex h-4 w-4 appearance-none items-center justify-center border-2 checked:after:text-xs checked:after:content-['✓']"
    />
  );
};

export default FormikCheckbox;