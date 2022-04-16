import React, { useEffect, useState } from "react";
import { API } from "../../../context/api.const";
import './HousesDetailPage.scss';
import { useParams } from 'react-router-dom';
import TransBar from '../../../components/TransBar/TransBar'
import { useTranslation } from "react-i18next/";

export function HousesDetailPage() {

    const {t} = useTranslation(['translation']);

    const [casa, setCasa] = useState(null);

    const {name} = useParams();

    const getCasa = () => {
        API.get('/api/show/houses/' + name).then((res) => {
            
            console.log(name)
          setCasa(res.data[0]);
          console.log(res.data)
        })
    }

    useEffect(getCasa, [name])
    
    
    return (
        casa &&
        <div>
        <TransBar></TransBar>
       
        <div className="c-house">
            <div className="c-house__basic">
                <figure className="c-house__figure">
                    <img className="c-house__img" src={casa.logoURL} alt={casa.name}/>
                    <h2 className="c-house__name">{casa.name}</h2>
                </figure>
            </div>
            <div className="c-house__extra">

            {casa.words
                ?<div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('WORDS')}</h3>       
                    <div className="c-house__text">
                        <p>{casa.words}</p>
                    </div>
                </div>
                :<div className="empty"></div>
            }

            {(casa.seat).length > 0
                ?<div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('SEAT')}</h3>
                    <div className="c-house__text">
                        <p>{casa.seat}</p>
                    </div>
                </div>
                :<div className="empty"></div>
            }

            {casa.region
                ?<div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('REGION')}</h3>
                    <div className="c-house__text">
                        <p>{casa.region}</p>
                    </div>
                </div>
                :<div className="empty"></div>
            }

            {(casa.allegiance).length > 0
                ?<div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('ALLEGIANCES')}</h3>
                    <div className="c-house__text">
                        <p>{casa.allegiance}</p>
                    </div>
                </div>
                :<div className="empty"></div>
            }
            {(casa.religion).length > 0
                ?<div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('RELIGIONS')}</h3>            
                    <div className="c-house__text">
                        <p>{casa.religion}</p>
                    </div>
                </div>
                :<div className="empty"></div>
            }
            {casa.createdAt
                ?<div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('FOUNDATION')}</h3>            
                    <div className="c-house__text">
                        <p>{casa.createdAt}</p>
                    </div>
                </div>
                :<div className="empty"></div>
            }

            </div>
        </div>
        </div>
    )
}