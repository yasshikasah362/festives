import React, { useState } from "react";
import { ArrowLeft } from 'react-bootstrap-icons'; 
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import upcomingFestivals from "./festivals";

// Import template components
import DiwaliTemplates from "../components/Diwali/DiwaliTemplates";
import HoliTemplates from "../components/Holi/HoliTemplates";
import DurgaPujaTemplates from "../components/DurgaPuja/DurgaPujaTemplates";
import KrishnaTemplates from "../components/Krishna/KrishnaTemplates";
import GaneshPujaTemplates from "../components/GaneshPuja/GaneshPujaTemplates";
import RakshaBandhanTemplates from "../components/RakshaBandhan/RakshaBandhanTemplates";

const CreateGreeting = () => {
  const navigate = useNavigate();
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFestivalClick = (festival) => {
    setSelectedFestival(festival);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFestival(null);
  };

  const renderTemplate = () => {
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
    <Container fluid className="py-4">
      <Row className="min-vh-100">
        {/* Left Panel */}
        <Col md={3} className="overflow-auto border-end bg-white px-3">
          <h4 className="text-center text-primary fw-bold mb-4">
            Upcoming Festivals
          </h4>

          {upcomingFestivals.map((festival) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={festival.id}
              className="mb-3"
              onClick={() => handleFestivalClick(festival)}
              style={{ cursor: "pointer" }}
            >
              <Card className="border-0 shadow-sm">
                <Row className="g-0 align-items-center">
                  <Col xs={4}>
                    <Card.Img
                      src={festival.image}
                      alt={festival.name}
                      className="img-fluid rounded-start"
                      style={{ height: "80px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col xs={8}>
                    <Card.Body className="py-2">
                      <Card.Title className="mb-1 fs-6 fw-semibold">
                        {festival.name}
                      </Card.Title>
                      <Card.Text className="text-muted small mb-0">
                        {festival.date}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </motion.div>
          ))}
        </Col>

        {/* Right Panel */}
        <Col
  md={9}
  className="d-flex justify-content-center align-items-center bg-light p-4"
  style={{ backgroundColor: "var(--op-color-ex-light)", borderRadius: "1rem" }}
>
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="text-center p-4 shadow-sm"
    style={{
      backgroundColor: "white",
      borderRadius: "1rem",
      border: "2px dashed var(--op-color-secondary)",
      maxWidth: "500px",
    }}
  >
    <h4
      className="mb-3 fw-bold"
      style={{
        color: "var(--op-color-secondary)",
        fontSize: "1.5rem",
      }}
    >
      Welcome to Greeting Creator 
    </h4>
    <p
      className="text-muted"
      style={{
        fontSize: "1rem",
        lineHeight: "1.6",
      }}
    >
      Click on a festival from the left panel to explore and customize
      beautiful templates!
    </p>
  </motion.div>
</Col>

      </Row>

      {/* Modal for Festival Templates */}
      <Modal
  show={showModal}
  onHide={handleCloseModal}
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
      onClick={handleCloseModal}
    >
      <ArrowLeft size={20} className="me-2" />
      Back
    </div>

    {/* Heading - Center */}
    <div className="flex-grow-1 text-center me-5">
      <h4 className="fw-bold m-0">Select Your Template</h4>
    </div>
  </div>

  {renderTemplate()}
</Modal.Body>


</Modal>


    </Container>
  );
};

export default CreateGreeting;
