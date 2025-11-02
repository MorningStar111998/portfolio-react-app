import "./Hero.css";
// import Clients from "./Clients";
// import Carousel from "./Carousel";

// const clientImagesModules = import.meta.glob(
//   "./../../assets/clients-logos/*.{png,jpg,webp}",
//   { eager: true }
// );

// const clientImages = Object.keys(clientImagesModules).reduce((acc, path) => {
//   const filename = path.match(/([^/]+)\.(png|jpg,webp)$/i)[1];

//   acc[filename] = clientImagesModules[path].default;

//   return acc;
// }, {});

// const imageSrc = Object.values(clientImages);


function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="hero-container">
        <div className="floating-globe"></div>
        <h1>Regis Tougouri</h1>
        <h2>Full Stack Developer</h2>
        <div className="hero-cta">
          <a href="#contact" className="cta-btn">Contact Me</a>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Hero;
