function App() {
  return (
    <div className="w-screen h-screen relative  overflow-hidden ">
      <div className="backgroundImage w-screen h-screen fixed top-0 left-0 z-[-1]" />
      <div className="gradient w-screen h-screen fixed top-0 z-[-1]" />
      <div className="w-screen h-screen sm:px-10 px-4">
        {/* Header */}
        <div className="w-[1280px] mx-auto  h-max py-4 ">
          <img
            className="w-32 h-32"
            src="/assets/Gfast-flat-red.svg"
            alt="logo"
          />
        </div>
        <div className="sm:mt-44 mt-20 flex flex-col sm:gap-16 gap-10">
          <p className=" sm:text-6xl text-4xl text-[#f2f2f2] text-center glow font-bold">
            Parts You Need, Speed You Deserve
          </p>
          <div className="flex flex-col sm:gap-10 gap-4">
            <p className="text-center text-[#F2F2F2] font-bold sm:text-4xl text-2xl  mx-auto">
              Elevate your spare parts buying experience.
            </p>
            <p className="text-center text-[#F2F2F2] font-bold sm:text-4xl text-2xl">
              Our website is launching soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
