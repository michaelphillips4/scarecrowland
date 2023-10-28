import { Link } from "react-router-dom";
const GallerySection = (props) => {

    return (
        <>
            <li><h5 className="dropdown-header">{props.name}</h5></li>
            {props.gallery.map((j, index) =>
                <li key={`${props.name}${index}`}>
                    <Link className="dropdown-item" to={`Gallery/${props.name}/${index}`}> {j.title}<span className="badge bg-light text-dark float-end">{j.images.length}</span>
                    </Link></li>)
            }
        </>
    );
}

export default GallerySection;