import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {

    return (
           <header>
            <img className="neflixImg" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <nav>
                    <ul>
                        <li><Link to="/" className="navbar-link">Home</Link></li>
                        <li><Link to="/about" className="navbar-link">About</Link></li>
                        <li><Link to="/contatti" className="navbar-link">Contatti</Link></li>
                    </ul>
                </nav>
        </header>
    )
}