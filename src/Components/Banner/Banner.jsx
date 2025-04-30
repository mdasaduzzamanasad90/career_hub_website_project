import userpng from "../../assets/images/user.png";
const Banner = () => {
  return (
    <div className="md:flex items-center justify-between pt-10 gap-5">
      <div className="space-y-5">
        <h1 className="font-bold text-5xl leading-tight">
          One Step <br /><span>Closer To Your</span><br />
          <span className="text-5xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
            Dream Job
          </span>
        </h1>
        <p className="text-left">
          Explore thousands of job opportunities with all the <br />information you
          need. Its your future. Come find it. Manage all our job application
          from start to finish.
        </p>
        <div className="">
          <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
            Get Started
          </a>
        </div>
      </div>
      <div>
        <img src={userpng} alt="" />
      </div>
    </div>
  );
};

export default Banner;
