import logo from "../../assets/icons/logo.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import Button from "../Button/btn";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-40 py-6.75 bg-[#1e1e2e]">
      <a href="#">
        <img src={logo} alt="Finsweet logo" />
      </a>
      <div className="flex pl-9 gap-9">
        <Link>
          <a
            href="#"
            className="font-medium text-base leading-[150%] text-gray-400 hover:text-white transition"
          >
            Home
          </a>
        </Link>
        <Link to="service">
          <a
            href="#"
            className="font-medium text-base leading-[150%] text-gray-400 hover:text-white transition"
          >
            Service
          </a>
        </Link>
        <Link>
          <a
            href="#"
            className="font-medium text-base leading-[150%] text-gray-400 hover:text-white transition"
          >
            Company
          </a>
        </Link>
        <Link>
          <a
            href="#"
            className="font-medium text-base leading-[150%] text-gray-400 hover:text-white transition"
          >
            Career
          </a>
        </Link>
        <Link>
          <a
            href="#"
            className="font-medium text-base leading-[150%] text-gray-400 hover:text-white transition"
          >
            Blog
          </a>
        </Link>
        <Link>
          <a
            href="#"
            className="font-medium text-base leading-[150%] text-gray-400 hover:text-white transition"
          >
            Contact us
          </a>
        </Link>
      </div>

      <Button text="Clone project" icon={arrowRight} />
    </nav>
  );
}
