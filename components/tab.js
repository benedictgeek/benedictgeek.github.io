export const TabSection = () => {
  return (
    <>
      <div className="responsive-menu hidden-md hidden-lg">
        <span>DAUDA OLUSHOLA</span>
        <i className="fa fa-bars right-menu" onClick={null} />
      </div>
      <ul className="top-menu">
        <li>
          <a className="page-scroll" href="#experience">
            <i className="fa fa-suitcase" /> <span> EXPERIENCE </span>
          </a>
        </li>
        <li>
          <a className="page-scroll" href="#skills">
            <i className="fa fa-bars" /> <span> SKILLS </span>
          </a>
        </li>
        <li>
          <a className="page-scroll" href="#portfolio">
            <i className="fa fa-th-list" /> <span> PORTFOLIO </span>
          </a>
        </li>
        <li>
          <a className="page-scroll" href="#education">
            <i className="fa fa-graduation-cap" />
            <span> EDUCATION </span>
          </a>
        </li>
      </ul>
    </>
  );
};
