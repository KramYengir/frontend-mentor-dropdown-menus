import audiophileIMG from "../assets/images/client-audiophile.svg";
import databizIMG from "../assets/images/client-databiz.svg";
import makerIMG from "../assets/images/client-maker.svg";
import meetIMG from "../assets/images/client-meet.svg";

const Home = () => {
  return (
    <main>
      <div className="container homepage">
        <div className="information">
          <h1>
            Make <br /> remote work
          </h1>
          <p>
            {" "}
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="btn-full">Learn More</button>
          <div className="other-brand-logos">
            <img src={audiophileIMG} alt="other business logo" />
            <img src={databizIMG} alt="other business logo" />
            <img src={makerIMG} alt="other business logo" />
            <img src={meetIMG} alt="other business logo" />
          </div>
        </div>
        <div className="graphics"></div>
      </div>
    </main>
  );
};

export default Home;
