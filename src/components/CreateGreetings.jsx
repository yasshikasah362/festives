import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import upcomingFestivals from "./festivals";

const CreateGreeting = () => {
  return (
    <Container fluid className="py-4 bg-body-secondary">
      <Row className="min-vh-100 shadow-lg rounded">
        {/* Left Panel: Festival Timeline */}
        <Col
          md={3}
          className="bg-white border-end px-3 py-4 d-flex flex-column align-items-start"
          style={{ overflowY: "auto" }}
        >
          <h5 className="text-primary fw-bold mb-4 w-100 text-center">
            Upcoming Festivals
          </h5>

          {upcomingFestivals.map((festival, index) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={festival.id}
              className="w-100 mb-3"
            >
              <Card className="border-0 shadow-sm">
                <Row className="g-0 align-items-center">
                  <Col xs={4}>
                    <Card.Img
                      src={festival.image}
                      alt={festival.name}
                      className="img-fluid rounded-start"
                      style={{ height: "70px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col xs={8}>
                    <Card.Body className="py-2">
                      <Card.Title className="fs-6 fw-semibold mb-1">
                        {festival.name}
                      </Card.Title>
                      <Badge bg="light" text="dark" className="small">
                        {festival.date}
                      </Badge>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </motion.div>
          ))}
        </Col>

        {/* Right Panel: Create Greeting CTA */}
        <Col
          md={9}
          className="d-flex justify-content-center align-items-center bg-light bg-gradient"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center"
          >
            <h2 className="mb-4 fw-bold text-dark">Ready to Design Your Greeting?</h2>
            <Button
              variant="primary"
              size="lg"
              className="px-5 py-3 rounded-pill shadow-lg"
            >
              Create Greeting
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateGreeting;
