import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Button } from "react-bootstrap";
import { ArrowLeft } from 'react-bootstrap-icons'; 

import DiwaliTemplates from "../components/Diwali/DiwaliTemplates";
import HoliTemplates from "../components/Holi/HoliTemplates";
import DurgaPujaTemplates from "../components/DurgaPuja/DurgaPujaTemplates";
import KrishnaTemplates from "../components/Krishna/KrishnaTemplates";
import GaneshPujaTemplates from "../components/GaneshPuja/GaneshPujaTemplates";
import RakshaBandhanTemplates from "../components/RakshaBandhan/RakshaBandhanTemplates";


const FestivalGrid = ({ upcomingFestivals }) => {
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleExplore = (festival) => {
    setSelectedFestival(festival);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedFestival(null);
  };
  const renderTemplates = () => {
    switch (selectedFestival?.name) {
      case "Diwali":
        return <DiwaliTemplates />;
      case "Holi":
        return <HoliTemplates />;
      case "Durga Puja":
        return <DurgaPujaTemplates />;
      case "Krishna Janmashtami":
        return <KrishnaTemplates />;
      case "Ganesh Puja":
        return <GaneshPujaTemplates />;
      case "Raksha Bandhan":
        return <RakshaBandhanTemplates />;
      default:
        return <p>No templates available.</p>;
    }
  };

  return (
    <div className="container mt-4">
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">

        {upcomingFestivals?.map((festival, index) => (
          <motion.div
            className="col d-flex"
            key={festival.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
          >
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden w-100 h-100">
              <div style={{ height: "250px", overflow: "hidden" }}>
                <motion.img
                  src={festival.image}
                  alt={festival.name}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <h5 className="fw-semibold mt-2 mb-3">{festival.name}</h5>
                <motion.button
                  className="btn btn-outline-primary w-100 rounded-pill"
                  onClick={() => handleExplore(festival)}
                  whileHover={{ scale: 1.03 }}
                >
                  Browse Templates →
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for displaying templates */}
     <Modal
       show={showModal}
       onHide={handleClose}
       size="lg"
       centered
       dialogClassName="modal-90w"
     >
       
     
       <Modal.Body>
       <div className="d-flex align-items-center justify-content-between mb-3">
         {/* Back Button - Left */}
         <div
           className="d-flex align-items-center"
           style={{ cursor: "pointer", fontWeight: "500", fontSize: "18px" }}
           onClick={handleClose}
         >
           <ArrowLeft size={20} className="me-2" />
           Back
         </div>
     
         {/* Heading - Center */}
         <div className="flex-grow-1 text-center me-5">
           <h4 className="fw-bold m-0">Select Your Template</h4>
         </div>
       </div>
     
       {renderTemplates()}
     </Modal.Body>
     
     
     </Modal>
    </div>
  );
};

export default FestivalGrid;
