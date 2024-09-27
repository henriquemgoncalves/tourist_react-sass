import '../styles/components/banner.sass'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Banner = () => {
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
    <section id='container-banner'>
        <div className="container">
            <h1>
                TRAVEL TO DE ANY CORNER OF THE WORLD
            </h1>
            <p>
                A travel journal, also called road journal, is a record made
                by a traveller, sometimes in diary form, of the traveler's experiences,
                written during the course of the journey and later edited for publication.
            </p>
            <button onClick={click}>
                CONTACT US
            </button>
        </div>
    </section>
  )
}

export default Banner;