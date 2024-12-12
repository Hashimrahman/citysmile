
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import logo from "../../assets/logo-temp.png";
import { Link, useNavigate } from "react-router-dom";

function NavbarDisplay() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {[
        { label: "Home", route: "/" },
        { label: "About", route: "about" },
        { label: "Services", route: "services" },
        { label: "Contact", route: "contact" },
      ].map((navItem) => (
        <Typography
          key={navItem.label}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal hover:text-blue-500 transition duration-300 ease-in-out"
        >
          <a
            
            className="flex items-center pl-6 hover:cursor-pointer"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              navigate(navItem.route); // Use the correct navigation function
              setOpenNav(false)
            }}
          >
            {navItem.label}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar
      className={`fixed top-0 z-10 h-max max-w-full rounded-none px-4 ${
        openNav == true ? "pb-2" : "py-0"
      } shadow-md lg:px-8 lg:py-2 backdrop-blur-sm bg-transparent`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 text-3xl md:text-4xl  font-bold flex items-end justify-center hover:text-blue-500 transition duration-300 ease-in-out font-volkhov"
        >
          {/* Logo */}
          <img
            src={logo}
            alt="City Smiles Logo"
            className="h-14 w-14 object-contain "
          />
          {/* Brand Name */}
          City<span className="text-blue-500 font-volkhov"> Smiles</span>
        </Typography>

        <div className="flex items-center gap-4 ">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button
              variant="text"
              className="hidden lg:inline-block hover:bg-blue-50 hover:text-blue-500 transition duration-300 ease-in-out text-2xl"
            >
              <span>
                <FaInstagram />
              </span>
            </Button>
            <Button
              variant="text"
              size="xl"
              className="hidden lg:inline-block hover:bg-blue-50 hover:text-blue-500 transition duration-300 ease-in-out text-2xl"
            >
              <span>
                <FaFacebook />
              </span>
            </Button>
            <Button
              variant="text"
              size="xl"
              className="hidden lg:inline-block hover:bg-blue-50 hover:text-blue-500 transition duration-300 ease-in-out text-2xl"
            >
              <Link to={'https://www.freepik.com/'}>
                <FaWhatsapp  />
              </Link>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit p-4  lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav} className="bg-white shadow-md mt-4">
        {navList}
        <div className="flex items-center gap-x-1 mt-4 justify-evenly">
          <Button
            fullWidth
            variant="text"
            size="sm"
            className="hover:bg-blue-50 hover:text-blue-500 transition duration-300 ease-in-out text-2xl flex justify-center"
          >
            <span>
              <FaInstagram />
            </span>
          </Button>
          <Button
            fullWidth
            variant="text"
            size="sm"
            className="hover:bg-blue-50 hover:text-blue-500 transition duration-300 ease-in-out text-2xl flex justify-center"
          >
            <span>
              <FaFacebook />
            </span>
          </Button>
          <Button
            fullWidth
            variant="text"
            size="sm"
            className="hover:bg-blue-50 hover:text-blue-500 transition duration-300 ease-in-out text-2xl flex justify-center"
          >
            <span>
              <RiTwitterXFill />
            </span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default NavbarDisplay;
