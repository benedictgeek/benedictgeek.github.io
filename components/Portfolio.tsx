export const Portfolio = () => {
  return (
    <section className="bg-[#f9f9f9] pt-[100px] pb-[70px]" id="portfolio">
      <div className=" px-[15px] ml-auto mr-auto sm:max-w-[960px] xl:max-w-[1140px]">
        <h2 className="text-[34px] leading-[1.1] font-[500]">Portfolio</h2>
        <p className="text-[#868E96] font-[200] text-lg mt-[15px] mb-[15px]">
          Have a look at some of the projects I have worked on
        </p>

        <div className="mt-[60px]">
          <div className=" grid gap-[50px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export const PortfolioCard = () => {
  return (
    <article className="bg-white rounded overflow-hidden">
      <img
        src="/images/img01.jpg"
        className=" max-h-[280.83px] w-full object-cover"
      />
      <div className="p-[1.25rem]">
        <h4 className="text-[20px] mb-[0.75rem] font-medium">
          <a href="#">Clubly</a>
        </h4>

        <p className=" mb-4 text-[#666] break-all">
          The longest word in any of the major English language dictionaries is
          pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a
          lung disease contracted from the inhalation of very fine silica
          particles, specifically from a volcano; medically, it is the same as
          silicosis.
        </p>
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
