// RemoveBackground.js
import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card, Spinner } from "react-bootstrap";
import axios from "axios";

const RemoveBackground = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setDownloadUrl(null); // reset download url
  };

  const handleRemoveBackground = async () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image_file", image);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/remove-bg", formData, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "image/png" });
      const downloadLink = window.URL.createObjectURL(blob);
      setDownloadUrl(downloadLink);
    } catch (error) {
      alert("Error removing background");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow-lg rounded">
            <h3 className="text-center mb-4">Background Remover</h3>
            <Form>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select Image</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleRemoveBackground} disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : "Remove Background"}
                </Button>
              </div>
            </Form>

            {downloadUrl && (
              <div className="mt-4 text-center">
                <img src={downloadUrl} alt="Removed Background" className="img-fluid rounded" />
                <div className="mt-3">
                  <a href={downloadUrl} download="no-bg.png" className="btn btn-success">
                    Download Image
                  </a>
                </div>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RemoveBackground;
