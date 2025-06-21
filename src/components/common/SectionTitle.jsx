import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-lg uppercase tracking-[0.275em] sm:text-3xl ml:text-4xl">
      {title}
    </h2>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
