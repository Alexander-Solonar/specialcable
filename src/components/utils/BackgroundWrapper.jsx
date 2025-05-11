const BackgroundWrapper = ({ addStyle, children }) => {
  return (
    <div className={`flex-auto bg-no-repeat ${addStyle} `}>{children}</div>
  );
};

export default BackgroundWrapper;
