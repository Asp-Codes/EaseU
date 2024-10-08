import { Link } from "react-router-dom";

const InputPage=()=>{
    return(
        <div>
            <input type="text" placeholder="Enter your name"/>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default InputPage;