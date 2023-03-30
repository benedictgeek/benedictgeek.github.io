import { useAppContext } from "@/state/AppContextProvider";
import { LegacyRef, useEffect, useMemo, useRef } from "react";

interface Project {
  title: string;
  role: string;
  url: string;
  details: string;
}

const PORTFOLIO_DATA: Project[] = [
  {
    title: "Airplane",
    role: "Member",
    url: "https://www.airplane.dev/",
    details: `Airplane provides developers with an infrastructure to create internal tools fast and easily. I contributed to the templates collection which developers can extend or customize to their needs.`,
  },
  {
    title: "Helping My Friend",
    role: "Lead",
    url: "http://www.helpingmyfriend.com",
    details: `A charity platform that gives people the opportunity to help others in various ways, such as through financial donations, participating in meal deliveries, signing up for work parties, and potlucks. I worked on both the front end and back end, enabling the project to go live by optimizing page loads, adding new features, and ensuring data integrity on the database.`,
  },
  {
    title: "Kodobe",
    role: "Lead",
    url: "https://kodobe.com",
    details: `A gamification company website showcasing the features the business provides, pricing information, FAQs, and calls to action. I was part of the front-end team while working closely with the UI/UX team.`,
  },
  {
    title: "Clubly",
    role: "Lead",
    url: "https://clubly.io",
    details: `An association management platform where
associations get to bring their activites such as
Members management, Events, Finances, Surveys, and
Dues to be managed by the platform.`,
  },
  {
    title: "PeerScore",
    role: "Lead",
    url: "https://peerscore.ng",
    details: `A peer-to-peer lending mobile application
    facilitating loan repayments and ensuring financial
    responsibility. Available for both Android and iOS
    devices.`,
  },
  {
    title: "Getrates",
    role: "Member",
    url: "https://www.getrates.co",
    details: `An investment platform serving as a broker between
    users and financial institutions. The institutions
    bring their investment products on to the platform,
    users invest and Getrates manages their investments.`,
  },
  {
    title: "JCN Fitwears",
    role: "Lead",
    url: "https://jcnfitwears.com",
    details: ` An E-commerce website that specializes in the sales
    of fitness wears.`,
  },
];
export const Portfolio = () => {
  const { setCurrentHash } = useAppContext();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let entry = entries[0];
        if (entry.isIntersecting) {
          setCurrentHash("portfolio");
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(ref.current || document.body);
    return () => observer.unobserve(ref.current || document.body);
  }, []);

  return (
    <section
      className="bg-[#f9f9f9] pt-[100px] pb-[70px]"
      id="portfolio"
      ref={ref}
    >
      <div className=" px-[15px] ml-auto mr-auto sm:max-w-[960px] xl:max-w-[1140px]">
        <h2 className="text-[34px] leading-[1.1] font-[500]">Portfolio</h2>
        <p className="text-[#868E96] font-[200] text-lg mt-[15px] mb-[15px]">
          Have a look at some of the projects I have worked on
        </p>

        <div className="mt-[60px]">
          <div className=" grid gap-[50px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            {PORTFOLIO_DATA.map((project, index) => {
              return (
                <PortfolioCard key={`project_${index}`} project={project} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const PortfolioCard = ({ project }: { project: Project }) => {
  return (
    <article className="bg-white rounded overflow-hidden">
      <img
        src="/images/img01.jpg"
        className=" max-h-[280.83px] w-full object-cover"
      />
      <div className="p-[1.25rem]">
        <h4 className="text-[20px] mb-[0.75rem] font-medium">
          <a href={project.url} target="_blank">
            {project.title}
          </a>
        </h4>

        <p className=" mb-4 text-[#666] break-all">{project.details}</p>
        <div className="flex gap-[8px] flex-wrap">
          <SkillChip />
          <SkillChip />
        </div>
      </div>
    </article>
  );
};

export const SkillChip = () => {
  return (
    <div className=" w-fit bg-[#1ED167]/10 px-2 py-1 leading-[1] rounded-[1px] border border-[#1ED167] text-[#1ED167] text-center">
      React
    </div>
  );
};
