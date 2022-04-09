import React from "react";
import './TimelineGallery.scss'
import down2 from '../../assets/images/down2.png'
import up2 from '../../assets/images/up2.png'
export function TimelineGallery(props) {

  

  return (
    <div className="timeLineSectionMain">
    <div className="timeLineSection">
    <div className="startCircle" onClick={props.sortPeople}>
    <span className="startCircle--number">
    {props.asc % 2 === 0 ? <p className="number">0</p> : <p className="number">100</p>}
    </span>
   
    </div>
    {props.asc % 2 !== 0 ? <img className="arrowTime"src={up2}></img> : <img className="arrowTime" src={down2}></img>}
   
     <div className="mainDivTime">
     <div className="emptyDiv"></div>
     <div className="emptyDiv2"></div>
      {props.timelinePage.map((character, i)=>
          <div key={i} className="divPrimigen">
          { i % 2 !== 0 ? <div className="c-timelineChar block1"><figure className="figureClass">  {
            character.name === 'Ellaria Sand' ? <h4>39</h4> :
                <h4>{character.age && character.age.age}</h4> }
                <h4>{character.name}</h4>
                    <div className="c-timelineChar--div">
                <img className="c-timelineChar--div__img" src={character.image}></img>
                    </div> 

            </figure></div> : <div className="c-timelineChar block2"><figure className="figureClass">  {
            character.name === 'Ellaria Sand' ? <h4>39</h4> :
                <h4>{character.age && character.age.age}</h4> }
                <h4>{character.name}</h4>
                    <div className="c-timelineChar--div">
                <img className="c-timelineChar--div__img" src={character.image}></img>
                    </div> 

            </figure></div> }
           
          </div> 
      )
      }
    </div>
    </div>
    </div>
  );
}
