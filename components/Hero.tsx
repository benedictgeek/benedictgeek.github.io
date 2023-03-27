import { Button } from "@/utility/Button";

export const HeroSection = () => {
  return (
    <section
      className="h-full text-white relative bg-black/[85] bg-center bg-fixed bg-no-repeat"
      id="hero"
      style={{ backgroundImage: `url(/images/code-bg.jpeg)` }}
    >
      <div className=" bg-black opacity-[0.85] absolute top-0 left-0 w-full h-full"></div>
      <div className="absolute top-[60%] translate-y-[-60%] left-[300px] right-[300px] z-[1] text-center py-12">
        <h1>
          I'm{" "}
          <span className=" font-[600] text-[64px] leading-[1.3rem] tracking-[0.5px]">
            Olushola
          </span>
          , a <br />
          <span className=" font-[600] text-[64px] leading-[1.3em] tracking-[0.5px]">
            Software Engineer
          </span>
          .
        </h1>
        <div className="mt-[40px]">
          <Button
            href="#about"
            className=" rounded-[30px] bg-[#007bff] border-[#007bff]"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};
