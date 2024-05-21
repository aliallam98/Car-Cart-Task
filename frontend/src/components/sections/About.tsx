import aboutImg from "/images/cars-img/bmw-offer.png";
import { CiStar } from "react-icons/ci";

const AboutSection = ({ aboutClass }: { aboutClass?: string }) => {
  return (
    <section
      className="about__section py-10"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "280px" }
          : { marginTop: "0px" }
      }
    >
      <div className="container grid md:grid-cols-2">
          <div className="about__section-content">
            <h4 className="section__subtitle">About Us</h4>
            <h2 className="section__title">Welcome to drive line service</h2>
            <p className="section__description">
              your premier destination for buying quality pre-owned vehicles!
            </p>

            <div className="mt-6">
              <div className="about__section-item flex items-center justify-between">
                <p className="section__description flex items-center gap-2">
                  <CiStar className="size-6" color="#f9a826" /> our mission is
                  simple: to help you find the car of your dreams at a price you
                  can afford.
                </p>

                <p className="section__description flex items-center gap-2">
                  <CiStar className="size-6" color="#f9a826" /> knowledgeable
                  staff is here to answer any questions you may have.
                </p>
              </div>

              <div className="about__section-item flex items-center justify-between">
                <p className="section__description flex items-center gap-2">
                  <CiStar className="size-6" color="#f9a826" /> With years of
                  experience in the automotive industry.
                </p>

                <p className="section__description flex items-center gap-2">
                  <CiStar className="size-6" color="#f9a826" /> ensure that you
                  drive away satisfied with your purchase.
                </p>
              </div>
            </div>


          </div>

          <div className="about__img">
            <img src={aboutImg} alt="" className="w-full" />
          </div>
      </div>
    </section>
  );
};

export default AboutSection;
