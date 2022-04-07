import React from 'react'
import Nabvar from '../../components/NabVar/NabVar'
import TransBar from '../../components/TransBar/TransBar'
import { useTranslation } from 'react-i18next/';
import "./HomePage.scss"

export default function HomePage() {
  const {t} = useTranslation(['translation']);
  return (


<div className="c-home">
<TransBar/>
<h1 className="c-home__title"> {t('Games of thrones')}</h1>

<Nabvar/>

</div>


  )
}
