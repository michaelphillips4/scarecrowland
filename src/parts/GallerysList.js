import './GallerysList.css';
import data from "../galleries-data.json";
import { Link } from "react-router-dom";

function GalleryList() {
  return (
    <>

      <div className="card shadow p-2 ">
        <h5 className="text-center">Scarecrow Gallery's</h5>
        Click on a link to view the gallery

        {data.Galleries.map((j, index) =>
          <Link to={`Gallery/${index}`} key={index} > {j.title}</Link>)
        }

    <hr />
                     
      
        <a href="gal2.html">
          lookalike and famous <b>scarecrows</b>
        </a>
        <a href="gal1.html">
          an array of traditional <b>scarecrows</b>
        </a>

        <a href="http://regentsparkallotmentgarden.blogspot.co.uk/2011/10/harvest-festival-2011-part-2-scarecrows.html">
          Harvest festival 2011
        </a> 

        <hr />
        Ceramics

        <a href="Cgal2.html">
          Ceramics 2003 -2004
        </a>
        <a href="Cgal1.html">
          Ceramics 2005
        </a>
        <a href="gal24.html">
          Ceramics Summer 2005
        </a>
        <a href="gal25.html">
          Ceramics Summer 2006
        </a>
        <a href="http://www.scarecrowland.co.uk/Pictures/Galc5/index.html">
          Ceramics 2011
        </a>

        <hr />
        Hats
        <br />
        <a href="hatgal1.html">  Hats New Range in Spring 2011</a>

      </div>

    </>)
};

export default GalleryList;