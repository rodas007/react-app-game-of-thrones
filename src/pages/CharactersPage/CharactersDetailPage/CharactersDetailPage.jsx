import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from "../../../styles/context/api.const";
import './CharactersDetailPage.scss';
import logoDefault from "../../../assets/images/logoDefault.jpeg";
import { useTranslation } from 'react-i18next/';
import TransBar from '../../../components/TransBar/TransBar'

export function CharactersDetailPage() {

    const {t} = useTranslation(['translation']);

    const [character, setCharacter] = useState(null);

    const [house, setHouse] = useState(null);

    const { name } = useParams();

    const getCharacterDetail = () => {
        API.get('/api/show/characters/' + name).then((res) => {
            setCharacter(res.data);
            const houseName = res.data.house;
            getHouse(houseName);
        });
    }

    const getHouse = (houseName) => {
            API.get('/api/show/houses/' + houseName).then((res) => {
                if (res.data[0] !== null || res.data[0] !== undefined) {
                    setHouse(res.data[0]);
                }else{
                    setHouse(res.data);
                }
            });
    }

    useEffect(getCharacterDetail, []);

    return (
        character && house &&
        <div>
        <TransBar></TransBar>
        
        <div className = "c-char">
            <div className= "c-char__basic">
                <figure>
                    <img src={character.image} alt={character.name} className="c-char__img"/>
                    <figcaption className="c-char__name">{character.name}</figcaption>
                </figure>
            </div>

            <div className= "c-char__extra">
                <div className="c-char__item">
                    <h3 className="c-char__title">{t('HOUSE')}</h3>{
                            house.logoURL
                            ?<img className="c-char__house" src={house.logoURL} alt={house.name} />
                            :<img className="c-char__house" src= {logoDefault} alt={character.house} />
                        }       
                </div>
                <div className="c-char__item">
                    <h3 className="c-char__title">{t('ALLEGIANCES')}</h3>
                    <div className="c-char__apires">
                    {character.allegiances.map((allegiance, i)=>
                        <div key={i}>
                            <p>{allegiance}</p>
                        </div>
                    )}
                    </div>
                </div>
                <div className="c-char__item">
                    <h3 className="c-char__title">{t('APPEARANCES')}</h3>
                    <div className="c-char__apires">
                    {character.appearances.map((appearance, i)=>
                        <div key={i}>
                            <p>{appearance}</p>
                        </div>
                    )}
                    </div>
                </div>
                <div className="c-char__item">
                    <h3 className="c-char__title">{t('FATHER')}</h3>
                    <div className="c-char__apires">
                        <p>{character.father}</p>
                    </div>
                </div>
                <div className="c-char__item">
                    <h3 className="c-char__title">{t('SIBLINGS')}</h3>
                    <div className="c-char__apires">
                    {character.siblings.map((sibling, i)=>
                        <div key={i}>
                            <p>{sibling}</p>
                        </div>
                    )} 
                    </div>
                </div>
                <div className="c-char__item">
                    <h3 className="c-char__title">{t('TITLES')}</h3>
                    <div className="c-char__apires">
                    {character.titles.map((title, i)=>
                        <div key={i}>
                            <p>{title}</p>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
}