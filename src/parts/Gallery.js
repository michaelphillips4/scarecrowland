import data from "../galleries-data.json";
import "./Gallery.css"
import { useLocation} from "react-router-dom";
import GalleryNavLinks from "./GalleryNavLinks";




//change to global 
const root = "http://www.scarecrowland.co.uk/";

export default function Gallery() {
const location = useLocation();
const state = location.state;
const info = data.Galleries[Number(state)];

//console.log(state,info);
    return <><div className="card shadow rounded text-center">
        <h2>{info.title}</h2>
        <p>{info.text}</p>
        <GalleryNavLinks id={state} />
        <div className="gallery-flex-container ">
            {info.images.map((e, i) =>
                <div key={i}>
                    <figure className="gallery-figure" key={i}>
                        <img className="gallery-img round shadow"
                            src={`${root}${info.src}${e.thumb}`}
                            alt={`Scarecrow ${e.text|| "" }`} />
                        <figcaption>{e.text }</figcaption>
                    </figure>
                </div>)}
        </div>
        <GalleryNavLinks id={state} />
    </div></>
}