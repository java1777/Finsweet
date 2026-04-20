import shape from "../../assets/icons/Shapes.svg";

export default function Newsletter() {
  return (
    <section className="relative flex items-center justify-between px-40 py-24 bg-[#666dff] overflow-hidden">
      <div className="absolute top-0 left-24 flex gap-1">
        <div className="w-14 h-10 bg-[#ffa155]"></div>
        <div className="w-7 h-7 bg-[#A3A7FF]"></div>
        <div className="w-7 h-7 bg-[#ffd3af] left-7 absolute"></div>
      </div>
      <div className="absolute top-10 left-24">
        <div className="w-7 h-7 bg-[#A3A7FF]"></div>
      </div>

      <div className="absolute bottom-4 right-0">
        <div>
          <img src={shape} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-4 z-10">
        <p className="font-medium text-[14px] leading-[143%] tracking-[0.21em] uppercase text-white mb-3.25">
          Newsletter
        </p>
        <h2 className="font-semibold text-[36px] leading-[150%] text-white max-w-lg">
          Subscribe our News Letter <br /> to get Latest Updates.
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 z-10 w-full max-w-lg">
        <input
          type="email"
          placeholder="Paresh@Pixeto.com"
          className="w-full px-6 py-4 rounded bg-white text-[#5d5f6d] text-[16px] outline-none"
        />
      </div>
    </section>
  );
}
