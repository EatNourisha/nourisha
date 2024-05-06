const Spinner = () => {
    return (
      <div className="flex justify-center h-screen">
        <div className="my-16 md:my-32">
          <div className="w-12 h-12 md:w-32 md:h-32 border-2 border-orange-400 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  };
  
  export default Spinner;
  