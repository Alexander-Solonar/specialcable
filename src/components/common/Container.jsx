const Container = ({ children }) => {
  return (
    <div className="relative mx-auto flex w-full max-w-[1210px] flex-auto flex-col px-[15px]">
      {children}
    </div>
  );
};

export default Container;
