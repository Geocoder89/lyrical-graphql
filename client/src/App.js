import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Routes>
    <Route index path="/" element={<SongList />} />
    <Route path="/songs/new" element={<SongCreate/>}/>
    <Route path="/songs/:id" element={<SongDetail/>}/>
    </Routes>
    
    </Router>
    
  );
}

export default App;
