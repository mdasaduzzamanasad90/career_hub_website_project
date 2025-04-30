import { useLoaderData, useParams } from "react-router-dom";
import { PiSubtitlesBold } from "react-icons/pi";
import { BiDollarCircle } from "react-icons/bi";
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPhoneVolume } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";





const JobDetails = () => {
    const notify = () => toast.success("done");
  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = data.find((job) => job.id === idInt);
  const {
    job_title,
    logo,
    company_name,
    contact_information,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;
  return (
    <div className="md:mx-40 md:my-20">
        <div className="flex justify-center mb-10">
            <img className="h-16 animate-bounce " src={logo} alt="" />
        </div>
        <div className="md:grid grid-cols-5 gap-5">
            <div className="md:col-span-3 rounded-xl border px-4 py-6  text-left space-y-5 shadow-xl">
                <p className="font-bold text-[#00000080] text-xl">
                <span className="text-black">Job Description : </span>
                <small>{job_description}</small>
                </p>
                <p className="font-bold text-[#00000080] text-xl">
                <span className="text-black">Job Responsibility : </span>
                <small>{job_responsibility}</small>
                </p>
                <p className="font-bold text-[#00000080] text-xl">
                <span className="text-black">Educational Requirements : </span>
                <br />
                <small>{educational_requirements}</small>
                </p>
                <p className="font-bold text-[#00000080] text-xl">
                <span className="text-black">Experiences : </span>
                <br />
                <small>{experiences}</small>
                </p>
            </div>
            <div className="bg-[#9873FF1A] py-6 px-4 md:col-span-2 rounded-xl border shadow-xl">
                <h1 className="text-3xl font-bold text-center uppercase bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">Job Details</h1>
                <div>
                    <h1 className="font-bold text-2xl my-3">Company : {company_name}</h1>
                </div>
                <div className="border-y-2 py-5">
                    <div className="flex gap-3 mb-1">
                    <BiDollarCircle size={30} className="text-[#9873FF]" />
                    <h1 className="font-bold text-xl">
                    Salary :
                    <small className="text-[#00000080]">
                        {salary} (Per Month)
                    </small>
                    </h1>
                    </div>
                    <div className="flex items-center text-xl gap-3 mb-3 ">
                    <PiSubtitlesBold size={30} className="text-[#9873FF]" />
                    <h1 className="font-bold text-xl">
                    Job Title :
                    <small className="text-[#00000080]">{job_title}</small>
                    </h1>
                    </div>
                    <h1 className="text-2xl font-bold">Contact Information</h1>
                </div>
                <div className="mt-5 mb-1 flex items-center gap-4">
                    <FaPhoneVolume size={25} className="text-[#9873FF]"/>
                    <h1 className="font-bold text-xl">Phone : <small className="text-[#00000080]">{contact_information.phone}</small></h1>
                </div>
                <div className="mb-1 flex gap-3">
                    <AiOutlineMail size={30} className="text-[#9873FF]" />
                    <h1 className="font-bold text-xl">Email : <small className="text-[#00000080]">{contact_information.email}</small></h1>
                </div>
                <div className="mb-7 flex gap-3">
                    <IoLocationOutline size={40} className="text-[#9873FF]"/>
                    <h1 className="font-bold text-xl">Address : <small className="text-[#00000080]">{contact_information.address}</small></h1>
                </div>
                <button onClick={notify} className="btn w-full text-white rounded-lg font-bold text-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now</button>
            </div>
        </div>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    </div>
  );
};

export default JobDetails;
