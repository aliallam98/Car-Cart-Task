import Helmet from "../components/Helmet/Helmet";

import driveImg from "/images/drive.jpg";

import CommonSection from "@/components/CommonSection";
import AboutSection from "@/components/sections/About";
import OurMembers from "@/components/sections/OurMembers";

const AboutPage = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section py-10">
        <div className="container grid md:grid-cols-2">
            <div>
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </div>

            <div className="p-4">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description max-w-xl">
                  At drive line safety is our top priority. We go above and
                  beyond to ensure that every vehicle in our inventory meets
                  rigorous safety standards, providing you with peace of mind on
                  the road. Our team of experienced technicians meticulously
                  inspects each vehicle, thoroughly checking for any potential
                  safety concerns and addressing them promptly.
                </p>

                <p className="section__description">
                  When you choose drive line you can trust that you're getting
                  more than just a reliable vehicle – you're getting a safe ride
                  solution that you can depend on. Thank you for trusting us
                  with your automotive needs.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+79227421412</h4>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section>
        <div>
          <div className="mb-5 text-center">
            <h6 className="section__subtitle">Experts</h6>
            <h2 className="section__title">Our Members</h2>
          </div>
          <OurMembers />
        </div>
      </section>
    </Helmet>
  );
};

export default AboutPage;
