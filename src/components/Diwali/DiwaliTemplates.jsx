import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import NavBarComponent from "../Navbar/NavBarComponent";

const templates = [
  {
    id: 1,
    name: "Traditional",
    image: process.env.PUBLIC_URL + "/diwali_tempelate1.jpeg",
  },
  {
    id: 2,
    name: "Festival Lights",
    image: process.env.PUBLIC_URL + "/diwali_tempelate2.jpeg",
  },
  {
    id: 3,
    name: "Lakshmi Pooja",
    image: process.env.PUBLIC_URL + "/diwali_tempelate3.jpeg",
  },
  {
    id: 4,
    name: "Decor Lights",
    image: process.env.PUBLIC_URL + "/diwali_tempelate4.jpeg",
  },
  {
    id: 5,
    name: "Golden Glow",
    image: process.env.PUBLIC_URL + "/diwali_tempelate5.jpeg",
  },
  {
    id: 6,
    name: "Modern Sparkle",
    image: process.env.PUBLIC_URL + "/diwali_teempelate6.jpeg",
  },
];

const DiwaliTemplates = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBarComponent />
      <Container className="mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold display-5">Choose Your Diwali Template</h2>
          <p className="text-muted">Select from beautifully designed templates to customize your Diwali wishes.</p>
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
                      style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="text-center fw-semibold mb-3">
                      {template.name}
                    </Card.Title>
                    <Button
                      variant="success"
                      className="w-100 rounded-pill"
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

export default DiwaliTemplates;
