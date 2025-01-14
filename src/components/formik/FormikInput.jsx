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
        className="h-full w-full border-2 border-space-blue px-3 focus:border-vivid-red"
      />
    </label>
  );
};

export default FormikInput;
