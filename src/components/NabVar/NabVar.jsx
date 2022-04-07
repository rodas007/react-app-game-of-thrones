import React from 'react'
import { useTranslation } from 'react-i18next/';
import '../../styles/components/_menu.scss';
import { NavLink } from 'react-router-dom'
export default function Nabvar() {

  const {t} = useTranslation(['translation']);
  return (
    <div>
      
    
<nav className="c-navbar">
  
    <NavLink className="c-navbar--link" to="/characters" activeclassname="active">{t('Characters')}</NavLink>
    <NavLink className="c-navbar--link" to="/houses" activeclassname="active">{t('Houses')}</NavLink> 
    <NavLink className="c-navbar--link" to="/timeline" activeclassname="active">{t('Timeline')}</NavLink>
   
   </nav>

   </div>
  )
}
