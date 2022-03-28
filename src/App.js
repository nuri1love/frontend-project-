import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import LeftWidget from './components/LeftWidget/LeftWidget';
import Main from './pages/Main';
import About from './pages/About';
import Forms from './pages/Forms';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />
      <LeftWidget />
      <Box sx={{ml: '256px', mt: "70px"}}>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/forms" element={<Forms/>} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
