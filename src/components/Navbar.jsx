import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logoCircle, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    // {styles.paddingX} - special utility class (px-6 meaning padding horizontal 6 then on smaller devices that more padding)
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          // to the top of the page
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            // setActive track of where we are currently on the page
            setActive("");
            // if we click on that we scroll to the top of the page
            window.scrollTo(0, 0);
          }}
        >
          {/* logo image */}
          <img
            src={logoCircle}
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          {/* name and profession */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {/* &nbsp; - unicode character for an empty space */}
            Uriya Azani &nbsp;
            {/* for small devices is a little bit long so we hidden it - "sm:block hidden"*/}
            <span className="sm:block hidden">| software developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* get each individual link and for each link render li tag */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                // check if this li is currently active, if active then render text to white
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              // go to the page
              onClick={() => setActive(link.title)}
            >
              {/* defines a hyperlink, which is used to link from one page to another */}
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* for mobile navigation bar (hamburger)  */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            // if the menu is clicked then show X else show the menu icon
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain
           cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {/* show the actual menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {/* get each individual link and for each link render li tag */}
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    //  automatically close when clicking  on a specific link
                    setToggle(!toggle);
                    // go to the page
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
