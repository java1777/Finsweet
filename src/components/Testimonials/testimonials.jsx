import { useState } from "react";
import ava1 from "../../assets/icons/ava1.svg";
import ava2 from "../../assets/icons/ava2.svg";
import ava3 from "../../assets/icons/ava3.svg";
import logoipsum from "../../assets/icons/logoipsum.svg";
import johnnyAvatar from "../../assets/icons/johnnyAvatar.svg";
import quote from "../../assets/icons/Quote.svg";

const testimonials = [
  {
    id: 1,
    text: "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!",
    name: "Johnny Andro",
    role: "Director, Company",
    avatar: johnnyAvatar,
  },
  {
    id: 2,
    text: "Amazing service and great team. Highly recommend Finsweet to anyone looking for quality work!",
    name: "Sarah Johnson",
    role: "CEO, Company",
    avatar: johnnyAvatar,
  },
  {
    id: 3,
    text: "Working with Finsweet has been an absolute pleasure. They deliver on time and exceed expectations.",
    name: "Mark Wilson",
    role: "Manager, Company",
    avatar: johnnyAvatar,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="flex items-center justify-between px-20 py-16 bg-[#f5f5fa]">
      <div className="max-w-sm">
        <div className="w-4 h-4 bg-indigo-600 mb-4"></div>

        <h2 className="font-bold text-[40px] leading-[121%] text-[#232536] mb-4">
          Our customers love what we do
        </h2>
        <p className="font-semibold text-[16px] text-[#232536] mb-3">
          Transform your idea into reality with finsweet
        </p>
        <p className="font-normal text-[14px] leading-[150%] text-[#5d5f6d] mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="flex items-center mb-3 gap-4">
          <img
            src={ava1}
            alt=""
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />
          <img
            src={ava2}
            alt=""
            className="w-10 h-10 rounded-full object-cover border-2 border-white -ml-3"
          />
          <img
            src={ava3}
            alt=""
            className="w-10 h-10 rounded-full object-cover border-2 border-white -ml-3"
          />
        </div>

        <p className="text-[14px] text-[#5d5f6d]">
          <span className="font-bold text-[#232536]">30+</span> Customer Reviews
        </p>
      </div>

      <div className="flex gap-6 max-w-xl w-full">
        <div className="flex flex-col w-2 shrink-0 rounded-full overflow-hidden">
          <div className="flex-1/3 bg-[#FFD3AF]"></div>
          <div className="flex1/3 bg-[#FFA155]"></div>
          <div className="flex-1/3 bg-[#444cfc]"></div>
        </div>

        <div className="flex flex-col py-4 relative w-full">
          <img src={quote} alt="" className="absolute -top-7 right-0 pr-10" />

          <p className="font-bold text-[20px] leading-[150%] text-[#232536] mb-8 pr-12">
            {testimonials[active].text}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={testimonials[active].avatar}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-[16px] text-[#232536]">
                  {testimonials[active].name}
                </p>
                <p className="text-[14px] text-[#5d5f6d]">
                  {testimonials[active].role}
                </p>
              </div>
            </div>
            <img src={logoipsum} alt="logo" className="h-6 opacity-30" />
          </div>

          <div className="flex gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition ${
                  active === index ? "bg-[#232536]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
