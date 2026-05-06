import blogsImg1 from "../../assets/img/blogs1.png";
import blogsImg2 from "../../assets/img/blogs2.png";
import arrowRight from "../../assets/icons/arrowRight.svg";
import Button from "../Button/btn";

export default function TeamTemplateBlog() {
  return (
    <>
      <section className="px-40 py-24 bg-[#ecf8f9]">
        <div className="w-4 h-4 bg-[#666DFF] "></div>
        <h2 className="font-semibold text-[48px] leading-[121%] text-[#232536] mt-5 mb-12">
          Blog posts from Javena
        </h2>

        <div className="flex gap-8">
          <div className="flex  gap-6 flex-1">
            <div className="flex justify-between bg-white w-156 h-62">
              <div className="w-full">
                <img src={blogsImg1} alt="blogsImg1" />
              </div>
              <div className="px-8 py-8">
                <span className="font-medium text-[14px] leading-[143%] text-[#232536] mb-2">
                  Jan 19, 2021
                </span>
                <p className="font-semibold text-[24px] leading-[150%] text-[#232536]">
                  Today's best design trends for digital products
                </p>
                <div className="flex gap-3">
                  <Button
                    text="Read More"
                    icon={arrowRight}
                    className="bg-[#444cfc] mt-5 mb-8"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between bg-white w-156 h-62">
              <div className="w-full">
                <img src={blogsImg2} alt="blogsImg2" />
              </div>
              <div className="px-8 py-8">
                <span className="font-medium text-[14px] leading-[143%] text-[#232536] mb-2">
                  Jan 19, 2021
                </span>
                <p className="font-semibold text-[24px] leading-[150%] text-[#232536]">
                  Today's best design trends for digital products
                </p>
                <div className="flex gap-3">
                  <Button
                    text="Read More"
                    icon={arrowRight}
                    className="bg-[#444cfc] mt-5 mb-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
