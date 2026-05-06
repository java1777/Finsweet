import { useNavigate } from "react-router-dom";
import arrowNext from "../../assets/icons/arrowNext.svg";

const jobs = [
  {
    title: "Full Stack Developer",
    location: "Bengaluru · Full Time ",
    salary: "$10K - $18K · No equity",
  },
  {
    title: "Testing Engineer",
    location: "Remote · Full Time ",
    salary: "$08K - $10K · No equity",
  },
  {
    title: "Hr Manager",
    location: "Mumbai . Fultime",
    salary: "$08K - $10K · 4 to 5 Yrs Exp",
  },
  {
    title: "Product Designer",
    location: "Mumbai . Fultime",
    salary: "$08K - $10K · 4 to 5 Yrs Exp",
  },
  {
    title: "Wordpress Developer",
    location: "Mumbai, Full Time",
    salary: "$08K - $10K · 4 to 5 Yrs Exp",
  },
  {
    title: "Jr. QA Tester",
    location: "California, USA . Full Time",
    salary: "$14K - $23K · No equity",
  },
  {
    title: "Sr. UX Designer",
    location: "California, USA . Full Time",
    salary: "$14K - $23K · No equity",
  },
  {
    title: "Social Media Manager",
    location: "Kolkata, India .  Fulltime",
    salary: "$5K - $6K ·  Fresher  ",
  },
  {
    title: "Golang Developer",
    location: "Mumbai . Fultime",
    salary: "$08K - $10K · 4 to 5 Yrs Exp",
  },
];

export default function CareerCards() {
  const navigate = useNavigate();

  return (
    <section className="px-40 py-24 bg-[#ecf8f9]">
      <div className="grid grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white p-12 flex flex-col gap-4 ">
            <h3 className="font-semibold text-[16px] leading-[175%] text-[#232536]">
              {job.title}
            </h3>
            <p className="font-normal text-[16px] leading-[150%] text-[#7B7C86]">
              {job.location}
            </p>
            <p className="font-normal text-[16px] leading-[150%] text-[#7B7C86] mb-13">
              {job.salary}
            </p>

            <button
              onClick={() => navigate("/CareerInnerPage", { state: job })}
              className="flex items-center font-medium text-[16px] leading-[150%] text-[#5d5fef] gap-3 cursor-pointer"
            >
              Apply Now
              <img src={arrowNext} alt="" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
