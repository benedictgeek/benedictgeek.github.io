import Head from "next/head";
import { ExperienceSection } from "../components/experience";
import { PotfolioSection } from "../components/projects";
import { ProfileSection } from "../components/profile";
import { EducationSection } from "../components/education";
import { SkillSection } from "../components/skills";
import { TabSection } from "../components/tab";

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
              <ProfileSection />
              <div id="tab-container" className="col-md-9">
                <TabSection />

                <ExperienceSection />

                <EducationSection />
                <PotfolioSection />
                <SkillSection />
              </div>
            </div>
          </div>
        </div>
        <div id="overlay" />
      </div>
    </div>
  );
}
