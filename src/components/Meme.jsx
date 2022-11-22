import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import memesData from "../assets/js/memes.Data.js";
import Container from "react-bootstrap/Container";

function Meme(props) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const { url } = allMemeImages[randomNumber];
    setMeme((prevState) => {
      return { ...prevState, randomImage: url };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Control onChange={handleChange} type="text" name="topText" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              onChange={handleChange}
              type="text"
              name="bottomText"
            />
          </Form.Group>
          <Button onClick={getMemeImage} className="w-100" variant="primary">
            Get a new meme image
          </Button>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col md={6} className="d-flex justify-content-center position-relative">
          <img src={meme.randomImage} alt="" className="mw-100 p-3" />
          <p className="position-absolute top-0 text-top">{meme.topText}</p>
          <p className="position-absolute bottom-0 text-bottom">
            {meme.bottomText}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Meme;
