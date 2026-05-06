import { useNavigate } from "react-router-dom";
import arrowNext from "../../assets/icons/arrowNext.svg";

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
            Breaking the code How did we build our Figma plugin{" "}
          </h1>
          <span className="font-normal text-[16px] leading-[150%] text-[#3F4150] mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the.
          </span>
          <button
            onClick={() => navigate("/BlogInnerPage")}
            className="flex gap-3 font-medium text-[16px] leading-[150%] text-[#5C63FC] cursor-pointer"
          >
            Read More
            <img src={arrowNext} alt="" className="w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
