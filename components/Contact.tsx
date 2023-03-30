import { Input, TextArea } from "@/utility/Input";

export const Contact = () => {
  return (
    <section className="bg-[#f9f9f9] pt-[100px] pb-[70px]" id="contact">
      <div className=" px-[15px] ml-auto mr-auto sm:max-w-[960px] xl:max-w-[1140px]">
        <h2 className="text-[34px] leading-[1.1] font-[500]">Contact</h2>
        <p className="text-[#868E96] font-[200] text-lg mt-[15px] mb-[15px]">
          You can reach out to me by using the contact information below
        </p>

        <div className="mt-[60px]">
          <div className=" flex flex-wrap gap-[50px] text-[#666]">
            <div className=" flex-1">
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
