const BackgroundWrapper = ({ children }) => {
  return (
    <div className="flex-auto bg-bg-information bg-contain bg-position-information bg-no-repeat pb-44">
      {children}
    </div>
  );
};

export default BackgroundWrapper;
