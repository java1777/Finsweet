import processCard1 from "../../assets/icons/process1.svg";
import processCard2 from "../../assets/icons/process2.svg";
import processCard3 from "../../assets/icons/process3.svg";
import processCard4 from "../../assets/icons/process4.svg";
import processCard5 from "../../assets/icons/process5.svg";
import processCard6 from "../../assets/icons/process6.svg";

const cards = [
  { id: "01", title: "Discover", icon: processCard1, accent: true },
  { id: "02", title: "Designing", icon: processCard2, accent: false },
  { id: "03", title: "Development", icon: processCard3, accent: false },
  { id: "04", title: "Testing", icon: processCard4, accent: false },
  { id: "05", title: "Deployment", icon: processCard5, accent: false },
  { id: "06", title: "Maintenance", icon: processCard6, accent: true },
];

export default function Process() {
  return (
    <section className="px-40 py-24 bg-white relative">
      <div className="absolute top-8 right-16 flex flex-col items-end gap-1">
        <div className="flex gap-1">
          <div className="w-7 h-7 bg-orange-400"></div>
          <div className="w-7 h-7 bg-indigo-600"></div>
        </div>
        <div className="w-7 h-7 bg-indigo-600"></div>
      </div>

      <p className="font-medium text-[14px] tracking-[0.21em] uppercase text-gray-500 mb-4">
        Our Process
      </p>
      <h2 className="font-bold text-[48px] leading-[121%] text-[#232536] mb-4 max-w-xl">
        The process we are working With Our client Worldwide
      </h2>
      <p className="font-normal text-[16px] leading-[150%] text-[#878891] max-w-lg mb-12">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative bg-white border border-gray-200 rounded-lg p-6 ${
              card.accent ? "border-b-4 border-b-transparent" : ""
            }`}
          >
            <p className="absolute top-4 right-4 text-[16px] font-medium text-gray-300">
              {card.id}
            </p>

            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <img src={card.icon} alt="" className="w-10 h-10" />
              </div>
              <div>
                <p className="font-bold text-[16px] text-black mb-2">
                  {card.title}
                </p>
                <span className="font-normal text-[14px] leading-[150%] text-[#5d5f6d]">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </span>
              </div>
            </div>

            {card.accent && (
              <div className="absolute bottom-0 left-0 right-0 flex rounded-b-lg overflow-hidden">
                <div className="h-1 bg-orange-400 w-1/3"></div>
                <div className="h-1 bg-[#ffd3af] w-1/3"></div>
                <div className="h-1 bg-indigo-600 w-1/3"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
