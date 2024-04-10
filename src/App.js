import { Routes, Route, HashRouter } from "react-router-dom";

import './assets/css/styles.css'

import MainMenu from './components/MainMenu.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainMenu />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
