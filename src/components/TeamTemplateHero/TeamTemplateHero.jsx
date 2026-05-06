import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

export default function TeamTemplateHero() {
  const { state } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="py-24">
      <div className="flex flex-col items-center">
        <img
          src={state.img}
          alt={state.name}
          className="w-80 h-80 rounded-full object-cover mb-12"
        />
        <h2 className="font-semibold text-[36px] leading-[150%] text-[#232536] mb-2">
          {state.name}
        </h2>
        <p className="font-medium text-[14px] leading-[143%] text-[#232536] mb-6">
          {state.role}
        </p>
        <p className="font-normal text-[16px] leading-[150%] items-center text-[#232536] mb-8">
          Through True Rich Attended does no end it his mother since <br /> real
          had half every him case in packages enquire we up <br /> ecstatic
          unsatiable.
        </p>

        <div className="flex gap-6.5">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </section>
  );
}
