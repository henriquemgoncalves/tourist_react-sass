import { useState } from 'react';
import '../styles/components/navbar.sass'
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const links = [
    { name: "Home" },
    { name: "About" },
    { name: "Tour" },
    { name: "Pages" },
    { name: "Blog" },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
    <header id='container-navbar'>
        <div className="logo">
            <img src='./src/img/logo.png' alt="logo"/>
            <h3>TripQuest</h3>
        </div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
            <ul>
                {links.map((link) => (
                    <a href='#' onClick={click} key={link.name}>
                        {link.name}
                        <button>
                           <IoIosArrowDown/> 
                        </button>    
                    </a>                   
                ))}
            </ul>
        </nav>

        <div className="hamb" onClick={toggleMenu}>
            {isOpen ? <IoMdClose/> : <IoMdMenu/>}
        </div>
    </header>
  )
}

export default NavBar;