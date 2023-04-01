import { useAppContext } from "@/state/AppContextProvider";
import { LegacyRef, useEffect, useMemo, useRef } from "react";

interface Project {
  title: string;
  role: string;
  url: string;
  image: string;
  details: string;
  skills: string[];
}

const PORTFOLIO_DATA: Project[] = [
  {
    title: "Mochi Health",
    role: "Member",
    url: "https://www.airplane.dev/",
    image: "/images/portfolio/mochi.png",
    details: `As a full stack engineer, I was involved in the development of Mochi, a platform that is dedicated to matching patients with healthcare providers without any possibility of discrimination. The platform ensures that everyone has access to the healthcare services they need, regardless of their background or circumstances.`,
    skills: ["React", "Node.js", "DynamoDB", "Severless"],
  },
  {
    title: "Kodobe",
    role: "Lead",
    url: "https://kodobe.com",
    image: "/images/portfolio/kodobe.png",
    details: `A gamification service provider, helping brands acquire new customers or retain existing customer base by deploying elements of gamification. I was part of the front-end team while working closely with the UI/UX team.`,
    skills: ["React", "Next.js", "Node.js", "AWS Amplify"],
  },
  {
    title: "Airplane",
    role: "Member",
    url: "https://www.airplane.dev/",
    image: "/images/portfolio/airplane.png",
    details: `Airplane provides developers with an infrastructure to create internal tools fast and easily. I contributed to the templates collection that developers can extend or customize to their needs.`,
    skills: ["React", "Node.js"],
  },
  {
    title: "Clubly",
    role: "Lead",
    url: "https://clubly.io",
    image: "/images/portfolio/clubly.png",
    details: `An association management platform where
associations get to bring their activites such as
Members management, Events, Finances, Surveys, and
Dues to be managed by the platform.`,
    skills: ["React", "Node.js", "AWS S3", "EC2"],
  },
  {
    title: "SitePro",
    role: "Lead",
    url: "https://www.sitepro.ng/",
    image: "/images/portfolio/sitepro.png",
    details: `SitePro is a construction project management and collaboration tool, helping construction workers organize their projects seamlessly. I built the mobile application as a solo engineer and developed the backend service.`,
    skills: ["Flutter", "Firebase", "React", "Node.js"],
  },
  {
    title: "PeerScore",
    role: "Lead",
    url: "https://peerscore.ng",
    image: "/images/portfolio/peerscore.png",
    details: `A peer-to-peer lending mobile application
    facilitating loan repayments and ensuring financial
    responsibility. In addition to building the mobile application from scratch, I also played a key role in developing the backend of the application.`,
    skills: ["Flutter", "React", "Node.js"],
  },

  // {
  //   title: "Helping My Friend",
  //   role: "Lead",
  //   url: "http://www.helpingmyfriend.com",
  //   image: "/images/portfolio/hmf.png",
  //   details: `A charity platform that gives people the opportunity to help others in more ways other than just financial donations. I worked on both the frontend and backend, enabling the project to go live by optimizing page loads, adding new features, and ensuring data integrity on the database.`,
  //   skills: ["HTML", "Bootsrap", "Node.js"],
  // },

  // {
  //   title: "Getrates",
  //   role: "Member",
  //   url: "https://www.getrates.co",
  //   image: "/images/portfolio/airplane.png",
  //   details: `An investment platform serving as a broker between
  //   users and financial institutions. The institutions
  //   bring their investment products on to the platform,
  //   users invest and Getrates manages their investments.`,
  // },
  // {
  //   title: "JCN Fitwears",
  //   role: "Lead",
  //   url: "https://jcnfitwears.com",
  //   image: "/images/portfolio/airplane.png",
  //   details: ` An E-commerce website that specializes in the sales
  //   of fitness wears.`,
  // },
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
          Have a look at some of the projects I have worked on...
        </p>

        <div className="mt-[60px]">
          <div className=" grid gap-[50px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
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
    <article className="bg-white rounded overflow-hidden ">
      <a href={project.url} target="_blank" className="flex flex-col">
        <img
          src={project.image}
          className=" max-h-[280.83px] min-h-[200px] w-full object-cover"
        />
        <div className="p-[1.25rem] flex flex-col flex-1">
          <h4 className="text-[20px] mb-[0.75rem] font-medium">
            {project.title}
          </h4>

          <p className=" mb-4 text-[#666] break-normal flex-1">
            {project.details}
          </p>
          <div className="flex gap-[8px] flex-wrap">
            {project.skills.map((item, index) => (
              <SkillChip key={`${project.title}_skill_${index}`} title={item} />
            ))}
          </div>
        </div>
      </a>
    </article>
  );
};

export const SkillChip = ({ title }: { title: string }) => {
  return (
    <div className=" w-fit bg-[#1ED167]/10 px-2 py-1 leading-[1] rounded-[1px] border border-[#1ED167] text-[#1ED167] text-center">
      {title}
    </div>
  );
};
