
import React, { useContext,useEffect, useState } from "react";
import TransBar from '../../components/TransBar/TransBar'
import Nabvar from '../../components/NabVar/NabVar'
import { API } from "../../context/api.const";
import  HousesGallery  from "../../components/HousesGallery/HousesGallery";
import './HousesPages.scss';
import { LoadingContext } from "../../context/LoadingContext";



export default function HousesPage() {
  const [casas, setCasas] = useState([]);
  const [search , setSearch] = useState([]);
  const {setIsLoading} = useContext(LoadingContext);


  const localHouseWithImage = [];
 

  const getCasas = () => {
   setIsLoading(true)
    API.get("/api/show/houses").then((res) => {
      setIsLoading(false)
      for (const house of res.data) {
        if (house.logoURL !== undefined) {
          localHouseWithImage.push(house);
        }
      }
    
        setCasas(localHouseWithImage);
      
       
     
    })
  };

  const filterItem = ()=>{
    if (search) {
      const filterHouse = casas.filter((house)=>{
        
        if (house.name.toLowerCase().includes(search.toLowerCase())) {
            return casas;
        }
      })
      setCasas(filterHouse);
    }
      
               
  }

  useEffect(getCasas,[]);
  useEffect(()=>{
    if (search) {
      filterItem();
    }else{
      getCasas();
    }
  }, [search]);

  return (
    <div className="c-housesPage">
      <TransBar handleChange={(e)=> setSearch(e.target.value)}></TransBar>
      <HousesGallery casa={casas} />
      <Nabvar></Nabvar>
    </div>
  );
}

