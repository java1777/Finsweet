import company_vision from "../../assets/img/company_vision.png";

export default function CompanyVision() {
  return (
    <section className="px-40 py-24">
      <div className="flex flex-col">
        <span className="font-medium text-[14px] leading-[143%] tracking-[0.21em] uppercase text-black pb-4">
          Our VISION
        </span>
        <h2 className="font-semibold text-[36px] leading-[150%] text-[#232536] pb-6">
          We want to get local identification in <br /> every corner of the
          world in this era of <br /> global citizenship.
        </h2>
        <p className="font-normal text-[16px] leading-[150%] text-[#7B7C86] pb-16">
          Through True Rich Attended does no end it his mother since real had
          half <br /> every him case in packages enquire we up ecstatic
          unsatiable saw his giving <br /> Remain expense you position
          concluded.{" "}
        </p>
        <div>
          <img src={company_vision} alt="" />
        </div>
      </div>
    </section>
  );
}
