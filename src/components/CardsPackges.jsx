import '../styles/components/cardspackges.sass';
import { MdLocationPin } from "react-icons/md";

const countries = [
  { img: "/img/brazil.jpg", local: "Brazil"},
  { img: "/img/chile.jpg", local: "Chile"},
  { img: "/img/denmark.jpg", local: "Denmark"},
  { img: "/img/deustchland.png", local: "Deustchland"},
  { img: "/img/italy.jpg", local: "Italy"},
  { img: "/img/newzealand.jpg", local: "New Zealand"},
  // { img: "./src/img/paris.jpg", local: "Paris"},
  // { img: "./src/img/scotland.jpg", local: "Scotland"},
];

const CardsPackges = () => {
  return (
    <div id="container-cards">
      {countries.map((country) => (
        <div className='container' key={country.local}>
          <div>
            <img src={country.img} alt={country.local}/>
          </div>
          <div className="info">
            <h4><MdLocationPin/> {country.local}</h4>
            <h3>Tour to {country.local}</h3>
            <p>Price: $1650</p>
          </div>
        </div>              
      ))}
    </div>
  )
}

export default CardsPackges;