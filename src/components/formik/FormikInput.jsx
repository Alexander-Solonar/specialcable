import { Field } from "formik";

const FormikInput = (props) => {
  const { name, ...rest } = props;
  return (
    <div className="w-full">
      <Field id={name} name={name} {...rest} />
    </div>
  );
};

export default FormikInput;
