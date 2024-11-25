import { Form, Formik } from "formik";
import FormikControl from "../formik/FormikControl";
import MainButton from "../buttons/MainButton";
import { useTranslation } from "react-i18next";

const FeedBackForm = () => {
  const { t } = useTranslation();

  const initialValues = {
    email: "",
    text: "",
  };

  return (
    <Formik initialValues={initialValues}>
      <Form className="flex w-full max-w-[360px] flex-col items-center gap-y-3 text-black ml:items-start">
        <FormikControl
          control="input"
          type="email"
          name="email"
          placeholder={t("form.placeholderEmail")}
          className="h-[42px] w-full border-none pl-[14px] pr-[30px] focus:outline focus:outline-2 focus:outline-vivid-red"
        />
        <FormikControl
          control="textarea"
          type="text"
          name="text"
          placeholder={t("form.placeholderText")}
          className="h-[81px] w-full resize-none py-3 pl-[14px] pr-[30px] outline-none focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-vivid-red"
        />
        <MainButton text={t("form.button")} addStyles=" bg-vivid-red" />
      </Form>
    </Formik>
  );
};

export default FeedBackForm;
