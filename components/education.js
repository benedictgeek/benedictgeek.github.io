export const EducationSection = () => {
  return (
    <div id="education" className="content col-md-12">
      <div className="row">
        <div className="page-title">
          <h2>Education and Certificates</h2>
        </div>
        <div className="col-md-12" style={{ marginTop: "15px" }}>
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
          </div>
        </div>
      </div>
    </div>
  );
};
