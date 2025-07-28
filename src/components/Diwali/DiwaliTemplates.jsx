import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  {
    id: 7,
    name: "Modern Look",
    image: process.env.PUBLIC_URL + "/diwali_teemplate7.jpg",
  },
  {
    id: 8,
    name: "Modern Greet",
    image: process.env.PUBLIC_URL + "/diwali_templates8.jpg",
  },
];

const DiwaliTemplates = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5" style={{ backgroundColor: "#f9f6f1", minHeight: "100vh" }}>
      

      <Row className="g-4">
        {templates.map((template) => (
          <Col key={template.id} lg={3} md={4} sm={6} xs={12}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="h-100"
            >
              <Card className="shadow-sm border-0 rounded-4 h-100">
  <Card.Img
    variant="top"
    src={template.image}
    alt={template.name}
    className="rounded-top-4 bg-white"
    style={{ height: "200px", objectFit: "contain", padding: "10px" }}
  />
  <Card.Body className="d-flex flex-column justify-content-between p-3">
    <Card.Title className="text-center fw-semibold text-dark fs-6 mb-3">
      {template.name}
    </Card.Title>
    <Button
      variant="outline-dark"
      className="rounded-pill btn-sm mt-auto"
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
  );
};

export default DiwaliTemplates;
