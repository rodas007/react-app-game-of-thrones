import React, {  useContext, useEffect, useState } from "react";
import { API } from "../../context/api.const";
import Nabvar from '../../components/NabVar/NabVar'
import TransBar from '../../components/TransBar/TransBar'
import './CharactersPage.scss'
import CharactersGallery from "../../components/CharactersGallery/CharactersGallery";
import { LoadingContext } from "../../context/LoadingContext";

let allChar = [];

export default function CharactersPage() {


  const [characters, setCharacters] = useState([]);
  const [search , setSearch] = useState([]);
  const {setIsLoading} = useContext(LoadingContext);

 const getCharacters = () => {
  setIsLoading(true)
    API.get("/api/show/characters").then((res) => {
      setIsLoading(false)
        allChar = res.data;
        setCharacters(res.data)
      
     
      
      
    });
  };


  const filterItem = ()=>{

    const filterCharacters = allChar.filter((char)=>{
      
      if (char.name.toLowerCase().includes(search.toString().toLowerCase())) {
          return char;
      }
    })
   
      setCharacters(filterCharacters);
                  
}


useEffect(getCharacters, [])
useEffect(()=>{
  if (search) {
    filterItem();
  }else{
    getCharacters()
  }
}, [search]);






  return (

    <div className="c-charactersPage">
    <TransBar handleChange={(e)=> setSearch(e.target.value)} ></TransBar>
      <CharactersGallery charactersGallery={characters}></CharactersGallery>
    <Nabvar></Nabvar>
    </div>

  )
}

