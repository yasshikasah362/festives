import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 



const templates = [
  {
    id: 1,
    name: "Traditional",
    image: process.env.PUBLIC_URL + "/krishna1.jpg",
  },
  {
    id: 2,
    name: "Festival Lights",
    image: process.env.PUBLIC_URL + "/krishna2.jpg",
  },
  {
    id: 3,
    name: "Lakshmi Pooja",
    image: process.env.PUBLIC_URL + "/krishna3.jpg",
  },
  {
    id: 4,
    name: "Lakshmi Pooja",
    image: process.env.PUBLIC_URL + "/krishna4.jpg",
  },
  {
    id: 5,
    name: "Lakshmi Pooja",
    image: process.env.PUBLIC_URL + "/krishna5.jpg",
  },
  {
    id: 6,
    name: "Lakshmi Pooja",
    image: process.env.PUBLIC_URL + "/krishna6.jpg",
  },
];

const DurgaPujaTemplates = () => {
  const navigate = useNavigate();
  return (
    <>
    
    <Container className="mt-5">
      <h2 className="text-center mb-4">Choose Your JanmaAsthami Template</h2>
      <Row>
        {templates.map((template) => (
          <Col md={4} key={template.id} className="mb-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={template.image}
                  alt={template.name}
                  style={{ height: "250px", objectFit: "contain", padding: "10px" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="text-center">{template.name}</Card.Title>
                  <Button
  variant="success"
  className="mt-3"
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

export default DurgaPujaTemplates;
