import { Link } from "react-router-dom";
import data from "../galleries-data.json";

const GalleryNavLinks = (props) => {

    const index = Number(props.index);
    const previous = index - 1;
    const next = index + 1;

    const galleryCount = data.Galleries.length ;
   
    return <>
        <span className="text-center">
            {(previous > -1) > 0 &&
                <Link to={`/Gallery/${previous}`}>Previous</Link>
            }
            &nbsp;<Link to="/">Home</Link>&nbsp;
            {(next < galleryCount) > 0 &&
                <Link to={`/Gallery/${next}`} >Next</Link>
            }
        </span>
    </>
}

export default GalleryNavLinks;