import expertiseCard1 from "../../assets/icons/expertise1.svg";
import expertiseCard2 from "../../assets/icons/expertise2.svg";
import expertiseCard3 from "../../assets/icons/expertise3.svg";

export default function CareerWork() {
  return (
    <section className="px-40 py-24 bg-[#fafafc]">
      <div className="flex flex-col">
        <p className="font-medium text-[14px] leading-[143%] tracking-[0.21em] uppercase text-[#202021] mb-4">
          OUR WORK & CULTURE
        </p>
        <h2 className="font-semibold text-[36px] leading-[150%] text-[#232536] mb-6">
          Come and join a team of highly <br /> skilled professionals.
        </h2>
        <span className="font-normal text-[16px] leading-[150%] text-[#797A85] mb-16">
          Through True Rich Attended does no end it his mother since real had
          half <br /> every him case in packages enquire we up ecstatic
          unsatiable saw his giving <br /> Remain expense you position
          concluded.{" "}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white  p-6 flex items-start gap-3 w-128.75 h-35 py-8 pl-8 pr-29.25">
          <div className="bg-orange-50 rounded-full p-3 shrink-0">
            <img src={expertiseCard1} alt="" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-semibold text-[16px] leading-[175%] text-black">
              Covid-19 insurance
            </h3>
            <span className="font-medium text-[14px] leading-[143%] text-[#5d5f6d]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </span>
          </div>
        </div>

        <div className="bg-white  p-6 flex items-start gap-3 w-128.75 h-35 py-8 pl-8 pr-29.25">
          <div className="bg-orange-50 rounded-full p-3 shrink-0">
            <img src={expertiseCard2} alt="" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-semibold text-[16px] leading-[175%] text-black">
              Flexible working time
            </h3>
            <span className="font-medium text-[14px] leading-[143%] text-[#5d5f6d]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </span>
          </div>
        </div>

        <div className="bg-white  p-6 flex items-start gap-3 w-128.75 h-35 py-8 pl-8 pr-29.25">
          <div className="bg-orange-50 rounded-full p-3 shrink-0">
            <img src={expertiseCard3} alt="" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-semibold text-[16px] leading-[175%] text-black">
              Work from home
            </h3>
            <span className="font-medium text-[14px] leading-[143%] text-[#5d5f6d]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </span>
          </div>
        </div>

        <div className="bg-white  p-6 flex items-start gap-3 w-128.75 h-35 py-8 pl-8 pr-29.25">
          <div className="bg-orange-50 rounded-full p-3 shrink-0">
            <img src={expertiseCard1} alt="" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-semibold text-[16px] leading-[175%] text-black">
              Annual retreats
            </h3>
            <span className="font-medium text-[14px] leading-[143%] text-[#5d5f6d]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </span>
          </div>
        </div>

        <div className="bg-white  p-6 flex items-start gap-3 w-128.75 h-35 py-8 pl-8 pr-29.25">
          <div className="bg-orange-50 rounded-full p-3 shrink-0">
            <img src={expertiseCard2} alt="" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-semibold text-[16px] leading-[175%] text-black">
              Learning stipend
            </h3>
            <span className="font-medium text-[14px] leading-[143%] text-[#5d5f6d]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </span>
          </div>
        </div>

        <div className="bg-white  p-6 flex items-start gap-3 w-128.75 h-35 py-8 pl-8 pr-29.25">
          <div className="bg-orange-50 rounded-full p-3 shrink-0">
            <img src={expertiseCard3} alt="" className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-semibold text-[16px] leading-[175%] text-black">
              Gym membership
            </h3>
            <span className="font-medium text-[14px] leading-[143%] text-[#5d5f6d]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
