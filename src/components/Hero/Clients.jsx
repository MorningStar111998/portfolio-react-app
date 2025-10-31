import "./Clients.css";

const clientImagesModules = import.meta.glob(
  "./../../assets/clients-logos/*.{png,jpg}",
  { eager: true }
);

const clientImages = Object.keys(clientImagesModules).reduce((acc, path) => {
  const filename = path.match(/([^/]+)\.(png|jpg)$/i)[1];

  acc[filename] = clientImagesModules[path].default;

  return acc;
}, {});

const imageSrc = Object.values(clientImages);

console.log(imageSrc);



function Clients() {
    return (
      <div className="clients">
        {imageSrc.map((image, index) => (
          <img className="client-logo" key={index} src={image} alt="client logo" />
        ))}
      </div>
    );
}

export default Clients;
