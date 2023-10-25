import './GallerysList.css';
import data from "../galleries-data.json";
import GallerySection from './GallerySection';

function GalleryList() {
  return (
    <div className="card shadow p-2 ">
      <h5 className="text-center">Gallery's</h5>

      <GallerySection name="Scarecrows" gallery={data.Scarecrows} />

      <a href="http://regentsparkallotmentgarden.blogspot.co.uk/2011/10/harvest-festival-2011-part-2-Ceramics.html">
        Harvest festival 2011
      </a>

      <hr />
      <GallerySection name="Ceramics" gallery={data.Ceramics} />
      <hr />
      <GallerySection name="Hats" gallery={data.Hats} />
    </div>);
}

export default GalleryList;