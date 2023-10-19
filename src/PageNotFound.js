import { Link } from "react-router-dom";

const PageNotFound = () => {
    return <div className="card shadow p-4 pb-0 mt-4 text-center">
        <h1>404 Error Page Not Found</h1>
       
        <img src="http://www.scarecrowland.co.uk/style/cutout3.gif"
            className="rounded mx-auto m-4" style={{ width: "10rem" }} alt="Scarecrow" />
 <p className="lead">
        <Link to="/">Home</Link>
        </p>

    </div>





}

export default PageNotFound;