import audiophileIMG from "../assets/images/client-audiophile.svg";
import databizIMG from "../assets/images/client-databiz.svg";
import makerIMG from "../assets/images/client-maker.svg";
import meetIMG from "../assets/images/client-meet.svg";
import heroIMG from "../assets/images/image-hero-desktop.png";

const Home = () => {
  return (
    <main>
      <div className="container hero">
        <div className="information">
          <div className="cta">
            <h1>Make remote work</h1>
            <p>
              {" "}
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="btn-full">Learn More</button>
          </div>
          <div className="other-brand-logos">
            <img src={audiophileIMG} alt="other business logo" />
            <img src={databizIMG} alt="other business logo" />
            <img src={makerIMG} alt="other business logo" />
            <img src={meetIMG} alt="other business logo" />
          </div>
        </div>
        <div className="hero__image">
          <img src={heroIMG} alt="hero image of blcak man with a laptop" />
        </div>
      </div>
    </main>
  );
};

export default Home;
