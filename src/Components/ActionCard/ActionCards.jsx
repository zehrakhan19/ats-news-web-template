import React, { useState } from "react";
import "./ActionCard.css";
import Modal from "react-bootstrap/Modal";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom/dist";

const ActionCards = ({ key = 0, size, data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      key={key}
      style={{
        maxWidth: size === "big" ? "30%" : "48%",
      }}
    >
      <Link to="/detailed-news">
        <div
          className="card-wrapper"
          style={{
            height: size === "big" ? "200px" : "200px",
          }}
          // onClick={() => handleExpandClick()}
        >
          <div className="img-box">
            <img src={data?.img} alt="img" />
          </div>
          <div className="content-wrapper">
            <h6>{data?.headline}</h6>
          </div>
          <Modal
            show={expanded}
            fullscreen={true}
            onHide={() => {
              handleExpandClick();
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <Typography paragraph>{data?.headline}</Typography>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Typography paragraph>{data?.article}</Typography>
            </Modal.Body>
          </Modal>
        </div>
      </Link>
    </div>
  );
};

export const BigActionCards = ({ key = 0, size, data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      key={key}
      style={{
        maxWidth: size === "big" ? "30%" : "48%",
      }}
    >
      <Link to="/detailed-news">
        <div
          className="card-wrapper"
          style={{
            height: size === "big" ? "230px" : "230px",
            // maxWidth: size === "big" ? "100%" : "100%",
          }}
          // onClick={() => handleExpandClick()}
        >
          <div className="img-box">
            <img src={data?.img} alt="img" />
          </div>
          <div className="content-wrapper">
            <h6>{data?.headline}</h6>
          </div>
          <Modal
            show={expanded}
            fullscreen={true}
            onHide={() => {
              handleExpandClick();
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <Typography paragraph>{data?.headline}</Typography>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Typography paragraph>{data?.article}</Typography>
            </Modal.Body>
          </Modal>
        </div>
      </Link>
    </div>
  );
};

export const BannerCards = ({ key = 0, data }) => (
  <div
    key={key}
    style={{
      maxWidth: "100%",
    }}
  >
    <Link to="/detailed-news">
      <div
        className="card-wrapper"
        style={{
          height: "280px",
        }}
      >
        <div className="img-box">
          <img src={data?.img} alt="img" />
        </div>
        <div className="content-wrapper">
          <h6>{data?.headline}</h6>
        </div>
      </div>
    </Link>
  </div>
);
export default ActionCards;
