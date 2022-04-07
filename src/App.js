
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HousesPage from './pages/HousesPage/HousesPage';
import ChronologyPage from './pages/ChronologyPage/ChronologyPage';
import { CharactersDetailPage } from './pages/CharactersPage/CharactersDetailPage/CharactersDetailPage';
import { HousesDetailPage } from './pages/HousesPage/HouseDetailPage/HousesDetailPage';


function App() {
  return (
  <div >
 <Router>
 <Routes>
       
         <Route path="/" element={<HomePage />}/>
         <Route path="/houses/" element={<HousesPage />} />
         <Route path="/houses/:name" element={<HousesDetailPage />}/>
         <Route path="/characters" element={<CharactersPage />}/>
         <Route path="/characters/:name" element={<CharactersDetailPage />}/>
         <Route path="/timeline" element={<ChronologyPage />}/>
         
       </Routes>
</Router>
  </div>
  );
}

export default App;
