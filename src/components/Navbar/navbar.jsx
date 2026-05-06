import logo from "../../assets/icons/logo.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import Button from "../Button/btn";
import { NavLink } from "react-router-dom";
import CompanyPage from "../../pages/CompanyPage";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-40 py-6.75 bg-[#1e1e2e]">
      <a href="#">
        <img src={logo} alt="Finsweet logo" />
      </a>
      <div className="flex pl-9 gap-9">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `font-medium text-[16px] leading-[150%] transition ${isActive ? "text-white" : "text-[#A7A8AF]"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/service"
          end
          className={({ isActive }) =>
            `font-medium text-[16px] leading-[150%] transition ${isActive ? "text-white" : "text-[#A7A8AF]"}`
          }
        >
          Service
        </NavLink>
        <NavLink
          to="/company"
          end
          className={({ isActive }) =>
            `font-medium text-[16px] leading-[150%] transition ${isActive ? "text-white" : "text-[#A7A8AF]"}`
          }
        >
          Company
        </NavLink>
        <NavLink
          to="/career"
          end
          className={({ isActive }) =>
            `font-medium text-[16px] leading-[150%] transition ${isActive ? "text-white" : "text-[#A7A8AF]"}`
          }
        >
          Career
        </NavLink>
        <NavLink
          to="/blog"
          end
          className={({ isActive }) =>
            `font-medium text-[16px] leading-[150%] transition ${isActive ? "text-white" : "text-[#A7A8AF]"}`
          }
        >
          Blog
        </NavLink>
        <NavLink
          end
          className={({ isActive }) =>
            `font-medium text-[16px] leading-[150%] transition ${isActive ? "text-white" : "text-[#A7A8AF]"}`
          }
        >
          Contact us
        </NavLink>
      </div>

      <Button text="Clone project" icon={arrowRight} />
    </nav>
  );
}
