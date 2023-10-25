import data from "../galleries-data.json";
import "./Gallery.css"
import { useParams } from "react-router-dom";
import { useState } from "react";
import GalleryImage from "./GalleryImage";
import GalleryNavLinks from "./GalleryNavLinks"; 
import ROOT_PATH from "../globals";

//preload images to speed up page load.
const preLoadImages = (info)=>{
  
   info.images.forEach((e) => 
   {
        const imageElement = new Image();
        imageElement.src = `${ROOT_PATH}${info.src}${e.thumb}`;
       
   })

}

const Gallery =() => {
    const { gallery, index } = useParams();
    const info = data[gallery][Number(index)];
    const [imagesLoaded, setImagesLoaded] = useState(false);

    preLoadImages(info);

    return <div className="card shadow rounded text-center">
        <h2>{info.title}</h2>
        <span>{info.text}</span>
        <GalleryNavLinks index={index} gallery={gallery} />
        {(imagesLoaded === false) > 0 &&
            <div className="m-4">
                Please wait while images load...
                <br />
                <div className="spinner-border text-center m-4" role="status">
                </div>
            </div>
        }
        <div className={imagesLoaded ? "visible" : "invisible"}>
            <GalleryImage info={info} setImagesLoaded={setImagesLoaded} name={gallery} />
        </div>
        <GalleryNavLinks index={index} gallery={gallery} />
    </div>
}

export default Gallery;