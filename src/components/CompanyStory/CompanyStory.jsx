import line from "../../assets/icons/line.svg";
import companyLogo1 from "../../assets/icons/companyLogo1.svg";
import companyLogo2 from "../../assets/icons/companyLogo2.svg";
import companyLogo3 from "../../assets/icons/companyLogo3.svg";
import companyLogo4 from "../../assets/icons/companyLogo4.svg";
import companyLogo5 from "../../assets/icons/companyLogo5.svg";

export default function CompanyStory() {
  return (
    <>
      <section className="px-40 py-24">
        <div className="grid grid-cols-2">
          <div className="max-w-xl">
            <span className="font-semibold text-[16px] leading-[175%] text-[#232536] pb-4">
              Our Story 👇{" "}
            </span>
            <h2 className="font-semibold text-[36px] leading-[150%] text-[#232536] pb-6">
              From Startups to Titans of Industry
            </h2>
            <p className="font-normal text-[16px] leading-[150%] text-[#232536]">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic unsatiable saw his giving Remain expense of gay produce
              excited perceived do an a china mean its so ye when in explained
              Hearts am next over match mr partiality not shoud latter thus as
              out no passed forming middleton exercise up
            </p>
          </div>
          <div className="max-w-xl bg-[#FFE6D2] grid grid-cols-2 pt-15.5 pb-20 pl-27.5  gap-15.5">
            <div>
              <p className="font-bold text-[40px] text-[#232536]">1560+</p>
              <div className="flex gap-1 my-2">
                <img src={line} alt="" />
              </div>
              <p className="font-semibold text-[16px] leading-[175%] text-[#5d5f6d]">
                Project Delivered
              </p>
            </div>
            <div>
              <p className="font-bold text-[40px] text-[#232536]">100+</p>
              <div className="flex gap-1 my-2">
                <img src={line} alt="" />
              </div>
              <p className="font-semibold text-[16px] leading-[175%] text-[#5d5f6d]">
                Professional
              </p>
            </div>
            <div>
              <p className="font-bold text-[40px] text-[#232536]">950+</p>
              <div className="flex gap-1 my-2">
                <img src={line} alt="" />
              </div>
              <p className="font-semibold text-[16px] leading-[175%] text-[#5d5f6d]">
                Happy Client
              </p>
            </div>
            <div>
              <p className="font-bold text-[40px] text-[#232536]">10 yrs</p>
              <div className="flex gap-1 my-2">
                <img src={line} alt="" />
              </div>
              <p className="font-semibold text-[16px] leading-[175%] text-[#5d5f6d]">
                Experience
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 py-24">
          <img
            src={companyLogo1}
            alt="logo1"
            className="cursor-pointer pl-20"
          />
          <img src={companyLogo2} alt="logo2" className="cursor-pointer" />
          <img src={companyLogo3} alt="logo3" className="cursor-pointer" />
          <img src={companyLogo4} alt="logo4" className="cursor-pointer" />
          <img src={companyLogo5} alt="logo5" className="cursor-pointer" />
        </div>
      </section>
    </>
  );
}
