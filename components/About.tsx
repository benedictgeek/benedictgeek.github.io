import { useAppContext } from "@/state/AppContextProvider";
import { Button } from "@/utility/components/Button";
import { useEffect, useRef } from "react";

export const About = () => {
  const { setCurrentHash } = useAppContext();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let entry = entries[0];
        if (entry.isIntersecting) {
          setCurrentHash("about");
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(ref.current || document.body);
    return () => observer.unobserve(ref.current || document.body);
  }, []);
  return (
    <section className="relative pt-[100px] pb-[70px]" id="about" ref={ref}>
      <div className="grid gap-y-[24px] grid-cols-[repeat(auto-fit,minmax(250px,auto))] max-w-[540px] ml-auto mr-auto sm:max-w-[960px]">
        <div className="flex items-center justify-center">
          <div
            className="rounded-[50%]  w-[230px] h-[230px] bg-black bg-[center_0px] bg-no-repeat"
            style={{ backgroundImage: `url(/images/avartar.png)` }}
          ></div>
        </div>
        <div className="flex flex-col px-[24px]">
          <div className="flex items-center text-[#666] text-lg">
            Software engineer with 4 years of experience, passionate about
            building solutions that further makes human lives easier. I am
            well-versed in maintaining all aspects of a software development
            cycle. My proven leadership and communication skills have helped me
            meet companies objectives.
          </div>
          <Button
            href="https://docs.google.com/document/d/12q8rMLpZ0HQnpqhhgoJwOwH1Z4Ig1kRQIWwAEQGs-dE/edit?usp=sharing"
            target="_blank"
            className="rounded-[30px] mt-6 border-2 px-[20px] text-[14px] bg-transparent !border-black smooth-link align-middle text-black w-fit"
          >
            View Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
