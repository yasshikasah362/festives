import React, { useState } from "react";
import { Container, Form, Button, Spinner, Alert, Image, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
// import { Container, Form, Button, Spinner, Alert, Image } from "react-bootstrap";

const RemoveBgComponent = () => {
  const [image, setImage] = useState(null);
  const [removedBgImage, setRemovedBgImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setRemovedBgImage(null);
    setError("");
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image_file", image);

    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/remove-bg", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setRemovedBgImage(res.data.image);
    } catch (err) {
      console.error("Upload failed", err);
      setError("Failed to remove background. Try again.");
    }

    setLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = removedBgImage;
    link.download = "no-bg-image.png";
    link.click();
  };

  return (
   <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="mb-4 text-center text-primary">Remove Image Background</h3>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select an image</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
              </Form.Group>

              <div className="d-grid">
                <Button onClick={handleUpload} disabled={loading} variant="primary">
                  {loading ? <Spinner animation="border" size="sm" /> : "Remove Background"}
                </Button>
              </div>

              {error && <Alert variant="danger" className="mt-3 text-center">{error}</Alert>}

              {removedBgImage && (
                <div className="mt-4 text-center">
                  <h5 className="text-success">Background Removed Image</h5>
                  <Image src={removedBgImage} fluid rounded className="border mt-3" />
                  <div className="d-grid mt-4">
                    <Button variant="success" onClick={handleDownload}>
                      Download Image
                    </Button>
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RemoveBgComponent;
