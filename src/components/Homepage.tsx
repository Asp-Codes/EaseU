// import InputPage from "./InputPage";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
    <div className="bg-black w-screen">
      <h1 className=" text-yellow-400">Welcome to EaseU</h1>
      <p>The num 1 content here</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
      <Link to="/input" className="text-blue-500">here is the link</Link>
      <p>click to save your text</p>
    </div>
    )
}

export default Homepage;