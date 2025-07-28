import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button } from "react-bootstrap";
import { motion } from "framer-motion";

// Sample festival data with dates
const festivals = [
  {
    id: 1,
    name: "Diwali",
    date: "29 October 2025",
    image: process.env.PUBLIC_URL + "/diwali.jpg",
    route: "/diwali",
  },
  {
    id: 2,
    name: "Durga Puja",
    date: "20 October 2025",
    image: process.env.PUBLIC_URL + "/durgapuja.jpg",
    route: "/durgapuja",
  },
  {
    id: 3,
    name: "Holi",
    date: "13 March 2025",
    image: process.env.PUBLIC_URL + "/holi.jpg",
    route: "/holi",
  },
  {
    id: 4,
    name: "Raksha Bandhan",
    date: "18 August 2025",
    image: process.env.PUBLIC_URL + "/raksha_bandhan.jpg",
    route: "/rakshabandhan",
  },
  {
    id: 5,
    name: "Ganesh Puja",
    date: "5 September 2025",
    image: process.env.PUBLIC_URL + "/ganesh_puja.jpg",
    route: "/ganeshpuja",
  },
  {
    id: 6,
    name: "Krishna Janmashtami",
    date: "16 August 2025",
    image: process.env.PUBLIC_URL + "/janmaasthami.jpg",
    route: "/krishna",
  },
];

const FestivalList = ({ onExplore }) => {
  return (
    <div className="container py-5">
      {/* Top Slider */}
      <div className="mb-5">
        <h2 className="fw-bold text-center mb-4"> Upcoming Festivals in India</h2>
        <Carousel fade interval={3000}>
          {festivals.map((festival) => (
            <Carousel.Item key={festival.id}>
              <div
  style={{
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "1rem",
  }}
>
  <img
    className="d-block w-100"
    src={festival.image}
    alt={festival.name}
    style={{
      height: "100%",
      width: "100%",
      objectFit: "cover", // ensures full fill, adjust height and width together
    }}
  />
</div>

              <Carousel.Caption
  style={{
    backgroundColor: "rgba(255, 255, 255, 0.7)", // light background for visibility
    borderRadius: "12px",
    padding: "10px 20px",
    color: "black", // black text
  }}
>
  <h3 style={{ color: "black" }}>{festival.name}</h3>
  <p style={{ color: "black" }}>{festival.date}</p>
  <Button
    variant="dark"
    className="mt-2 px-4 py-2 fw-semibold"
    onClick={() => onExplore(festival)}
  >
    Explore {festival.name} Templates
  </Button>
</Carousel.Caption>

            </Carousel.Item>
          ))}
        </Carousel>
        {/* <div className="text-center mt-4">
          <Button variant="outline-primary" size="lg" className="rounded-pill">
            View All Festivals →
          </Button>
        </div> */}
      </div>

      {/* Festival Cards Grid */}
      <div className="text-center mb-5">
        {/* <h1 className="fw-bold display-5">Celebrate Indian Festivals</h1> */}
        {/* <p className="lead text-muted">
          Explore beautiful templates for your favorite festivals and create
          personalized messages with ease.
        </p> */}
      </div>

      <div className="row g-4">
        {festivals.map((festival, index) => (
          <motion.div
            className="col-md-4 d-flex"
            key={festival.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
          >
            <div className="card shadow-sm w-100 h-100 border-0 rounded-4 overflow-hidden">
              <div style={{ height: "230px", overflow: "hidden" }}>
                <motion.img
                  src={festival.image}
                  alt={festival.name}
                  className="card-img-top w-100 h-100"
                  style={{ objectFit: "cover" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title fw-semibold text-center mb-3">
                  {festival.name}
                </h5>
                <button
                  className="btn btn-outline-primary w-100 rounded-pill"
                  onClick={() => onExplore(festival)}
                >
                  Explore More →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FestivalList;
