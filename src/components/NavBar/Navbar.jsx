import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import DropdownMenu from "./DropdownMenu";
import logoImage from "./1kt.png";
import isoImage from "./iso.png";
import { NavigationContext } from "../../NavigationContext";
import "./animations.css"; // Import custom CSS animations

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollFade, setScrollFade] = useState(false);
  const { currentPage, setCurrentPage } = useContext(NavigationContext);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollFade(window.scrollY > 50);
      const sections = ["home", "about", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 70 && rect.bottom >= 70) {
            currentSection = section;
          }
        }
      });

      if (currentSection) {
        setCurrentPage(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setCurrentPage]);

  useEffect(() => {
    setNavOpen(false);
    if (location.pathname === "/") {
      setCurrentPage("home");
    } else if (location.pathname.startsWith("/products")) {
      setCurrentPage("products");
    } else if (location.pathname.startsWith("/services")) {
      setCurrentPage("services");
    } else if (location.pathname.startsWith("/mou")) {
      setCurrentPage("mou");
    } else {
      setCurrentPage("");
    }
  }, [location, setCurrentPage]);

  const isActive = (path) => location.pathname === path;

  const isProductOrServicePage = () => {
    return (
      location.pathname.startsWith("/products") ||
      location.pathname.startsWith("/mou") ||
      location.pathname.startsWith("/services")
    );
  };

  return (
    <nav
      className={`bg-white p-5 fixed w-full top-0 z-50 ${
        scrollFade ? "bg-opacity-70" : "bg-opacity-100"
      } transition-opacity duration-500`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer">
          <Link to="/">
            <img src={logoImage} alt="MyLogo" className="h-16" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center text-lg">
          {isProductOrServicePage() ? (
            <Link
              to="/"
              className={`text-2xl nav-link ${
                currentPage === "home" ? "nav-link-active" : ""
              } cursor-pointer`}
              onClick={() => setCurrentPage("home")}
            >
              Home
            </Link>
          ) : (
            <ScrollLink
              to="home"
              smooth={true}
              duration={300}
              className={`text-2xl nav-link ${
                currentPage === "home" ? "nav-link-active" : ""
              } cursor-pointer`}
              onClick={() => setCurrentPage("home")}
            >
              Home
            </ScrollLink>
          )}
          {!isProductOrServicePage() && (
            <>
              <ScrollLink
                to="about"
                smooth={true}
                duration={300}
                className={`text-2xl nav-link ${
                  currentPage === "about" ? "nav-link-active" : ""
                } cursor-pointer`}
                onClick={() => setCurrentPage("about")}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={300}
                className={`text-2xl nav-link ${
                  currentPage === "contact" ? "nav-link-active" : ""
                } cursor-pointer`}
                onClick={() => setCurrentPage("contact")}
              >
                Contact
              </ScrollLink>
            </>
          )}
          <Link
            to="/mou"
            className={`text-2xl nav-link ${
              currentPage === "mou" ? "nav-link-active" : ""
            } cursor-pointer`}
            onClick={() => setCurrentPage("mou")}
          >
            MOU
          </Link>
          <DropdownMenu
            title="Products"
            isRes={navOpen}
            items={[
              { label: "IOT", link: "/products/iot" },
              { label: "EMP Kits", link: "/products/emp-kits" },
              { label: "ADAS", link: "/products/adas" },
              { label: "Display", link: "/products/display" },
              { label: "LED Screen", link: "/products/led-screen" },
            ]}
            onClose={() => setNavOpen(false)}
            currentPage={currentPage}
          />
          <DropdownMenu
            title="Services"
            isRes={navOpen}
            items={[
              { label: "Internship", link: "/services/internship" },
              { label: "Training", link: "/services/training" },
            ]}
            onClose={() => setNavOpen(false)}
            currentPage={currentPage}
          />
        </div>
        <div className="flex items-center">
          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center flex-col">
            <img
              src={isoImage}
              alt="Profile"
              className={`w-30 h-16 rounded-full ml-4 ${
                scrollFade ? "opacity-75" : "opacity-100"
              } transition-opacity duration-500`}
            />
            <div className="flex flex-col ml-2">
              <div
                className={`text-red-500 ${
                  scrollFade ? "opacity-75" : "opacity-100"
                } transition-opacity duration-500 text-base sm:text-lg md:text-l lg:text-xl xl:text-2xl`}
              >
                ISO 9001: 2015
              </div>
            </div>
          </div>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 w-full">
          {isProductOrServicePage() ? (
            <Link
              to="/"
              className={`block px-4 py-2 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-text cursor-pointer ${
                isActive("/") ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => {
                setCurrentPage("home");
                setNavOpen(false);
              }}
            >
              Home
            </Link>
          ) : (
            <ScrollLink
              to="home"
              smooth={true}
              duration={300}
              className={`block px-4 py-2 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-text cursor-pointer ${
                currentPage === "home" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => {
                setCurrentPage("home");
                setNavOpen(false);
              }}
            >
              Home
            </ScrollLink>
          )}
          {!isProductOrServicePage() && (
            <>
              <ScrollLink
                to="about"
                smooth={true}
                duration={300}
                className={`block px-4 py-2 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-text cursor-pointer ${
                  currentPage === "about" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => {
                  setCurrentPage("about");
                  setNavOpen(false);
                }}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={300}
                className={`block px-4 py-2 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-text cursor-pointer ${
                  currentPage === "contact" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => {
                  setCurrentPage("contact");
                  setNavOpen(false);
                }}
              >
                Contact
              </ScrollLink>
            </>
          )}
          <Link
            to="/mou"
            className={`block px-4 py-2 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-text cursor-pointer ${
              isActive("/mou") ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => {
              setCurrentPage("mou");
              setNavOpen(false);
            }}
          >
            MOU
          </Link>
          <div
            className={`block py-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-text cursor-pointer ${
              currentPage === "products" ? "bg-blue-500" : ""
            }`}
          >
            <DropdownMenu
              title="Products"
              isRes={navOpen}
              items={[
                { label: "IOT", link: "/products/iot" },
                { label: "EMP Kits", link: "/products/emp-kits" },
                { label: "ADAS", link: "/products/adas" },
                { label: "Display", link: "/products/display" },
                { label: "LED Screen", link: "/products/led-screen" },
              ]}
              onClose={() => setNavOpen(false)}
              currentPage={currentPage}
            />
          </div>
          <div
            className={`block py-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-text cursor-pointer ${
              currentPage === "services" ? "bg-blue-500" : ""
            }`}
          >
          <DropdownMenu
            title="Services"
            items={[
              { label: "Internship", link: "/services/internship" },
              { label: "Training", link: "/services/training" },
            ]}
            isRes={navOpen}
            onClose={() => setNavOpen(false)}
            currentPage={currentPage}
          />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
