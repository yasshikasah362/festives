import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


// Updated template names for variety
const templates = [
  {
    id: 1,
    name: "Traditional Ganpati",
    image: process.env.PUBLIC_URL + "/ganpati1.jpg",
  },
  {
    id: 2,
    name: "Festival Lights",
    image: process.env.PUBLIC_URL + "/ganpati2.jpg",
  },
  {
    id: 3,
    name: "Divine Celebration",
    image: process.env.PUBLIC_URL + "/ganpati3.jpg",
  },
  {
    id: 4,
    name: "Cultural Harmony",
    image: process.env.PUBLIC_URL + "/ganpati4.jpg",
  },
  {
    id: 5,
    name: "Eco Ganesh",
    image: process.env.PUBLIC_URL + "/ganpati5.jpg",
  },
  {
    id: 6,
    name: "Modern Art",
    image: process.env.PUBLIC_URL + "/ganpati6.jpg",
  },
];

const GanpatiTemplates = () => {
  const navigate = useNavigate();

  return (
    <>
     
      <Container className="mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold display-5">Choose Your Ganpati Template</h2>
          <p className="text-muted">Celebrate Ganesh Chaturthi with creative & divine templates</p>
        </div>

        <Row className="g-4">
          {templates.map((template) => (
            <Col md={4} sm={6} xs={12} key={template.id}>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card className="h-100 border-0 shadow-lg rounded-4">
                  <div
                    style={{
                      height: "250px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#f9f9f9",
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem",
                    }}
                  >
                    <Card.Img
                      src={template.image}
                      alt={template.name}
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="text-center fw-semibold mb-3">
                      {template.name}
                    </Card.Title>
                    <Button
                      variant="warning"
                      className="w-100 rounded-pill text-dark fw-bold"
                      onClick={() => navigate("/customize", { state: { template } })}
                    >
                      Select Template
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default GanpatiTemplates;
