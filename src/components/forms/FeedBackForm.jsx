import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { feedbackSchema } from '../formik/schemas';
import Notiflix from 'notiflix';
import FormikControl from '../formik/FormikControl';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

Notiflix.Report.init({
  width: '360px',
  svgSize: '60px',
  messageFontSize: '16px',
  success: {
    svgColor: '#008000',
    buttonBackground: '#FF7300',
    backOverlayColor: '#0c243e33',
  },
});

const FeedBackForm = () => {
  const { t } = useTranslation();

  const initialValues = {
    name: '',
    phone: '',
    checkbox: false,
  };

  const handleSubmit = (values, actions) => {
    Notiflix.Report.success(
      `${t('feedBackForm.notiflix.title')}, ${values.name}!`,
      `${t('feedBackForm.notiflix.message')} ${values.phone}`,
      'OK'
    );

    actions.resetForm();
  };

  return (
    <section className="bg-gray py-8 text-white sm:py-14 ml:py-24">
      <Container>
        <SectionTitle title={t('feedBackForm.title')} />
        <div className="mt-4 flex flex-col items-center sm:mt-7 ml:mt-12">
          <Formik
            initialValues={initialValues}
            validationSchema={feedbackSchema}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form className="w-full">
                <div className="flex w-full flex-col gap-x-3 gap-y-4 text-xs text-black sm:flex-row sm:text-sm ml:gap-5 ml:text-base">
                  <FormikControl
                    control="input"
                    type="text"
                    name="name"
                    className="relative h-9 sm:flex-grow ml:h-14"
                    placeholder={t('feedBackForm.input')}
                  />
                  <FormikControl
                    control="phone"
                    type="text"
                    name="phone"
                    className="relative h-9 sm:flex-grow ml:h-14"
                  />
                  <button
                    disabled={!values.checkbox}
                    type="submit"
                    className="ml-auto flex h-9 items-center justify-center bg-vivid-orange px-5 font-bold tracking-widest text-white transition-opacity duration-300 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50 sm:ml-0 ml:h-14 ml:flex-grow"
                  >
                    {t('feedBackForm.button')}
                  </button>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <FormikControl control="checkbox" type="checkbox" name="checkbox" />
                  <p className="text-xs !leading-none sm:text-sm ml:text-base">
                    {t('feedBackForm.text')}
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </section>
  );
};

export default FeedBackForm;
