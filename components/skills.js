import { skills } from "../data/skills";

export const SkillSection = () => {

  const halfPoint = Math.round(skills.length / 2);
  return (
    <div id="skills" className="content col-md-12">
      <div className="row">
        <div className="page-title">
          <h2>Skills</h2>
        </div>
        <div className="col-md-12 gray-bg ptext">
          <div className="col-md-6 my-skills">
            <ul className="skill-list">
              {skills
                .slice(0, halfPoint)
                .map((skill, index) => {
                  return (
                    <li key={`skill-${index}`}>
                      <h3>{skill.title}</h3>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: `${skill.progress}%` }}
                        />
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-md-6 my-skills">
            <ul className="skill-list">
              {skills.slice(halfPoint).map((skill, index) => {
                return (
                  <li key={`skill-${index}`}>
                    <h3>{skill.title}</h3>
                    <div className="progress">
                      <div
                        className="percentage"
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </li>
                );
              })}
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
  );
};
