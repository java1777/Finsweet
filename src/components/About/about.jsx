import line from "../../assets/icons/line.svg";
import aboutImg1 from "../../assets/img/about_img1.png";
import aboutImg2 from "../../assets/img/about_img2.png";
import aboutImg3 from "../../assets/img/about_img3.png";
import Button from "../Button/btn";

export default function About() {
  return (
    <section className="px-40 py-24 bg-white mb-24.5">
      <div className="flex items-center justify-between">
        <div className="max-w-xl">
          <p className="font-medium text-[14px] leading-[143%] tracking-[0.21em] uppercase text-black mb-4">
            ABOUT US
          </p>
          <h2 className="font-semibold text-[48px] leading-[121%] text-[#232536]">
            The company leads entire webdesign process from concept to delivery.
          </h2>
        </div>

        <div className="max-w-xl">
          <h3 className="font-semibold text-[36px] leading-[150%] text-[#232536] mb-4">
            The Era Of Technology.
          </h3>
          <p className="font-normal text-[16px] leading-[150%] text-[#5d5f6d]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.{" "}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 pt-12 mb-12 relative">
        <img src={aboutImg1} alt="meeting" />
        <img src={aboutImg2} alt="meeting" />
        <img src={aboutImg3} alt="meeting" />
      </div>

      <div className="flex items-end justify-between">
        <div className="flex gap-16">
          <div>
            <p className="font-bold text-[40px] text-[#232536]">1560+</p>
            <div className="flex gap-1 my-2">
              <img src={line} alt="" />
            </div>
            <p className="text-[16px] text-[#5d5f6d]">Project Delivered</p>
          </div>
          <div>
            <p className="font-bold text-[40px] text-[#232536]">100+</p>
            <div className="flex gap-1 my-2">
              <img src={line} alt="" />
            </div>
            <p className="text-[16px] text-[#5d5f6d]">Professional</p>
          </div>
          <div>
            <p className="font-bold text-[40px] text-[#232536]">950+</p>
            <div className="flex gap-1 my-2">
              <img src={line} alt="" />
            </div>
            <p className="text-[16px] text-[#5d5f6d]">Happy Client</p>
          </div>
          <div>
            <p className="font-bold text-[40px] text-[#232536]">10 yrs</p>
            <div className="flex gap-1 my-2">
              <img src={line} alt="" />
            </div>
            <p className="text-[16px] text-[#5d5f6d]">Experience</p>
          </div>
        </div>

        <a
          href="#"
          className="flex items-center gap-3 text-indigo-500 font-medium text-[16px]  px-6 py-3 rounded hover:bg-indigo-50 transition"
        >
          Read about us
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="#6366f1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
