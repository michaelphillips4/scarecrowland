import { Link } from "react-router-dom";
const GallerySection = (props) => {

    return (
        <>
         {props.name}
         {props.gallery.map((j, index) =>
          <Link to={`Gallery/${props.name}/${index}`} 
          key={`${props.name}${index}`} > {j.title}</Link>)
        }
        </>
    );
}

export default GallerySection;