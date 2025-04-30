import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {

  const [jobs,setjobs] = useState([]);
  const [data, setdata] = useState(4);

  const allclose = document.getElementById('allclose');


const changebuttonclosetext = (id)=>{

  if (id === 'All') {
    setdata(jobs.length)
    allclose.innerText='Close';
  }
  else{
    setdata(4);
    allclose.innerText='All';
  }

}
  

  useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setjobs(data))
  },[]);

    return (
        <div className="md:px-40 px-10 text-center md:my-28 mt-20">
        <h1 className="font-bold text-4xl uppercase mb-3">Featured Jobs : {jobs.length}</h1>
        <p className="text-[#00000080] font-bold">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="md:grid grid-cols-2 gap-5 md:mt-20 mt-10 mb-20 flex flex-col">
            {
              jobs.slice(0,data).map(job => <Jobs key={job.id} job={job}></Jobs>)
            }
        </div>
        <div>
            <button id="allclose" onClick={() => changebuttonclosetext(allclose.innerText)} className="btn w-28 font-bold text-xl">All</button>
        </div>
      </div>
    );
};

export default FeaturedJobs;