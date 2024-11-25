import FormikInput from "./FormikInput";
import FormikTextarea from "./FormikTextarea";

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <FormikInput {...rest} />;
    case "textarea":
      return <FormikTextarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
