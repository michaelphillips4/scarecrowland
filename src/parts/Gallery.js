import data from "../galleries-data.json";
import "./Gallery.css"
import { useParams } from "react-router-dom";
import GalleryNavLinks from "./GalleryNavLinks";
import { useState } from "react";

//change to global 
const root = "http://www.scarecrowland.co.uk/";

export default function Gallery() {
    const { index } = useParams();
    const info = data.Galleries[Number(index)];
    const [imagesLoaded, setImagesLoaded] = useState(false);


    for (const image of info.images) {
        const imageElement = new Image();
        imageElement.src = `${root}${info.src}${image.thumb}`;
        image.src = imageElement;
    }


    return <><div className="card shadow rounded text-center">
        <h2>{info.title}</h2>
        <span>{info.text}</span>
        <GalleryNavLinks index={index} />
        {(imagesLoaded === false) > 0 &&
            <div className="m-4">
                Please wait while images load...
                <br />
                <div className="spinner-border text-center m-4" role="status">
                </div>
            </div>
        }
        <div className={imagesLoaded ? "visible" : "invisible"}>
            <Images info={info} setImagesLoaded={setImagesLoaded} />
        </div>
        <GalleryNavLinks index={index} />
    </div></>
}



const Images = ({ info, setImagesLoaded }) => {

    const counter = [];

    const onLoad = (index) => {
        const x = upCounter();
        if (x === (info.images.length - 1)) {
            setImagesLoaded(true);
            console.log("load");
        }
        console.log(x, index);

    };

    const onError = (index) => {
        setImagesLoaded(true);
        console.log("Error loading", index);
    };

    const upCounter = () => {
        counter.push(true);
        return counter.length;
    }

    return (
        <>
            <div className="gallery-flex-container  ">
                {info.images.map((e, i) =>
                    <div key={`${i}${info.src}`}>
                        <figure className="gallery-figure" >
                            <img className="gallery-img round shadow"
                                src={`${root}${info.src}${e.thumb}`}
                                alt={`Scarecrow ${e.text || ""}`}
                                onLoad={() => onLoad(i)}
                                onError={() => onError(i)}
                            />
                            <figcaption>{e.text}</figcaption>
                        </figure>
                    </div>)}
            </div>
        </>
    );
};