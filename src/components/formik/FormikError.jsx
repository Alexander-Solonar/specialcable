import { ErrorMessage } from 'formik';
import React from 'react';

const FormikError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => (
        <p className="absolute -top-5 text-sm font-bold tracking-wider text-vivid-red">{message}</p>
      )}
    />
  );
};

export default FormikError;
