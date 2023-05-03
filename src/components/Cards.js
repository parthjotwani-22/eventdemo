import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import like from "../assets/like.png";
import img from "../assets/Event.jfif";
import React from "react";
import "./Header.css";
function GridExample(props) {
  return (
    <div style={{ position: "relative", margin: "100px 350px" }}>
      <Row xs={1} md={1} className="g-4">
        {Array.from({ length: props.data.length }).map((_, idx) => (
          <Col>
            <Card className="image-holder">
              <Card.Img
                variant="top"
                src={props.data[idx].img}
                height={"150em"}
                width={"90em"}
              />
              <Card.Body>
                <Card.Title>{props.data[idx].title}</Card.Title>
                <Card.Text>{props.data[idx].details}</Card.Text>
                <div>
                  <img src={like} height={"40px"}></img>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;
