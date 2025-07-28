import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button } from "react-bootstrap";
import FestivalGrid from "./FestivalGrid";
import upcomingFestivals from "../components/festivals";


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
  {
    id: 7,
    name: "Independence Day",
    date: "15 August 2025",
    image: process.env.PUBLIC_URL + "/independence_day.jpg",
    route: "/independence",
  },
];
const handleExplore = (festival) => {
    //  navigation or logic
  };

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
    
  >
    Explore {festival.name} Templates
  </Button>
</Carousel.Caption>

            </Carousel.Item>
          ))}
        </Carousel>
       
      </div>

      {/* Festival Cards Grid */}
      <div className="container">
      <FestivalGrid upcomingFestivals={upcomingFestivals} onExplore={handleExplore} />
    </div>
      

    </div>
  );
};

export default FestivalList;
