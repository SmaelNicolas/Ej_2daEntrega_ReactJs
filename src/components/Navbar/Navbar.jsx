import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="container--navbar">
			{/* LOGO */}
			<Link to="/" className="navbar--logo">
				🪐
			</Link>

			{/* Secciones de la navbar */}
			<ul className="navbar--ul">
				<li className="navbar--ul--li">
					{/* UTILIZAMOS Link o NavLink DE REACT ROUTER DOM    */}
					{/* EN to="" DEBEMOS PONER LA URL QUE CONFIGURAMOS EN APP  */}
					{/* EN ESTE CASO EL VALOR DINAMICO 🚩 :idCategory 🚩 TOMA EL VALOR keyboard */}
					{/* ESTE VALOR FIJO QUE TOMA EL DINAMICO DEBE COINCIDIR CON LAS CATEGORIAS QUE TENEMOS EN NUESTROS PRODUCTOS */}
					<Link to="/category/keyboard" className="navbar--ul--li--a">
						Keyboards
					</Link>
				</li>
				<li className="navbar--ul--li">
					{/* EN ESTE CASO EL VALOR DINAMICO 🚩 :idCategory 🚩 TOMA EL VALOR mouse */}
					{/* ESTE VALOR FIJO QUE TOMA EL DINAMICO DEBE COINCIDIR CON LAS CATEGORIAS QUE TENEMOS EN NUESTROS PRODUCTOS */}
					<Link to="/category/mouse" className="navbar--ul--li--a">
						Mouses
					</Link>
				</li>
				<li className="navbar--ul--li">
					{/* EN ESTE CASO EL VALOR DINAMICO 🚩 :idCategory 🚩 TOMA EL VALOR pad */}
					{/* ESTE VALOR FIJO QUE TOMA EL DINAMICO DEBE COINCIDIR CON LAS CATEGORIAS QUE TENEMOS EN NUESTROS PRODUCTOS */}
					<Link to="/category/pad" className="navbar--ul--li--a">
						Pads
					</Link>
				</li>
			</ul>

			{/* ICON CART + Cantidad */}
			<CartWidget />
		</nav>
	);
};
