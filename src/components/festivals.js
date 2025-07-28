// src/components/festivals.js

const upcomingFestivals = [
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

export default upcomingFestivals;
