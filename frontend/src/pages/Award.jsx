import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";


const Award = () => {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchAwards = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/awards");
      setAwards(response.data);
    } catch (error) {
      setError("Error fetching awards");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAwards(); 
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Awards & Achievements</h2>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading awards...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : awards.length === 0 ? (
        <div className="alert alert-warning text-center">No awards found</div>
      ) : (
        <Row>
          {awards.map((award) => (
            <Col key={award._id} md={4} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">{award.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{award.year}</Card.Subtitle>
                  <Card.Text>{award.description}</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Award;
