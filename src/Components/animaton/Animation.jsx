import { motion as Motion } from "framer-motion";
import userpng from "../../assets/images/user.png";

const Animation = () => {
  return (
    <div className="md:flex items-center justify-between pt-10 gap-5">
      <div className="space-y-5">
        <Motion.h1
          className="font-bold text-5xl leading-tight w-[450px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          One Step <br />
          <span>Closer To Your</span>
          <br />
          <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
            Dream Job
          </span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-left text-[#00000080] font-bold"
        >
            Explore thousands of job opportunities with all the <br />information you
            need. Its your future. Come find it. Manage all our job application
            from start to finish.
        </Motion.p>

        <Motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="#"
            className="btn rounded-lg font-bold text-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
          >
            Get Started
          </a>
        </Motion.div>
      </div>

      <Motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={userpng} alt="User" />
      </Motion.div>
    </div>
  );
};

export default Animation;
