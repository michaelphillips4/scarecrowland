import { Link } from "react-router-dom";
import data from "../galleries-data.json";

const GalleryNavLinks = (props) => {

    const id = Number(props.id);
    const previous = id - 1;
    const next = id + 1;

    const galleryCount = data.Galleries.length ;
    console.log(previous, galleryCount, data);
    return <>
        <span className="text-center">
            {(previous > -1) > 0 &&
                <Link to="../Gallery" state={previous} >Previous</Link>
            }
            &nbsp;<Link to="/">Home</Link>&nbsp;
            {(next < galleryCount) > 0 &&
                <Link to="../Gallery" state={next} >Next</Link>
            }
        </span>
    </>
}

export default GalleryNavLinks;