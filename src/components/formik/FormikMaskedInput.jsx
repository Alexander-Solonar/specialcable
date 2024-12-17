import { Field } from 'formik';
import { InputMask } from 'primereact/inputmask';
import FormikError from './FormikError';

const FormikMaskedInput = props => {
  const { name, className, ...rest } = props;

  return (
    <label className={className}>
      <FormikError name={name} />
      <Field name={name}>
        {({ field }) => {
          return (
            <InputMask
              {...field}
              {...rest}
              id={name}
              className="h-full w-full border-none px-3 focus:outline focus:outline-2 focus:outline-vivid-red"
              mask="+38 (099) 999-99-99"
            ></InputMask>
          );
        }}
      </Field>
    </label>
  );
};

export default FormikMaskedInput;
