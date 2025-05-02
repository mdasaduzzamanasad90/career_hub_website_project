import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getelement } from "../utillites/localstorage";
import Appliedjobsdatashow from "../Appliedjobsdata/Appliedjobsdatashow";

const AppliedJobs = () => {
  const datajobs = useLoaderData();
  const [displaydata, setdisplaydata] = useState([]);
  const [jobdisplay , setjobdisplay] = useState([]);
  
  const handlejobsfilter = filter =>{
    if(filter === 'All'){
      setjobdisplay(displaydata);
    }
    else if (filter === 'Remote') {
      const remotejobs = displaydata.filter(job => job.remote_or_onsite === 'Remote');
      setjobdisplay(remotejobs);
    }
    else if (filter === 'Onsite') {
      const Onsitejobs = displaydata.filter(job => job.remote_or_onsite === 'Onsite');
      setjobdisplay(Onsitejobs);
    }
  };

  useEffect(() => {
    const storedjobids = getelement();
    if (datajobs.length > 0) {
      //   const applyjob = datajobs.filter((job) => storedjobids.includes(job.id));

      const applyjob = [];

      for (const id of storedjobids) {
        const job = datajobs.find((job) => job.id === id);
        if (job) {
          applyjob.push(job);
        }
      }
      setdisplaydata(applyjob);
      setjobdisplay(applyjob);
    }
  }, [datajobs]);

  return (
    <div className="md:mx-40 mx-20 md:mt-20 mt-10">
      <div className="flex justify-end ">
        <details className="dropdown">
          <summary className="btn m-1">Filter By</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={()=>handlejobsfilter('All')}>
              <a>All</a>
            </li>
            <li onClick={()=>handlejobsfilter('Remote')}>
              <a>Remote</a>
            </li>
            <li onClick={()=>handlejobsfilter('Onsite')}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="mt-5 md:mb-32 mb-10">
        {jobdisplay.map((card) => (
          <Appliedjobsdatashow key={card.id} card={card} handlejobsfilter={handlejobsfilter}></Appliedjobsdatashow>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
