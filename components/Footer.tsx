export const Footer = () => {
  return (
    <footer className="bg-black pt-[100px] pb-[70px]">
      <div className=" px-[15px] ml-auto mr-auto sm:max-w-[960px] xl:max-w-[1140px]">
        <div className=" flex flex-col items-center justify-center w-full">
          <img src="/images/main-logo.png" className=" w-32" />
          <p className=" text-[#777] mt-6 tracking-[1.5px] font-semibold">
            DAUDA OLUSHOLA BENEDICT
          </p>
          <p className=" text-[#777] mt-6 tracking-[1.5px] font-semibold">
            COPYRIGHT © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
