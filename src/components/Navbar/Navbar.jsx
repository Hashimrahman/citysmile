const Navbar = () => {
    return (
      <div className="fixed w-full  z-10">
        <div className="flex items-center justify-between px-8 py-6 my-4 mx-16 rounded-md shadow-md backdrop-blur-md">
        {/* Brand name */}
        <div className="font-bold text-2xl">
          City<span className="text-blue-500"> Smiles</span>
        </div>
  
        {/* Navigation links */}
        <div className="flex gap-8">
          <h4 className=" text-lg hover:text-flamingo_red hover:-translate-y-1 cursor-pointer transition-all duration-200">About</h4>
          <h4 className=" text-lg hover:text-flamingo_red hover:-translate-y-1 cursor-pointer transition-all duration-200">Services</h4>
          <h4 className=" text-lg hover:text-flamingo_red hover:-translate-y-1 cursor-pointer transition-all duration-200">Destinations</h4>
          <h4 className=" text-lg hover:text-flamingo_red hover:-translate-y-1 cursor-pointer transition-all duration-200">Contact</h4>
        </div>
      </div>
      </div>
    );
  };
  
  export default Navbar;
  