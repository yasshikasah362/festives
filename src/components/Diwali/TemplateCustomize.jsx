import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import html2canvas from "html2canvas";


const fonts = ["Arial", "Poppins", "Dancing Script", "Roboto", "Courier New"];

const TemplateCustomize = () => {
  const location = useLocation();
  const template = location.state?.template;

  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");
  const [fontFamily, setFontFamily] = useState("Poppins");
  const [fontSize, setFontSize] = useState(20);

  const handleDownload = () => {
    const captureElement = document.getElementById("template-preview");
    html2canvas(captureElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "custom-diwali-template.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  if (!template) {
    return <h3 className="text-center mt-5">No Template Selected</h3>;
  }

  return (
    <>
    
   
    <Container className="mt-5">
      <h2 className="text-center mb-4">Customize Your Template</h2>
      <Row>
        <Col md={6}>
          <Card
            id="template-preview"
            className="p-3 text-center shadow"
            style={{ position: "relative" }}
          >
            <Card.Img
              variant="top"
              src={template.image}
              style={{ height: "400px", objectFit: "contain" }}
            />
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "10%",
                width: "80%",
                color: textColor,
                fontFamily: fontFamily,
                fontSize: `${fontSize}px`,
              }}
            >
              <div style={{ fontSize: `${fontSize}px`, fontWeight: "bold" }}>{message}</div>
  <div style={{ fontSize: `${fontSize}px`, fontWeight: "bold" }}>{company}</div>
  <div style={{ fontSize: `${fontSize}px`, fontWeight: "bold" }}>{contact}</div>
            </div>
          </Card>
        </Col>

        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Greeting Message</Form.Label>
              <Form.Control
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Text Color</Form.Label>
              <Form.Control
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Font Style</Form.Label>
              <Form.Select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
              >
                {fonts.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Font Size ({fontSize}px)</Form.Label>
              <Form.Range
                min={12}
                max={40}
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleDownload}>
              Download Template
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
     </>
  );
};

export default TemplateCustomize;
