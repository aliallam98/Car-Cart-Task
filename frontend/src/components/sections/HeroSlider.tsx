import Slider from "react-slick";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <div className="container text-white mx-10">
          <div className="slider__content ">
            <h1 className="text-light mb-4">Buy now and Get 10% Off</h1>

            <button className="btn reserve__btn mt-4 py-2 px-6 rounded-md">
              <Link to="/cars">Buy now</Link>
            </button>
          </div>
        </div>
      </div>


      <div className="slider__item slider__item-02 mt0">
        <div className="container text-white mx-10">
          <div className="slider__content ">
            <h1 className="text-light mb-4">Buy now and Get 10% Off</h1>

            <button className="btn reserve__btn mt-4 py-2 px-6 rounded-md">
              <Link to="/cars">Buy now</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <div className=" container text-white mx-10">
          <div className="slider__content ">
            <h1 className="text-light mb-4">Buy now and Get 10% Off</h1>

            <button className="btn reserve__btn mt-4 py-2 px-6 rounded-md">
              <Link to="/cars">Buy now</Link>
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HeroSlider;
