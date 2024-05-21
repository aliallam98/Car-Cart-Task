import { useEffect } from "react";

import carData from "../constants/car-data";
import { useParams } from "react-router-dom";
import Helmet from "@/components/Helmet/Helmet";
import { StarFilledIcon } from "@radix-ui/react-icons";

const CarDetailsPage = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem?.carName}>
      <section className="py-10">
        <div className="container grid md:grid-cols-2">
          <img src={singleCarItem?.imgUrl} alt="car" className="w-full"  />

          <div>
            <div className="car__info">
              <h2 className="text-2xl font-semibold text-heavyBlueColor">
                {singleCarItem?.carName}
              </h2>

              <h6 className="text-xl font-semibold text-heavyBlueColor mt-4">
                ${singleCarItem?.price}.00 /
              </h6>

              <div className=" flex items-center gap-5 mb-4 mt-3">
                <span className=" flex items-center gap-2">
                  <span className="flex" style={{ color: "#f9a826" }}>
                    <StarFilledIcon color="#f9a826" className="size-4" />
                    <StarFilledIcon color="#f9a826" className="size-4" />
                    <StarFilledIcon color="#f9a826" className="size-4" />
                    <StarFilledIcon color="#f9a826" className="size-4" />
                  </span>
                  ({singleCarItem?.rating} ratings)
                </span>
              </div>

              <p className="text-neutral-400">
                {singleCarItem?.description}
              </p>

              <div
                className=" flex items-center mt-3"
                style={{ columnGap: "4rem" }}
              >
                <span className=" flex items-center gap-1 section__description">
                  <i
                    className="ri-roadster-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {singleCarItem?.model}
                </span>

                <span className=" flex items-center gap-1 section__description">
                  <i
                    className="ri-settings-2-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {singleCarItem?.automatic}
                </span>

                <span className=" flex items-center gap-1 section__description">
                  <i
                    className="ri-timer-flash-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {singleCarItem?.speed}
                </span>
              </div>

              <div
                className=" flex items-center mt-3"
                style={{ columnGap: "2.8rem" }}
              >
                <span className=" flex items-center gap-1 section__description">
                  <i
                    className="ri-map-pin-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {singleCarItem?.gps}
                </span>

                <span className=" flex items-center gap-1 section__description">
                  <i
                    className="ri-wheelchair-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {singleCarItem?.seatType}
                </span>

                <span className=" flex items-center gap-1 section__description">
                  <i
                    className="ri-building-2-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {singleCarItem?.brand}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default CarDetailsPage;
