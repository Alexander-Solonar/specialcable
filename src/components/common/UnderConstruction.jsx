import SectionTitle from './SectionTitle';

const UnderConstruction = ({ title, text }) => {
  return (
    <>
      <SectionTitle title={title} />
      <div className="mt-3 sm:mt-7">
        <p className="text-xs uppercase tracking-widest sm:text-sm">{text}</p>
      </div>
    </>
  );
};

export default UnderConstruction;
