/* eslint-disable @typescript-eslint/no-explicit-any */
import Helmet from "../components/Helmet/Helmet";

import HeroSlider from "@/components/sections/HeroSlider";
import AboutSection from "@/components/sections/About";
import ServicesList from "@/components/sections/ServicesList";
import Testimonial from "@/components/sections/Testimonial";
import HotOffers from "./HotOffers";

const HomePage = () => {
  return (
    <>
      <Helmet title="Home">
        {/* ============= hero section =========== */}
        <section className="p-0 hero__slider-section">
          <HeroSlider />
        </section>
        {/* =========== about section ================ */}
        <AboutSection />
        {/* ========== services section ============ */}
        <section className="py-10">
          <div className="container">
            <div className="flex justify-center items-center flex-col gap-4 text-2xl mb-4 text-heavyBlueColor font-semibold">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </div>

            <ServicesList />
          </div>
        </section>
        {/* =========== car offer section ============= */}
        <HotOffers />

        {/* =========== testimonial section =========== */}
        <section className="py-10">
          <div className="container">
            <div className="flex justify-center items-center flex-col gap-4 text-2xl mb-4 text-heavyBlueColor font-semibold">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </div>

            <Testimonial />
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default HomePage;
