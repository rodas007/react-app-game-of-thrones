import {NavLink, useLocation} from 'react-router-dom';
import house from '../../assets/images/Group.png';
import iconBack from '../../assets/images/Vector.png';
import iconSearch from '../../assets/images/search1.png'
import '../../styles/components/_transbar.scss';
import logoSpain from '../../assets/images/spain1.png';
import logoEngland from '../../assets/images/united-kingdom1.png';
import React from 'react'
import { useTranslation } from 'react-i18next';


export default function TransBar(transbar, translate) {

    const {t,i18n} = useTranslation(['translation']);

    const changeLanguage = (code)=>{
        i18n.changeLanguage(code);
    }

  const location = useLocation();
  const local = location.pathname;
    const dinChar = local.substring(11);
    const dinHouse = local.substring(7);
    const charPage = '/characters'+dinChar

    const showIconHouse = (location)=>{
        
      let display = false;
      switch (location.pathname) {
          
          case '/characters':
              return display = true;
          case '/characters'+dinChar:
                  return display = true;
          case '/houses':
              return display = true;
          case '/houses'+dinHouse:
              return display = true;        
          case '/timeline':
              return display = true;
                       
          default:
              return display = false;
      }
  }

  const showSearchBar = (location)=>{
      let display = false;
      switch (location.pathname) {
          case '/characters':
              return display = true;
          
          case '/houses':
              return display = true;
                  
          case '/timeline':
              return display = false;
                       
          default:
              return display = false;
      }
  }

  const showIconBack= (location)=>{
      let display = false;
      switch (location.pathname) {
          case '/characters':
              return display = false;

          case '/characters'+dinChar:
              return display = true;  
           
          case '/houses':
              return display = false;

          case '/houses'+dinHouse:
              return display = true;     
                  
          case '/timeline':
              return display = false;
                       
          default:
              return display = false;
      }
  }

 





  return (


<div>
<nav className="c-transBar">
           {showSearchBar(location) &&  
           <div className="c-transBar__contentSearch">
           <label><img src={iconSearch} className="iconSearch"   alt="search"></img>
           <input type="text" className="c-transBar__search" placeholder="Search..." onInput={transbar, translate.handleChange}></input>
           </label>
           </div>}
           {showIconBack(location) && location.pathname === charPage ? <NavLink className="c-transBar__imgBack" to="/characters"><img className="c-transBar__imgBack" src={iconBack} alt="img"  ></img><span className="span">{t('Back')}</span></NavLink> 
           :showIconBack(location) && <NavLink className="c-transBar__imgBack" to="/houses"><img className="c-transBar__imgback" src={iconBack} alt="Back" ></img><span className="span">{t('Back')}</span></NavLink>}
           <div className="c-transBar__button">
           {showIconHouse(location) && <NavLink className="c-transBar__link" to="/"><img className="c-transBar__imghouse" src={house}  alt="img"  ></img></NavLink>}
            <button className="c-transBar__link" to="/" onClick={()=> changeLanguage('es')}><img className="c-transBar__img" src={logoSpain}  alt="Spanish"></img></button>
            <button className="c-transBar__link" to="/" onClick={()=> changeLanguage('en')}><img className="c-transBar__img" src={logoEngland} alt="English"></img></button>
           </div>
        </nav>

</div>


  )
}
