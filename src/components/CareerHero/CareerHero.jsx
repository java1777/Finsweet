import careers from "../../assets/img/careers.png";

export default function CareerHero() {
  return (
    <section className="py-24 pl-62.5 pr-40">
      <div className="flex flex-col items-center ">
        <p className="font-medium text-[14px] leading-[143%] tracking-[0.21em] uppercase text-[#232536] mb-6">
          CAREER AT FINSWEET
        </p>
        <h2 className="font-semibold text-[48px] leading-[121%] items-center text[#232536] mb-6">
          We hired people who are <br /> Always Passionate about <br /> what
          they do
        </h2>
        <span className="font-normal text-[16px] leading-[150%] text-[#232536] mb-16">
          Through True Rich Attended does no end it his mother since real had
          half <br /> every him case in packages enquire we up ecstatic
          unsatiable saw .
        </span>
        <div className="mb-20">
          <img src={careers} alt="career" />
        </div>
        <span className="font-medium text-[18px] leading-[156%] text-[#232536] mb-4">
          See Our open positions{" "}
        </span>
        <span>👇</span>
      </div>
    </section>
  );
}
