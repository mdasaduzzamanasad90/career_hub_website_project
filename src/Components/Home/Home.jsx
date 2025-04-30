import Animation from "../animaton/Animation";
// import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    return (
        <div>
            <div className="bg-[#1E1E1E0D] md:px-40 px-10">
                {/* <Banner></Banner> */}
                <Animation></Animation>
            </div>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;