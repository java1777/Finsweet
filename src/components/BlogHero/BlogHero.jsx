import { useNavigate } from "react-router-dom";
import arrowNext from "../../assets/icons/arrowNext.svg";
import blogAva from "../../assets/icons/blogAva.png";
import blogAva2 from "../../assets/icons/blogAva2.png";
import blogAva3 from "../../assets/icons/blogAva3.png";
import companyVision from "../../assets/img/company_vision.png";

export default function BlogHero() {
  const navigate = useNavigate();
  return (
    <section className="px-40 py-20">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="w-6 h-6 bg-[#ffd3af] mb-5"></div>
          <p className="font-medium text-[14px] leading-[143%] tracking-[0.21em] uppercase text-[#212121] mb-6">
            TREnding
          </p>
          <h1 className="font-semibold text-[48px] leading-[121%] text-[#232536] mb-6">
            Breaking the code How <br /> did we build our Figma <br />{" "}
            plugin{" "}
          </h1>
          <span className="font-normal text-[16px] leading-[150%] text-[#3F4150] mb-6">
            It is a long established fact that a reader will be distracted by
            the readable <br /> content of a page when looking at its layout.
            The Maker is a decentralized. We <br /> aim to attain the.
          </span>
          <button
            onClick={() => navigate("/BlogInnerPage")}
            className="flex gap-3 font-medium text-[16px] leading-[150%] text-[#5C63FC] cursor-pointer mb-10"
          >
            Read More
            <img src={arrowNext} alt="" className="w-6" />
          </button>
          <div className="flex gap-3 items-center mb-12">
            <img src={blogAva} alt="avatar" />
            <span className="font-normal text-[16px] leading-[150%] text-[#232536]">
              Andrew Jonson
            </span>
            <div className="w-4 border -rotate-90 border-[#CCCCCC]"></div>
            <span className="font-normal text-[16px] leading-[150%] text-[#7B7C89] ">
              Posted on 27th January 2021
            </span>
          </div>
          <div className="w-152 h-97.5">
            <img src={companyVision} alt="" />
          </div>
        </div>

        <div className="flex flex-col bg-[#ffdfc6] py-18 px-18 w-515px">
          <h2 className="font-semibold text-[24px] leading-[150%] text-[#232536] mb-4">
            Great design expectations <br /> prejudice in digital products{" "}
            <br /> in Next Year
          </h2>
          <div className="flex gap-3 mb-12">
            <img src={blogAva} alt="avatar" />

            <div className="flex flex-col ">
              <span className="text-[#3F3D49] font-normal text-[16px] leading-[150%]">
                Andrew Jonson
              </span>
              <span className="text-[#7B6F6F] font-medium text-[14px] leading-[143%]">
                Jan 19, 2021
              </span>
            </div>
          </div>
          <h2 className="font-semibold text-[24px] leading-[150%] text-[#232536] mb-4">
            Great design expectations <br /> prejudice in digital products{" "}
            <br /> in Next Year
          </h2>
          <div className="flex gap-3 mb-12">
            <img src={blogAva2} alt="avatar" />

            <div className="flex flex-col ">
              <span className="text-[#3F3D49] font-normal text-[16px] leading-[150%]">
                Mathew Jasele
              </span>
              <span className="text-[#7B6F6F] font-medium text-[14px] leading-[143%]">
                Jan 19, 2021
              </span>
            </div>
          </div>

          <h2 className="font-semibold text-[24px] leading-[150%] text-[#232536] mb-4">
            Great design expectations <br /> prejudice in digital products{" "}
            <br /> in Next Year
          </h2>
          <div className="flex gap-3">
            <img src={blogAva3} alt="avatar" />

            <div className="flex flex-col ">
              <span className="text-[#3F3D49] font-normal text-[16px] leading-[150%]">
                Hussen Abakas
              </span>
              <span className="text-[#7B6F6F] font-medium text-[14px] leading-[143%]">
                Jan 19, 2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
