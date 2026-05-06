import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrowRight from "../../assets/icons/arrowRight.svg";

export default function CareerInnerHero() {
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-50 py-24">
      <div className="flex justify-between gap-14">
        <div className="">
          <p className="font-medium text-[14px] leading-[143%] tracking-[0.21em] uppercase text-[#3F4150] mb-6">
            CAREER AT Ether
          </p>
          <h1 className="font-semibold text-[48px] leading-[121%] items-center text-[#232536] mb-4">
            {state.title}
          </h1>
          <p className="font-normal text-[16px] leading-[150%] text-[#3F4150] mb-10">
            Through True Rich Attended does no end it his <br /> mother since
            real had half every him case in packages.
          </p>

          <button className="bg-[#444CFC] flex px-8 py-5 gap-3 font-medium text-[16px] leading-[150%] text-white cursor-pointer">
            Apply Now
            <img src={arrowRight} alt="" />
          </button>
        </div>

        <div className="bg-[#ffe0c7] px-20 py-20 flex flex-col">
          <h2 className="font-semibold text-[24px] leading-[150%] items-center text-[#232536] mb-6">
            Job Description
          </h2>
          <p className="font-normal text-[16px] leading-[150%] text-black mb-4">
            Remote, India , 4 to 5 Years Of Experience
          </p>
          <p className="font-normal text-[16px] leading-[150%] text-black mb-4">
            Department: Product Engineering
          </p>
          <p className="font-normal text-[16px] leading-[150%] text-black mb-10">
            Full Time 5 Position Available.
          </p>
        </div>
      </div>
    </section>
  );
}
