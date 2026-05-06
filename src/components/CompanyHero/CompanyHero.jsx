import aboutImg1 from "../../assets/img/about_img1.png";
import aboutImg2 from "../../assets/img/about_img2.png";
import aboutImg3 from "../../assets/img/about_img3.png";

export default function CompanyHero() {
  return (
    <>
      <section className="px-40 py-24">
        <div className="flex flex-col">
          <span className="font-medium text-[14px] leading-[143%] tracking-[0.21em] uppercase text-black pb-5">
            Company
          </span>
          <h2 className="font-semibold text-[48px] leading-[121%] text-[#232536] pb-6">
            Award-winning Company <br /> seen and used by millions <br /> around
            the world.
          </h2>
          <p className="font-normal text-[16px] leading-[150%] text-[#232536] pb-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a <br /> page when looking at its layout.
            The Maker is a decentralized.{" "}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-12 mb-12 relative">
          <img src={aboutImg1} alt="meeting" />
          <img src={aboutImg2} alt="meeting" />
          <img src={aboutImg3} alt="meeting" />
        </div>
      </section>
    </>
  );
}
