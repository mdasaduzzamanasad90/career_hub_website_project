import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oooops!!!!!</h1>
            <button className="btn"><Link to='/'>Click Me And Go To Home</Link></button>
        </div>
    );
};

export default ErrorPage;