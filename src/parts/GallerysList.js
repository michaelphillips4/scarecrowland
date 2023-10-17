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
          <Link to="Gallery" state={index}> {j.title}</Link>)
        }
        <a href="http://regentsparkallotmentgarden.blogspot.co.uk/2011/10/harvest-festival-2011-part-2-scarecrows.html">
          Harvest festival 2011
        </a>
        <hr />

       
       
       
        <a href="gal36.html">  Celebrity Scarecrows 2008</a>
        <a href="gal35.html">  Scarecrows in the USA 2008</a>
        <a href="gal34.html">  Fred in the USA 2008</a>
        <a href="gal33.html">  Workshops around Sussex 2007</a>
        <a href="gal32.html">  Scarecrows in actions 2007</a>
        <a href="gal31.html">  Goldy's 2007</a>
        <a href="gal30.html">  various scarecrows in summer 2007</a>
        <a href="gal29.html">  Creating atma 2007</a>
        <a href="gal28.html">  summer solstice ventura California 2007</a>
        <a href="gal27.html">  fiesta (montecito) ymca summer 2006</a>
        <a href="gal26.html">  Pasadena Workshop summer 2006</a>
        <a href="gal23.html">  Memorial may weekend</a>
        <a href="gal22.html">  Montecito pre School Workshop</a>
        <a href="gal21.html">  Montecito Family YMCA summer 2005</a>
        <a href="gal20.html">  Hollister School Garden (Goleta)</a>
        <a href="gal19.html">  more workshop at Hollister School</a>

        <a href="gal18.html">  workshop at Hollister School</a>
        <a href="gal17.html">  the four season <b>scarecrows</b></a>
        <a href="gal16.html">  various <b>scarecrows</b></a>
        <a href="gal15.html"> fall and christmas in the usa </a>
        <a href="gal14.html"> various in the usa</a>
        <a href="gal12.html">
          christmas in the usa.
        </a>
        <a href="gal11.html">
          work in the usa.
        </a>
        <a href="gal10.html">
          workshops in the uk.
        </a>
        <a href="gal9.html">
          a <b>scarecrow</b> for joe
        </a>
        <a href="gal8.html">
          workshops in usa.
        </a>
        <a href="gal7.html">
          advertising <b>scarecrows</b>
        </a>
        <a href="gal6.html">
          celebrities and famous <b>scarecrows</b>
        </a>
        <a href="gal5.html">
          traditional <b>scarecrows</b>
        </a>
        <a href="gal4.html">
          various <b>scarecrows</b>
        </a>
        <a href="gal3.html">
          various workshops &amp; events
        </a>
        <a href="gal2.html">
          lookalike and famous <b>scarecrows</b>
        </a>
        <a href="gal1.html">
          an array of traditional <b>scarecrows</b>
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