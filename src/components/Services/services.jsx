import Button from "../Button/btn";
import arrowRightBold from "../../assets/icons/arrowRightBold.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import service1 from "../../assets/icons/service1.svg";
import service2 from "../../assets/icons/service2.svg";
import service3 from "../../assets/icons/service3.svg";

export default function Services() {
  return (
    <section className="flex items-center bg-[#ffe6d2] px-40 py-24">
      <div>
        <p className="font-medium text-[14px] leading-[143%] tracking-[0.21em] uppercase text-black pb-3">
          Our Services
        </p>
        <h2 className="font-semibold text-[48px] leading-[121%] text-[#232536] pb-10">
          We build software solutions <br /> that solve client's business <br />
          challenges
        </h2>
        <Button
          text="Start a Project"
          icon={arrowRightBold}
          className="font-medium text-[16px] leading-[150%] bg-[#444cfc] py-5 px-8 hover:bg-green-400 transition"
        />

        <div className="flex gap-8 mt-20 ">
          <div className="flex flex-col px-12 pt-12 pb-11 w-101.25 h-83.75 bg-white">
            <img src={service1} alt="" className="w-11.75 h-11.75 pb-4" />
            <p className="font-semibold text-[16px] leading-[175%] text-black pb-2">
              Technical support
            </p>
            <span className="font-normal text-[16px] leading-[150%] text-[#5d5f6d]">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent names when it comes to world-class service
            </span>
            <a
              href="#"
              className="flex items-center gap-3 text-indigo-500 font-medium text-[16px] pt-6 rounded hover:bg-indigo-50 transition"
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

          <div className="flex flex-col px-12 pt-12 pb-11 w-101.25 h-83.75 bg-white">
            <img src={service1} alt="" className="w-11.75 h-11.75 pb-4" />
            <p className="font-semibold text-[16px] leading-[175%] text-black pb-2">
              Technical support
            </p>
            <span className="font-normal text-[16px] leading-[150%] text-[#5d5f6d]">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent names when it comes to world-class service
            </span>
            <a
              href="#"
              className="flex items-center gap-3 text-indigo-500 font-medium text-[16px] pt-6 rounded hover:bg-indigo-50 transition"
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

          <div className="flex flex-col px-12 pt-12 pb-11 w-101.25 h-83.75 bg-white">
            <img src={service1} alt="" className="w-11.75 h-11.75 pb-4" />
            <p className="font-semibold text-[16px] leading-[175%] text-black pb-2">
              Technical support
            </p>
            <span className="font-normal text-[16px] leading-[150%] text-[#5d5f6d]">
              We aim to attain the greatest satisfaction for our clients and be
              one of the prominent names when it comes to world-class service
            </span>
            <a
              href="#"
              className="flex items-center gap-3 text-indigo-500 font-medium text-[16px] pt-6 rounded hover:bg-indigo-50 transition"
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
        </div>
      </div>
    </section>
  );
}
