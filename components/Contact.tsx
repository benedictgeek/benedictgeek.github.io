import { useAppContext } from "@/state/AppContextProvider";
import { Input, TextArea } from "@/utility/components/Input";
import { useEffect, useRef } from "react";

export const Contact = () => {
  const { setCurrentHash } = useAppContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let entry = entries[0];
        if (entry.isIntersecting) {
          setCurrentHash("contact");
        }
      },
      {
        threshold: 0.1,
      }
    );
    observer.observe(ref.current || document.body);

    return () => observer.unobserve(ref.current || document.body);
  }, []);
  return (
    <section
      className="bg-[#f9f9f9] pt-[100px] pb-[70px]"
      id="contact"
      ref={ref}
    >
      <div className=" px-[15px] ml-auto mr-auto sm:max-w-[960px] xl:max-w-[1140px]">
        <h2 className="text-[34px] leading-[1.1] font-[500]">Contact</h2>
        <p className="text-[#868E96] font-[200] text-lg mt-[15px] mb-[15px]">
          You can reach out to me by using the contact information below
        </p>

        <div className="mt-[60px]">
          <div className=" flex flex-wrap gap-[50px] text-[#666]">
            <div className=" flex-1">
              <div className="flex flex-row mt-6 gap-2">
                <a
                  href="https://www.linkedin.com/in/olushola-dauda-542a71130/"
                  target={"_blank"}
                >
                  <svg
                    fill="#000000"
                    height="35px"
                    width="35px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-143 145 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7
	c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4
	c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6
	c35.5,0,63.3,23,63.3,72.4V508.1z"
                    />
                  </svg>
                </a>
                <a href="https://twitter.com/IamD_O_B" target={"_blank"}>
                  <svg
                    fill="#000000"
                    height="35px"
                    width="35px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-143 145 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M215.2,361.2c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
	c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
	C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
	c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
	c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"
                    />
                  </svg>
                </a>

                {/* <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              width="35px"
              height="35px"
              viewBox="0 0 528.633 528.632"
              // xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M264.317,326.235c-13.739,0-26.659-5.349-36.371-15.067L0.692,83.914v356.863c0,16.897,13.703,30.601,30.6,30.601h466.044
			c16.896,0,30.6-13.703,30.6-30.601V83.92L300.693,311.167C290.977,320.886,278.057,326.235,264.317,326.235z"
                  />
                  <path
                    d="M0.692,57.255H0l0.698,0.697l240.229,240.234c6.463,6.457,14.927,9.688,23.391,9.688c8.464,0,16.933-3.231,23.39-9.688
			L527.936,57.953l0.697-0.697h-0.697H0.692L0.692,57.255z"
                  />
                </g>
              </g>
            </svg> */}
              </div>
              <p className=" pt-2 pb-2 hover:text-black">
                <a href="tel:+2348139194625">+234 813 919 4625</a>
              </p>
              <p className=" pt-2 pb-2 hover:text-black">
                <a href="mailto:olushola251@gmail.com">olushola251@gmail.com</a>
              </p>
              <p className=" pt-2 pb-2">Lagos, Nigeria.</p>
            </div>

            <div className=" flex-[1_1_320px]">
              <form
                action="https://formsubmit.co/olushola251@gmail.com"
                method="POST"
              >
                <div className=" flex flex-wrap gap-[30px]">
                  <Input
                    className=" flex-[1_1_250px]"
                    placeholder="Name"
                    name="name"
                    type="text"
                    required
                  />
                  <Input
                    className=" flex-[1_1_250px]"
                    placeholder="Email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-[30px] mt-[30px]">
                  <Input placeholder="Subject" type="text" name="_subject" />
                  <TextArea rows={5} placeholder="Message" name="message" />
                  <button
                    type="submit"
                    className=" self-start px-[20px] py-[15px] border-2 border-black bg-black text-sm tracking-[2px] text-white font-medium hover:text-black hover:bg-transparent hover:border-2 hover:border-black transition-all"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
