import data from "../galleries-data.json";
import "./Gallery.css"
import { Link } from "react-router-dom";
// pass in as pram
const info = data.Galleries[0];

//change to global 
const root = "http://www.scarecrowland.co.uk/";

export default function Gallery() {

    return <><div className="card shadow rounded text-center">

        <h2>{info.title}</h2><Link to="/">  Home</Link>
        <div className="gallery-flex-container ">
            {info.images.map((e, i) =>
                <div>
                    <figure className="gallery-figure" key={i}>
                        <img className="gallery-img"
                            src={`${root}${info.src}${e.thumb}`}
                            alt={`Scarecrow ${e.text}`} />
                        <figcaption>{e.text}</figcaption>
                    </figure>
                </div>)}
        </div>
    </div></>


}