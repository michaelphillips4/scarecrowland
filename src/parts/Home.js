import GalleryList from './GallerysList';
import History from './History';
import About from './About';
import Sales from './Sales';

const Home = () => {
    return (
        <>
            <About />
            <Sales />
            <div className="row mt-1 g-2">
                <div className="col-lg-3 ">
                    <GalleryList />
                </div>
                <div className="col">
                    <History />
                </div>
            </div>
        </>
    );
}

export default Home;