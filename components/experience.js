import { experiences } from "../data/experience";

export const ExperienceSection = () => {
  return (
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
                  <div key={`experience ${index}`} className="resume-info">
                    <h2 className="info-title">
                      {experience.title}{" "}
                      {experience.company != null && `- ${experience.company}`}
                    </h2>
                    <span className="info-date">{experience.date}</span>
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
  );
};
