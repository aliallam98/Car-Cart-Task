
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ava01 from "/images/ava-1.jpg";
import ava02 from "/images/ava-2.jpg";
import ava03 from "/images/ava-3.jpg";
import ava04 from "/images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className=" testimonial py-4 px-3">
        <p className="section__description">
          I was amazed by the seamless experience I had while buying a car from
          this website. The interface was intuitive, and I found the perfect car
          for my needs within minutes. The whole process, from browsing to
          checkout, was incredibly smooth. I highly recommend this platform to
          anyone looking to buy a car online Each step was clearly laid out, and
          I never felt overwhelmed or confused with my new car.
        </p>

        <div className="mt-3 flex items-center gap-4">
          <img src={ava01} alt="" className="w-28 rounded-xl" />

          <div>
            <h6 className="mb-0 mt-3">Jhon</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I was initially skeptical about buying a car online, but this website
          exceeded all my expectations. The range of cars available was
          impressive, and the filtering options made it easy to narrow down my
          choices. What truly stood out was the transparency in pricing and the
          detailed vehicle history provided for each listing. I felt confident
          in my purchase and couldn't be happier with my new car.
        </p>

        <div className="mt-3 flex items-center gap-4">
          <img src={ava02} alt="" className="w-28 rounded-xl" />

          <div>
            <h6 className="mb-0 mt-3">Sara</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I had been searching for the right car for weeks, but nothing seemed
          to fit my criteria until I stumbled upon this website. Not only did I
          find the exact make and model I was looking for, but the detailed
          listings and comprehensive information made the decision-making
          process a breeze. The support team was also very responsive and helped
          me with any queries I had along the way. A fantastic experience
          overall
        </p>

        <div className="mt-3 flex items-center gap-4">
          <img src={ava03} alt="" className="w-28 rounded-xl" />

          <div>
            <h6 className="mb-0 mt-3">Alex</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          As a busy professional, I appreciated the convenience this website
          offered in finding and purchasing a car. The user-friendly interface
          allowed me to browse listings during my downtime, and I appreciated
          the ability to save favorites for later consideration. The checkout
          process was straightforward, and I received regular updates on the
          status of my purchase. Overall, a hassle-free experience that I would
          highly recommend to others.
        </p>

        <div className="mt-3 flex items-center gap-4">
          <img src={ava04} alt="" className="w-28 rounded-xl" />

          <div>
            <h6 className="mb-0 mt-3">Maria</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
