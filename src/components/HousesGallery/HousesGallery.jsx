import React from 'react'
import { Link } from "react-router-dom";
import "./HousesGallery.scss"
export default function HousesGallery(houses) {
  return (


    <div className="c-house-gallery">
    <div className="row">
      {houses.casa.map((casa, i) => (
        <div
          key={i}
          className="c-house-gallery__content col-12 col-sm-6 col-md-6 col-lg-2 ">
          
            <figure className="pb-5" key={i}>
            <Link to={"/houses/" + casa.name}>
              {<img className="c-house-gallery__image" src={casa.logoURL} alt={casa.name}/> 
            }
              <figcaption className="c-house-gallery__name">
                {casa.name}
              </figcaption>
            
            </Link>
            </figure>
         
        </div>
      ))}
    </div>
  </div>
);
}