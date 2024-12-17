import { Form, Formik } from 'formik';
import FormikControl from '../formik/FormikControl';
import { useTranslation } from 'react-i18next';
import { feedbackSchema } from '../formik/schemas';

const FeedBackForm = () => {
  const { t } = useTranslation();

  const initialValues = {
    name: '',
    phone: '1',
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    initialValues.phone = '';
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={feedbackSchema} onSubmit={handleSubmit}>
      <Form className="flex w-full flex-col gap-3 text-xs text-black sm:flex-row sm:text-sm ml:gap-5 ml:text-base">
        <FormikControl
          control="input"
          type="text"
          name="name"
          className="relative h-9 sm:flex-grow ml:h-14"
          placeholder="Ваше имя"
        />

        <FormikControl
          control="phone"
          type="text"
          name="phone"
          className="relative h-9 sm:flex-grow ml:h-14"
          placeholder="+38(0XX) XXX-XXXX"
        />
        <button
          type="submit"
          className="ml-auto flex h-9 items-center justify-center bg-vivid-orange px-5 font-bold tracking-widest text-white transition-opacity duration-300 hover:opacity-85 sm:ml-0 ml:h-14 ml:flex-grow"
        >
          Заказать звонок
        </button>
      </Form>
    </Formik>
  );
};

export default FeedBackForm;
