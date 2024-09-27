import '../styles/components/cardspopulardestination.sass'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const infos = [
    { img: "./src/img/pelosa_beach.jpg", name: "La Pelosa Beach"},
    { img: "./src/img/cala_granadella.jpg", name: "Cala Granadella"},
    { img: "./src/img/butterfly_valley_beach.jpg", name: "Butterfly Valley Beach"},
];

const CardsPopularDestination = () => {
    const click = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Warning, this is an experimental version",
            showConfirmButton: false,
            timer: 2000
          });
    }
  return (
    <div id="container-cards-info">
        {infos.map((info) => (
            <div className="cards-info" key={info.name}>
                <img src={info.img} alt={info.name}/>       
                <h3>{info.name}</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto accusantium 
                    amet tempore fuga dolorem.
                </p>
                <button onClick={click}>
                    READ MORE
                </button>
                    
            </div>           
        ))}
    </div>
  );
};

export default CardsPopularDestination;