import PropTypes from "prop-types";
const Appliedjobsdatashow = ({ card }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = card;
  return (
    <div className="flex justify-between border p-5 rounded-xl mb-5">
      <div className="flex gap-10">
        <div className="flex items-center w-48 bg-[#F4F4F4] p-5 rounded-xl">
          <img className="w-full" src={logo} alt="" />
        </div>
        <div>
          <h1>{job_title}</h1>
          <p>{company_name}</p>
          <div className="flex gap-3">
            <button className="btn w-28">{remote_or_onsite}</button>
            <button className="btn w-28">{job_type}</button>
          </div>
          <div className="flex gap-3">
            <div>
              <h1>{location}</h1>
            </div>
            <div>
              <h1>{salary}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="btn">View Details</button>
      </div>
    </div>
  );
};

Appliedjobsdatashow.PropTypes = {
  card: PropTypes.object,
};

export default Appliedjobsdatashow;
