import { useAppContext } from "@/state/AppContextProvider";
import { Button } from "@/utility/Button";
import { useEffect, useRef } from "react";

export const HeroSection = () => {
  const { setCurrentHash } = useAppContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let entry = entries[0];
        if (entry.isIntersecting) {
          setCurrentHash("home");
        }
      },
      {
        threshold: 1,
      }
    );
    observer.observe(ref.current || document.body);

    return () => observer.unobserve(ref.current || document.body);
  }, []);
  return (
    <section
      className="h-full text-white relative bg-black/[85] bg-center bg-fixed bg-no-repeat"
      id="home"
      style={{ backgroundImage: `url(/images/code-bg.jpeg)` }}
      ref={ref}
    >
      <div className=" bg-black opacity-[0.85] absolute top-0 left-0 w-full h-full"></div>
      <div className=" absolute right-0 left-0 top-[50%] translate-y-[-50%] z-[1] text-center py-12">
        <h1 className="text-[34px] sm:text-[64px] sm:mt-[5%]">
          I&apos;m{" "}
          <span className=" font-[600] leading-[1.3rem] tracking-[0.5px]">
            Olushola
          </span>
          , a <br />
          <span className=" font-[600] leading-[1.3em] tracking-[0.5px]">
            Software Engineer
          </span>
          .
        </h1>
        <div className="mt-[40px]">
          <Button
            href="#about"
            className=" rounded-[30px] bg-transparent border-transparent py-[15px] px-[30px] text-[12px] inline-flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 96 96"
              fill="none"
              stroke="#1ED167"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="48" cy="48" r="45" />
              <polyline
                points="32 48 48 64 64 48"
                className=" animate-bounce"
              />
              <line
                x1="48"
                y1="32"
                x2="48"
                y2="64"
                className=" animate-bounce"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};
