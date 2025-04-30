import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Jobs = ({ job }) => {
  const {id, logo ,job_title, company_name, remote_or_onsite, job_type, location, salary, } = job;
  return (
    <div className="border rounded-xl hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-transform duration-300 h-[350px] p-10">
      <figure>
        <img
          src={logo}
          alt=""
          className=" h-10"
        />
      </figure>
      <div className="text-left mt-5 space-y-2     ">
        <h2 className="font-bold text-xl">{job_title}</h2>
      <p className="font-bold text-[#0000004D]">
            {company_name}
        </p>
        <div className="flex gap-5">
            <button className="btn w-28 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent font-bold">{remote_or_onsite}</button>
            <button className="btn w-28 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent font-bold">{job_type}</button>
        </div>
        <div className="flex gap-5 font-bold text-[#0000004D]">
            <div className="flex items-center gap-2">
                <MdOutlineLocationOn size={30} />
                <h1 className="">{location}</h1>
            </div>
            <div className="flex items-center gap-2">
                <AiOutlineDollarCircle size={30} />
                <h1 className="">Salary : {salary}</h1>
            </div>
        </div>
        <div className="pt-3">
          <Link to={`/jobdetails/${id}`}><button className="btn rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white w-32 ">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
