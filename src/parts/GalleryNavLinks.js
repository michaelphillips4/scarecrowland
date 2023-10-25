import { Link } from "react-router-dom";
import data from "../galleries-data.json";

const GalleryNavLinks = (props) => {

    const index = Number(props.index);
    const previous = index - 1;
    const next = index + 1;
    const galleryCount = data[props.gallery].length;
    const path = `/Gallery/${props.gallery}/`;
    return <span className="text-center">
        {(previous > -1) > 0 &&
            <Link to={`${path}${previous}`}>Previous</Link>
        }
        &nbsp;<Link to="/">Home</Link>&nbsp;
        {(next < galleryCount) > 0 &&
            <Link to={`${path}${next}`} >Next</Link>
        }
    </span>
}

export default GalleryNavLinks;