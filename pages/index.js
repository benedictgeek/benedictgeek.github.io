import Head from "next/head";
import Script from 'next/script'
import Image from "next/image"
import { experiences } from "../data/experience";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dauda Olushola Benedict - Resume</title>
        <meta
          name="description"
          content="Dauda Olushola Benedict - software Engineer"
        />
        <meta
          name="keywords"
          content="business, personal, portfolio, software engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* Preloading */}
        <div id="preloader">
          <div className="spinner">
            <div
              className="uil-ripple-css"
              style={{ transform: "scale(0.29)" }}
            >
              <div />
              <div />
            </div>
          </div>
        </div>

        <div className="parallax" />
        <div id="wrapper">
          <div className="container">
            <div className="row">
              {/* Profile Informations*/}
              <div className="profile col-md-3 wow fadeInDown">
                <div className="profile-image">
                  <Image  alt="image" src="images/Profile-img.png"/>
                  {/* <img alt="image" src="images/Profile-img.png" /> */}
                </div>
                <div className="profile-info">
                  <div className="name-job">
                    <h1>DAUDA OLUSHOLA BENEDICT</h1>
                    <span className="job"> Software Engineer </span>
                    <div className="details-section">
                      <div className="profile-detail"> +2348139194625 </div>
                      <div className="profile-detail">
                        {" "}
                        olushola251@gmail.com{" "}
                      </div>
                      <div className="profile-detail"> Lagos, Nigeria </div>
                    </div>
                  </div>
                  {/* .name-job */}
                  <p className="body-text" style={{ padding: "10px 10px" }}>
                    Software engineer with 4 years of experience, passionate
                    about building solutions that further makes human lives
                    easier. I am well-versed in maintaining all aspects of a
                    software development cycle. My proven leadership and
                    communication skills have helped me meet companies
                    objectives.
                  </p>
                  <div className="social-icons">
                    <a className="facebook" href="mailto:olushola251@gmail.com">
                      <i className="fa fa-envelope" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer" 
                      className="facebook"
                      href="https://github.com/benedictgeek/"
                    >
                      <i className="fa fa-github" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer" 
                      className="behance"
                      href="https://www.linkedin.com/in/olushola-dauda-542a71130/"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer" 
                      className="twitter"
                      href="https://twitter.com/IamD_O_B"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer" 
                      className="facebook"
                      href="https://benedictgeek.medium.com/"
                    >
                      <i className="fa fa-medium" />
                    </a>
                  </div>
                </div>
              </div>
              {/*.profile .col-md-3*/}
              {/*Right Section*/}
              <div id="tab-container" className="col-md-9">
                {/*Top Menu */}
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
                    <a className="page-scroll" href="#education">
                      <i className="fa fa-graduation-cap" />
                      <span> EDUCATION </span>
                    </a>
                  </li>
                  <li>
                    <a className="page-scroll" href="#portfolio">
                      <i className="fa fa-th-list" /> <span> PORTFOLIO </span>
                    </a>
                  </li>
                  <li>
                    <a className="page-scroll" href="#skills">
                      <i className="fa fa-bars" /> <span> SKILLS </span>
                    </a>
                  </li>
                </ul>
                {/*Right Content */}

                <div id="experience" className="content col-md-12">
                  <div className="row">
                    <div className="page-title">
                      <h2>Experience</h2>
                    </div>
                    <div className="col-md-12" style={{ marginTop: "15px" }}>
                      {/*Resume Work Timeline*/}
                      <div className="resume-education col-md-12">
                        <div className="rounded-icon">
                          <i className="fa fa-suitcase" />
                        </div>
                        <div className="resume-out">
                          {experiences.map((experience, index) => {
                            return (
                              <div
                                key={`experience ${index}`}
                                className="resume-info"
                              >
                                <h2 className="info-title">
                                  {experience.title}{" "}
                                  {experience.company != null &&
                                    `- ${experience.company}`}
                                </h2>
                                <span className="info-date">
                                  {experience.date}
                                </span>
                                <ul>
                                  {experience.responsibilities.map((resp, index) => {
                                    return <li key={`exp-item-${index}`}>{resp}</li>;
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                        {/* .resume-out end */}
                      </div>
                    </div>
                    {/* .col-md-12 .page */}
                  </div>
                  {/*.row end*/}
                </div>
                {/* #resume .content .col-md-12 end */}
                {/*Resume Section */}
                <div id="education" className="content col-md-12">
                  <div className="row">
                    <div className="page-title">
                      <h2>Education and Certificates</h2>
                    </div>
                    <div className="col-md-12" style={{ marginTop: "15px" }}>
                      {/*Resume Education Timeline*/}
                      <div className="resume-education col-md-12">
                        <div className="rounded-icon">
                          <i className="fa fa-graduation-cap" />
                        </div>
                        <div className="resume-out">
                          <div className="resume-info">
                            <h2 className="info-title">University of Ilorin</h2>
                            <span className="info-date">2012 - 2016 </span>
                            <p>B.Sc Mathematics, First Class Honours.</p>
                          </div>
                          <div className="resume-info">
                            <h2 className="info-title">Automation Anywhere</h2>
                            <span className="info-date">2020</span>
                            <p>Robotic Process Automation (RPA)</p>
                          </div>
                        </div>
                        {/* .resume-out end */}
                      </div>
                    </div>
                    {/* .col-md-12 .page */}
                  </div>
                  {/*.row end*/}
                </div>
                <div id="portfolio" className="content col-md-12">
                  <div className="row">
                    <div className="page-title">
                      <h2>My Portfolio</h2>
                    </div>
                    <div
                      className="col-md-12 col-sm-12 col-xs-12"
                      style={{ marginTop: "15px" }}
                    >
                      {projects.map((project, index) => {
                        return (
                          <div key={`project ${index}`} className="resume-out">
                            <div className="resume-info portfolio">
                              <h2 className="info-title">
                                <a
                                  target="_blank"
                                  rel="noreferrer"
                                  className="portfolio-link"
                                  href={project.url}
                                >
                                  {project.title}
                                </a>
                              </h2>
                              <span className="info-date">{project.role}</span>
                              <p>{project.details}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* .col-md-12 .page */}
                  </div>
                  {/*.row end*/}
                </div>
                {/* #portfolio .content .col-md-12 end */}
                {/*Portfolio Section */}
                <div id="skills" className="content col-md-12">
                  <div className="row">
                    <div className="page-title">
                      <h2>Skills</h2>
                    </div>
                    {/* Skills */}
                    <div className="col-md-12 gray-bg ptext">
                      <div className="col-md-6 my-skills">
                        <ul className="skill-list">
                          <li>
                            <h3>JavaScript</h3>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "90%" }}
                              />
                            </div>
                          </li>
                          <li>
                            <h3>TypeScript</h3>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "75%" }}
                              />
                            </div>
                          </li>
                          <li>
                            <h3>Nodejs</h3>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "80%" }}
                              />
                            </div>
                          </li>
                          <li>
                            <h3>ReactJs</h3>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "85%" }}
                              />
                            </div>
                          </li>
                          <li>
                            <h3>Redux</h3>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "85%" }}
                              />
                            </div>
                          </li>
                          <li>
                            <h3>Python</h3>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/*.col-md-6 .my-skills end*/}
                      <div className="col-md-6 my-skills">
                        <ul className="skill-list">
                          <li>
                            <h3>Flutter</h3>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "70%" }}
                              />
                            </div>
                          </li>
                          <li>
                            <h3>LaravelPHP</h3>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </li>
                          <li>
                            <h3>Git</h3>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "75%" }}
                              />
                            </div>
                          </li>
                          <li>
                            <h3>AWS</h3>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/*.col-md-6 .my-skills end*/}
                    </div>
                    {/* Services */}
                    <div className="col-md-12 pwedo">
                      <div className="col-md-12 col-sm-12 col-xs-12 services">
                        <div className="service col-md-4 col-sm-6">
                          <i className="fa fa-desktop" />
                          <div className="features">
                            <b>Frontend</b>
                            <p>UI/UX development</p>
                          </div>
                        </div>
                        {/* .service .col-md-4 .col-sm-6 end */}
                        <div className="service col-md-4 col-sm-6">
                          <i className="fa fa-cogs" />
                          <div className="features">
                            <b>Backend</b>
                            <p>Monolith/Microservices</p>
                          </div>
                        </div>
                        {/* .service .col-md-4 .col-sm-6 end */}
                        <div className="service col-md-4 col-sm-6">
                          <i className="fa fa-mobile" />
                          <div className="features">
                            <b>Mobile</b>
                            <p>Mobile App development</p>
                          </div>
                        </div>
                      </div>
                      {/* .col-md-12 .services */}
                    </div>
                    {/* .col-md-12 .spotted*/}
                  </div>
                  {/*.row end*/}
                </div>
                {/* #portfolio .content .col-md-12 end */}
              </div>
              {/* #tab-container .col-md-9 end */}
            </div>
            {/* .row end*/}
          </div>
          {/* .container end */}
        </div>
        {/* #wrapper end*/}
        <div id="overlay" />

        <Script src="js/jquery-2.1.4.min.js"></Script>

        <Script src="js/jquery.easytabs.min.js"></Script>
        {/* <Script src="http://maps.google.com/maps/api/js?"></Script>  */}
        <Script src="js/isotope.pkgd.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/styleswitcher.js"></Script>
        <Script src="perfect-scrollbar/jquery.mousewheel.js"></Script>
        <Script src="perfect-scrollbar/perfect-scrollbar.js"></Script>
        <Script src="js/main.js"></Script>

        <Script src="js/ready.js"></Script>
      </div>
    </div>
  );
}
