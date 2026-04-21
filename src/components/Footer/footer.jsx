import arrowRight from "../../assets/icons/arrowRight.svg";
import footerLogo from "../../assets/icons/footerLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <section className="px-40 py-24">
        <div className="flex justify-between mb-16">
          <div className="max-w-xs">
            <div className="relative w-16 h-10 mb-8">
              <div className="w-6 h-6 bg-[#ffa155] absolute top-0 left-0"></div>
              <div className="w-3 h-3 bg-[#ffd3af] absolute top-3 left-4"></div>
              <div className="w-3 h-3 bg-[#666dff] absolute top-6 left-0"></div>
              <div className="w-3 h-3 bg-[#666dff] absolute top-0 left-8"></div>
            </div>

            <h3 className="font-semibold text-[48px] leading-[121%] text-[#232536] mb-10">
              Let's make something special
            </h3>
            <p className="font-semibold text-[24px] leading-[150%] text-[#232536] mb-7">
              Let's talk! 🤙
            </p>
            <span className="block font-medium text-[18px] leading-[156%] text-[#232536] mb-1">
              020 7993 2905
            </span>
            <span className="block font-medium text-[18px] leading-[156%] text-[#232536] mb-6">
              hi@finsweet.com
            </span>

            <div className="w-full h-px bg-gray-200 mb-4"></div>

            <span className="font-medium text-[14px] leading-[143%] text-[#5d5f6d]">
              DLF Cybercity, Bhubaneswar, India, &52050
            </span>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            {["Home", "Service", "Company", "Career", "News"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-semibold text-[16px] text-[#232536] hover:text-indigo-500 transition"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <p className="font-semibold text-[16px] text-[#232536]">Service</p>
            {[
              "Technical support",
              "Testing",
              "Development",
              "AWS/Azure",
              "Consulting",
              "Information Technology",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[14px] text-[#5d5f6d] hover:text-indigo-500 transition"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col justify-between mt-8">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-[16px] text-[#232536]">
                Resources
              </p>
              {[
                "About Us",
                "Testimonial",
                "Privacy Policy",
                "Terms of use",
                "Blog",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[14px] text-[#5d5f6d] hover:text-indigo-500 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="#"
              className="flex items-center gap-3 text-[#232536] font-medium text-[16px] hover:opacity-70 hover:bg-green-400 transition mt-8"
            >
              <div className="flex">
                <div className="w-3 h-3 bg-orange-400"></div>
                <div className="w-8 h-3 bg-indigo-600"></div>
              </div>
              Contact Us
              <img src={arrowRight} alt="" className="bg-black" />
            </a>
          </div>
        </div>
      </section>

      <footer className="flex justify-between items-center bg-[#FFE6D2] py-7 px-40">
        <div className="flex items-center gap-10.5">
          <img src={footerLogo} alt="" />
          <p className="font-medium text-[16px] leading-[150%] text-black">
            ©2021 Finsweet
          </p>
        </div>

        <div className="flex gap-6.5 cursor-pointer">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </footer>
    </>
  );
}
