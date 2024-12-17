import { Field } from 'formik';
import FormikError from './FormikError';

const FormikInput = props => {
  const { name, className, ...rest } = props;
  return (
    <label className={className}>
      <FormikError name={name} />
      <Field
        id={name}
        name={name}
        {...rest}
        className="h-full w-full border-none px-3 focus:outline focus:outline-2 focus:outline-vivid-red"
      />
    </label>
  );
};

export default FormikInput;
