import React from "react";
import Header from "./components/Header"; // Importa el componente Header.
import HotelBoxInfo from "./pages/index/HotelInfo";
import logo from "./images/logo/logo500.png"; // Asegúrate de importar la imagen correctamente.
import cipresImg from "./images/index/cipres.png";
import secoyaImg from "./images/index/secoya.png";
import fresnoImg from "./images/index/fresno.png";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="articles">
        <article className="index-description">
          <img src={logo} alt="Logo de Fresnos" />
          <p>
            En Hoteles Fresnos nos aseguramos que tengas la mejor experiencia durante tu hospedaje, 
            ofreciéndote servicios para tu disfrute como bar, alberca, spa, gimnasio, restaurante, entre otros.
          </p>
        </article>
        <article className="index-book">
          <HotelBoxInfo 
            title={"Ciprés"}
            description={"Hospedate en nuestros hoteles ideales para un viaje de negocios o una visita a la ciudad."}
            image={cipresImg}
          />
          <HotelBoxInfo 
            title={"Secoya"}
            description={"Diviertete en los más grandes Resort del país y pasa las mejores vacaciones de tu vida "}
            image={secoyaImg}
          />
          <HotelBoxInfo 
            title={"Fresno"}
            description={"Hospedate en nuestros hoteles de lujo y disfruta de nuestras instalaciones de alta gama."}
            image={fresnoImg}
          />
          
        </article>
      </div>
      {/* Aquí puedes agregar el resto de tu aplicación */}
    </div>
  );
}

export default App;

