import data from "../galleries-data.json";
import "./Gallery.css"
import { useParams} from "react-router-dom";
import GalleryNavLinks from "./GalleryNavLinks";




//change to global 
const root = "http://www.scarecrowland.co.uk/";

export default function Gallery() {
const {index} = useParams();
const info = data.Galleries[Number(index)];

 /* for (const image of info.images) {
    const imageElement = new Image();
    imageElement.src = `${root}${info.src}${image.thumb}`; 
    image.src = imageElement;
  } */

    return <><div className="card shadow rounded text-center">
        <h2>{info.title}</h2>
        <span>{info.text}</span>
        <GalleryNavLinks index={index} />
        <div className="gallery-flex-container ">
            {info.images.map((e, i) =>
                <div key={`${i}${info.src}`}>
                      <figure className="gallery-figure" >
                        <img className="gallery-img round shadow"
                            src={`${root}${info.src}${e.thumb}`}
                            alt={`Scarecrow ${e.text|| "" }`} 
                            loading="lazy"/>
                        <figcaption>{e.text }</figcaption>
                    </figure>
                </div>)}
        </div>
        <GalleryNavLinks index={index} />
    </div></>
}