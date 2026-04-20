import expertiseCard1 from "../../assets/icons/expertise1.svg";
import expertiseCard2 from "../../assets/icons/expertise2.svg";
import expertiseCard3 from "../../assets/icons/expertise3.svg";

export default function Expertise() {
  return (
    <section className="flex items-center justify-between bg-[#ecf8f9] px-40 py-24">
      <div className="mt-11.5 gap-35.25 w-156 h-91">
        <p className="font-medium text-[14px] leading-[143%] tracking-[0.21em] uppercase text-black mb-4">
          Our expertise
        </p>
        <h2 className="font-semibold text-[48px] leading-[121%] text-[#232536] mb-6">
          We want to get local identification in every corner of the world in
          this era of global citizenship
        </h2>
        <span className="font-normal text-[16px] leading-[150%] text-[#5d5f6d] mb-38.5">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          his giving Remain expense you position concluded.{" "}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-white  p-6 flex items-start gap-3 w-128.75 h-35 py-8 pl-8 pr-29.25">
          <div className="bg-orange-50 rounded-full p-3 shrink-0">
            <img src={expertiseCard1} alt="" className="w-10 h-10" />
          </div>
          <div>
            <p className="font-semibold text-[16px] leading-[175%] text-black">
              On Time Delivery
            </p>
            <span className="font-medium text-[14px] leading-[143%] text-[#5d5f6d]">
              Through True Rich Attended does no end it his mother since real
              had half every him.
            </span>
          </div>
        </div>

        <div className="bg-white  p-6 flex items-start gap-3 w-128.75 h-35 py-8 pl-8 pr-29.25">
          <div className="bg-orange-50 rounded-full p-3 shrink-0">
            <img src={expertiseCard2} alt="" className="w-10 h-10" />
          </div>
          <div>
            <p className="font-semibold text-[16px] leading-[175%] text-black">
              Best Quality
            </p>
            <span className="font-medium text-[14px] leading-[143%] text-[#5d5f6d]">
              Through True Rich Attended does no end it his mother since real
              had half every him.
            </span>
          </div>
        </div>

        <div className="bg-white  p-6 flex items-start gap-3 w-128.75 h-35 py-8 pl-8 pr-29.25">
          <div className="bg-orange-50 rounded-full p-3 shrink-0">
            <img src={expertiseCard3} alt="" className="w-11.75 h-11.75" />
          </div>
          <div>
            <p className="font-semibold text-[16px] leading-[175%] text-black pb-2">
              Support Assist
            </p>
            <span className="font-medium text-[14px] leading-[143%] text-[#5d5f6d]">
              Through True Rich Attended does no end it his mother since real
              had half every him.
            </span>
          </div>
        </div>

        <div className="flex">
          <div className="h-1 bg-orange-400 w-1/3"></div>
          <div className="h-1 bg-[#FFD3AF] w-1/3"></div>
          <div className="h-1 bg-indigo-600 w-1/3"></div>
        </div>
      </div>
    </section>
  );
}
