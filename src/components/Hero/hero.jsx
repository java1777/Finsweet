import heroBg from "../../assets/img/hero-img.png";
import arrowRight from "../../assets/icons/arrowRight.svg";
import heroLogo1 from "../../assets/icons/hero-logo1.svg";
import heroLogo2 from "../../assets/icons/hero-logo2.svg";
import heroLogo3 from "../../assets/icons/hero-logo3.svg";
import heroLogo4 from "../../assets/icons/hero-logo4.svg";
import heroLogo5 from "../../assets/icons/hero-logo5.svg";
import Button from "../Button/btn";

export default function Hero() {
  return (
    <section className="flex items-center justify-between px-40 py-24 ">
      <div className="max-w-lg">
        <h1 className="font-semibold text-[56px] leading-[121%] text-white mb-6 pt-14">
          Transform Your Idea Into Reality with Finsweet
        </h1>
        <p className="font-semibold text-[16px] leading-[150%] text-gray-500 mb-8">
          The entire Finsweet team knows what's good with Webflow and you can
          too with 1 week and a good attitude.
        </p>
        <Button text="Request Quote" icon={arrowRight} className="bg-[#444cfc] py-5 px-8 hover:bg-green-400 transition"/>

        <div className="flex items-center gap-8 mt-110">
          <div className="flex flex-col shrink-0">
            <p className="font-medium text-[14px] leading-[143%] text-gray-500 cursor-pointer">
              Our Clients
            </p>
            <span className="font-medium text-[18px] leading-[156%] text-white cursor-pointer">
              We've Worked with
            </span>
          </div>

          <div className="w-px h-10 bg-gray-600"></div>

          <div className="flex items-center gap-8">
            <img src={heroLogo1} alt="logo1" className="cursor-pointer" />
            <img src={heroLogo2} alt="logo2" className="cursor-pointer" />
            <img src={heroLogo3} alt="logo3" className="cursor-pointer" />
            <img src={heroLogo4} alt="logo4" className="cursor-pointer" />
            <img src={heroLogo5} alt="logo5" className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="relative max-w-xl w-full mb-8">
        <img src={heroBg} alt="hero" className="w-full rounded-lg block mb-14" />
        <div className="absolute w-4 h-28 bg-[#ffd3af] bottom-14 -left-3"></div>
        <div className="absolute w-4 h-20 bg-indigo-600 bottom-14 -right-3"></div>
      </div>
    </section>
  );
}
