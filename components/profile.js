export const ProfileSection = () => {
  return (
    <div className="profile col-md-3 wow fadeInDown">
      <div className="profile-image">
        {/* <Image alt="image" src="images/Profile-img.png" /> */}
        <img alt="image" src="images/Profile-img.png" />
      </div>
      <div className="profile-info">
        <div className="name-job">
          <h1>DAUDA OLUSHOLA BENEDICT</h1>
          <span className="job"> Software Engineer </span>
          <div className="details-section">
            <div className="profile-detail"> +2348139194625 </div>
            <div className="profile-detail"> olushola251@gmail.com </div>
            <div className="profile-detail"> Lagos, Nigeria </div>
          </div>
        </div>
        {/* .name-job */}
        <p className="body-text" style={{ padding: "10px 10px" }}>
          Software engineer with 4 years of experience, passionate about
          building solutions that further makes human lives easier. I am
          well-versed in maintaining all aspects of a software development
          cycle. My proven leadership and communication skills have helped me
          meet companies objectives.
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
  );
};
