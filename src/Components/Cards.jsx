import FoodTruck from './FoodTruck';
import birria from '../assets/birria.png';
import mystik from '../assets/mystik.png';
import halal from '../assets/halal.png';
import bajeko from '../assets/bajeko.png';
import texas from '../assets/texas.png';
import gyro from '../assets/gyro.png';
import kyushu from '../assets/kyushu.png';
import waffle from '../assets/waffle.png';
import burger from '../assets/burger.png';
import vietnam from '../assets/vietnam.png';

const foodTrucks = [
  { name: "Birria-Landia", cuisine: "Mexican", image: birria, menuLink: "#" },
  { name: "Mystik Masala", cuisine: "Indian", image: mystik, menuLink: "#" },
  { name: "The Halal Guys", cuisine: "Middle Eastern", image: halal, menuLink: "#" },
  { name: "Bajeko Sekuwa", cuisine: "Nepalese", image: bajeko, menuLink: "#" },
  { name: "Texas Roadhouse", cuisine: "American", image: texas, menuLink: "#" },
  { name: "Gyro Stop", cuisine: "Greek", image: gyro, menuLink: "#" },
  { name: "Kyushu Ramen", cuisine: "Japanese", image: kyushu, menuLink: "#" },
  { name: "Waffle Wagon", cuisine: "Belgian", image: waffle, menuLink: "#" },
 { name: "Burger Bus", cuisine: "American", image: burger, menuLink: "#" },
  { name: "Bánh Mì Box", cuisine: "Vietnamese", image: vietnam, menuLink: "#" }
];

const Cards = () => {
 
    return (

    <div className="card-container">
      {foodTrucks.map((truck, index) => (
        <FoodTruck
          key={index}
          name={truck.name}
          cuisine={truck.cuisine}
          image={truck.image}
          menuLink={truck.menuLink}
        />
      ))}
    </div>

    );
}

export default Cards;