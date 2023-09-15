import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Dashboard</h1>
      <div className="row mt-4">
        <div className="col-md-3">
          <Link to="/students">
            <Card>
              <Card.Body>
                <Card.Title>Students</Card.Title>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/teachers">
            <Card>
              <Card.Body>
                <Card.Title>Teachers</Card.Title>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/classes">
            <Card>
              <Card.Body>
                <Card.Title>Classes</Card.Title>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/fees">
            <Card>
              <Card.Body>
                <Card.Title>Fees</Card.Title>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
