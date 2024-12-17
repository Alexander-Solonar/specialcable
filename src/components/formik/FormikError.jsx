import { ErrorMessage } from 'formik';
import React from 'react';

const FormikError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => (
        <p className="absolute -top-6 text-base font-bold tracking-wider text-vivid-orange">
          {message}
        </p>
      )}
    />
  );
};

export default FormikError;
