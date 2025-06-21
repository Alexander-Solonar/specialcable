const Loader = () => {
  return (
    <div className="fixed top-0 z-20 flex h-lvh w-full items-center justify-center bg-deep-blue bg-opacity-90">
      <div className="relative h-2 w-48 overflow-hidden rounded bg-vivid-red">
        <div className="animate-slide absolute h-full w-full bg-soft-blue" />
      </div>
    </div>
  );
};

export default Loader;
