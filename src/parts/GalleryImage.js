import ROOT_PATH from "../globals";

const GalleryImage = ({ info, setImagesLoaded,name }) => {

    const onLoad = () => {
        setImagesLoaded(true);
    };

    const onError = (index) => {
        setImagesLoaded(true);
        console.log("Error loading", index);
    };

    return (
        <>
            <div className="gallery-flex-container  ">
                {info.images.map((e, i) =>
                    <div key={`${i}${info.src}`}>
                        <figure className="gallery-figure" >
                            <img className="gallery-img round shadow"
                                src={`${ROOT_PATH}${info.src}${e.thumb}`}
                                alt={`${name} ${e.text || ""}`}
                                onLoad={() => onLoad()}
                                onError={() => onError(i)}
                            />
                            <figcaption>{e.text}</figcaption>
                        </figure>
                    </div>)}
            </div>
        </>
    );
};

export default GalleryImage;