import { Field, useField } from 'formik';
import FormikError from './FormikError';

const FormikInput = props => {
  const { name, className, ...rest } = props;
  const [_, meta] = useField(name);
  const isError = meta.touched && meta.error;

  const borderColor = isError ? 'border-vivid-red' : 'border-space-blue';
  return (
    <label className={className}>
      <FormikError name={name} />
      <Field
        id={name}
        name={name}
        {...rest}
        className={`h-full w-full border-2 px-3 ${borderColor} focus:border-vivid-red`}
      />
    </label>
  );
};

export default FormikInput;
