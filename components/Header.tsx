import { Button } from "@/utility/Button";

export const Header = () => {
  const navLinkClassNaame = `
  text-[14px] px-[20px] spacing-1 relative tracking-[1px] text-white/75 transition-all duration-500 hover:text-white 
  `;
  console.log();
  return (
    <nav className=" fixed py-6 w-full bg-black">
      <div className=" flex justify-between items-center px-4 w-full mx-auto">
        <a className=" w-[110px] leading-[0] p-0" href="#">
          <img src="img/logo-light.png" alt="Logo" className="w-full" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="ion-navicon"></i>
          </span>
        </button>
        <div className=" flex basis-full items-center" id="navbarNav">
          <div className="mr-auto"></div>
          <ul className=" flex pl-0 mb-0 mt-0 list-none">
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
          <form className=" ml-[15px]">
            <Button
              href="#contact"
              className="rounded-[30px] border-2 px-[20px] text-[14px] leading-[1px] bg-transparent border-white smooth-link align-middle text-white"
            >
              Need Help?
            </Button>
          </form>
        </div>
      </div>
    </nav>
  );
};
