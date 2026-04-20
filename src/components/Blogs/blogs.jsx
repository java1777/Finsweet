import blogsImg1 from "../../assets/img/blogs1.png";
import blogsImg2 from "../../assets/img/blogs2.png";

export default function Blogs() {
  return (
    <section className="flex items-center justify-between px-40 py-24 bg-[#ecf8f9]">
      <div className="w-full">
        <div className="w-4 h-4 bg-indigo-600 mb-4"></div>
        <h2 className="font-semibold text-[48px] leading-[121%] text-[#232536] mb-12">
          Read our latest blogs & news
        </h2>

        <div className="flex gap-8">
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex justify-between bg-white w-156 h-62">
              <div className="w-full">
                <img src={blogsImg1} alt="" />
              </div>
              <div className="px-8 py-8">
                <span className="font-medium text-[14px] leading-[143%] text-[#232536]">
                  Jan 19, 2021
                </span>
                <p className="font-semibold text-[24px] leading-[150%] text-[#232536]">
                  Today's best design trends for digital products
                </p>
                <a
                  href="#"
                  className="flex items-center gap-3 text-indigo-500 font-medium text-[16px] pt-6 rounded hover:bg-indigo-50 transition"
                >
                  Read more
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

          <div className="flex-1">
            <div className="flex justify-between bg-white w-156 h-62">
              <div className="w-full">
                <img src={blogsImg2} alt="" />
              </div>
              <div className="px-8 py-8">
                <span className="font-medium text-[14px] leading-[143%] text-[#232536]">
                  Jan 19, 2021
                </span>
                <p className="font-semibold text-[24px] leading-[150%] text-[#232536]">
                  A practical guide to building a brand strategy
                </p>
                <a
                  href="#"
                  className="flex items-center gap-3 text-indigo-500 font-medium text-[16px] pt-6 rounded hover:bg-indigo-50 transition"
                >
                  Read more
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
        </div>
      </div>
    </section>
  );
}
