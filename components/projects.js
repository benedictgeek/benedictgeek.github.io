
import { projects } from "../data/projects";

export const PotfolioSection = () => {
  return (
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
  );
};
