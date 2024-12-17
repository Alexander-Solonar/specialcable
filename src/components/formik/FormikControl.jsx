import FormikInput from './FormikInput';
import FormikMaskedInput from './FormikMaskedInput';

const FormikControl = props => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <FormikInput {...rest} />;
    case 'phone':
      return <FormikMaskedInput {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
