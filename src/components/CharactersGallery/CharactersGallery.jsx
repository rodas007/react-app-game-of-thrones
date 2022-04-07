import React from 'react'
import "./CharactersGallery.scss";
import { Link} from 'react-router-dom';
import roslin from '../../assets/images/roslin.jpg';
import walder from '../../assets/images/walderfrey.jpg'
import oberyn from '../../assets/images/Oberyn.png'
import grenn from '../../assets/images/grenn.jpg'


export default function CharactersGallery(props) {





  return (

    <div className="c-characters-gallery">
    <div className="row">
    
    {props.charactersGallery.map((item, index)=>

    <div key={index} className="c-characters-gallery__content col-12 col-sm-6 col-md-4 col-lg-2">
    <Link to={"/characters/" + item.name}>
    <figure>{
        item.name === 'Roslin Frey' ? <img className="c-characters-gallery__img" src={roslin} alt={item.name}></img>
        : <img className="c-characters-gallery__img" src={item.image} alt={item.name}></img>
        && item.name === 'Oberyn Martell' ? <img className="c-characters-gallery__img" src={oberyn} alt={item.name}></img>
        : <img className="c-characters-gallery__img" src={item.image} alt={item.name}></img>
        && item.name === '"Black Walder" Frey' ? <img className="c-characters-gallery__img" src={walder} alt={item.name}></img>
        : <img className="c-characters-gallery__img" src={item.image} alt={item.name}></img>
        && item.name === 'Grenn' ? <img className="c-characters-gallery__img" src={grenn} alt={item.name}></img>
        : <img className="c-characters-gallery__img" src={item.image} alt={item.name}></img>
    }
   <figcaption className="c-characters-gallery__name">{item.name}</figcaption>
    </figure>
    </Link>
    </div>
    )}

    </div>
    </div>
)
}