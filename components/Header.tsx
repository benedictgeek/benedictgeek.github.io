import { useAppContext } from "@/state/AppContextProvider";
import { Button } from "@/utility/components/Button";
import { sendGAEvent } from "@/utility/ga4";
import { useEffect, useState } from "react";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [fadeHeaderBg, setFadeHeaderBg] = useState(true);
  const { currentHash, setCurrentHash } = useAppContext();
  const navLinkClassName = `
  text-[14px] px-[20px] spacing-1 relative tracking-[1px] text-white/75 transition-all duration-500 hover:text-white
  `;

  const activeLinkClassName = `!text-white`;

  useEffect(() => {
    const handleRouteChange = (evt: HashChangeEvent) => {
      setCurrentHash(evt.newURL.split("#")[1] || "");
    };

    window.addEventListener("hashchange", handleRouteChange);

    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  useEffect(() => {
    const handleScroll = (evt: Event) => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 300) {
        setFadeHeaderBg(false);
      } else {
        setFadeHeaderBg(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full ${
        fadeHeaderBg ? "bg-transparent" : "bg-black"
      } py-[25px] px-[1rem] transition-colors z-50`}
    >
      <div className=" flex justify-between items-center flex-wrap w-full mx-auto px-[15px]">
        <a className=" w-[110px] leading-[0] p-0" href="#">
          <img src="images/main-logo.png" alt="Logo" className="w-full" />
        </a>
        <button
          className="navbar-toggler sm:hidden"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div
            className="navbar-toggler-icon text-white py-2 px-4 rounded border border-solid border-white cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Hamburger_MD">
                <path
                  id="Vector"
                  d="M5 17H19M5 12H19M5 7H19"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </button>
        <div
          className={` ${
            openMenu ? "block" : "hidden"
          } basis-full items-center transition-all sm:flex sm:basis-0`}
          id="navbarNav"
        >
          {/* <div className="mr-auto"></div> */}
          <ul className=" flex flex-col gap-1 pl-0 mb-0 mt-0 list-none sm:flex-row sm:gap-y-0">
            <li
              className="nav-item"
              onClick={() =>
                sendGAEvent({ event: "navigation_tab", nav_tab: "home" })
              }
            >
              <a
                className={`${navLinkClassName} ${
                  currentHash == "home" ? activeLinkClassName : ""
                }`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() =>
                sendGAEvent({ event: "navigation_tab", nav_tab: "about" })
              }
            >
              <a
                className={`${navLinkClassName} ${
                  currentHash == "about" ? activeLinkClassName : ""
                }`}
                href="#about"
              >
                About
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() =>
                sendGAEvent({ event: "navigation_tab", nav_tab: "portfolio" })
              }
            >
              <a
                className={`${navLinkClassName} ${
                  currentHash == "portfolio" ? activeLinkClassName : ""
                }`}
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
          </ul>
          <form className=" ml-[15px] flex ">
            <Button
              href="#contact"
              className="rounded-[30px] border-2 px-[20px] text-[14px] bg-transparent border-white smooth-link align-middle text-white"
              onClick={() =>
                sendGAEvent({ event: "navigation_tab", nav_tab: "contact" })
              }
            >
              Need Help?
            </Button>
          </form>
        </div>
      </div>
    </nav>
  );
};
