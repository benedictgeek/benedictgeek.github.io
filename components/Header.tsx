import { Button } from "@/utility/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navLinkClassNaame = `
  text-[14px] px-[20px] spacing-1 relative tracking-[1px] text-white/75 transition-all duration-500 hover:text-white 
  `;

  useEffect(() => {
    const handleRouteChange = (evt: HashChangeEvent) => {
      console.log("URL CHANGE \n\n", evt.newURL);
    };

    window.addEventListener("hashchange", handleRouteChange);

    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  return (
    <nav className="fixed w-full bg-black py-[25px] px-[1rem]">
      <div className=" flex justify-between items-center flex-wrap w-full mx-auto px-[15px]">
        <a className=" w-[110px] leading-[0] p-0" href="#">
          <img src="images/logo-light.png" alt="Logo" className="w-full" />
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
          <div className="mr-auto"></div>
          <ul className=" flex flex-col pl-0 mb-0 mt-0 list-none sm:flex-row">
            <li className="nav-item active">
              <a className={`${navLinkClassNaame} `} href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`${navLinkClassNaame} smooth-link`} href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={`${navLinkClassNaame} smooth-link`} href="#blog">
                Portfolio
              </a>
            </li>
          </ul>
          <form className=" ml-[15px] flex ">
            <Button
              href="#contact"
              className="rounded-[30px] border-2 px-[20px] text-[14px] bg-transparent border-white smooth-link align-middle text-white"
            >
              Need Help?
            </Button>
          </form>
        </div>
      </div>
    </nav>
  );
};
