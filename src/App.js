import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import FestivalList from "./components/FestivalList";
import DiwaliTemplates from "./components/Diwali/DiwaliTemplates";
import TemplateCustomize from "./components/Diwali/TemplateCustomize";
import DurgaPujaTemplates from "./components/DurgaPuja/DurgaPujaTemplates";
import HoliTemplates from './components/Holi/HoliTemplates';
import RakshaBandhanTemplates from './components/RakshaBandhan/RakshaBandhanTemplates';
import GaneshPujaTemplates from './components/GaneshPuja/GaneshPujaTemplates';
import KrishnaTemplates from './components/Krishna/KrishnaTemplates';

// Create a wrapper component to use useNavigate
const FestivalListWrapper = () => {
  const navigate = useNavigate();

  const handleExplore = (festival) => {
    navigate(festival.route || "/");
  };

  return <FestivalList onExplore={handleExplore} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FestivalListWrapper />} />
        <Route path="/diwali" element={<DiwaliTemplates />} />
        <Route path="/customize" element={<TemplateCustomize />} />
        <Route path="/durgapuja" element={<DurgaPujaTemplates />} />
        <Route path="/holi" element={<HoliTemplates />} />
        <Route path="/rakshabandhan" element={<RakshaBandhanTemplates />} />
         <Route path="/ganeshpuja" element={<GaneshPujaTemplates />} />
         <Route path="/krishna" element={<KrishnaTemplates />} />
      </Routes>
    </Router>
  );
};

export default App;
