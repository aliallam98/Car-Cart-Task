import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import Helmet from "@/components/Helmet/Helmet";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { ICarInterface } from "@/typings";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const CarDetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const [catData, setCarData] = useState<ICarInterface>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCarById = async () => {
      await axios
        .get(`http://localhost:5000/api/car/${id}`)
        .then((res) => setCarData(res.data.results))
        .catch((error) => {
          console.log(error.response.data.message);
        })
        .finally(() => setIsLoading(false));
    };
    fetchCarById();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-[600px] grid place-content-center">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }

  if (!catData) {
    return navigate("/cars");
  }

  return (
    <Helmet title={catData?.carName}>
      <section className="py-10">
        <div className="container grid md:grid-cols-2">
          <img src={catData?.imgUrl} alt="car" className="w-full" />

          <div>
            <div className="car__info">
              <h2 className="text-2xl font-semibold text-heavyBlueColor">
                {catData?.carName}
              </h2>

              <h6 className="text-xl font-semibold text-heavyBlueColor mt-4">
                ${catData?.price}.00 /
              </h6>

              <div className=" flex items-center gap-5 mb-4 mt-3">
                <span className=" flex items-center gap-2">
                  <span className="flex" style={{ color: "#f9a826" }}>
                    <StarFilledIcon color="#f9a826" className="size-4" />
                    <StarFilledIcon color="#f9a826" className="size-4" />
                    <StarFilledIcon color="#f9a826" className="size-4" />
                    <StarFilledIcon color="#f9a826" className="size-4" />
                  </span>
                  ({catData?.rating} ratings)
                </span>
              </div>

              <p className="text-neutral-400">{catData?.description}</p>

              <div
                className=" flex items-center mt-3"
                style={{ columnGap: "4rem" }}
              >
                <span className=" flex items-center gap-1 section__description">
                  <i
                    className="ri-roadster-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {catData?.model}
                </span>

                <span className=" flex items-center gap-1 section__description">
                  <i
                    className="ri-settings-2-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {catData?.automatic}
                </span>

                <span className=" flex items-center gap-1 section__description">
                  <i
                    className="ri-timer-flash-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {catData?.speed}
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
                  {catData?.gps}
                </span>

                <span className=" flex items-center gap-1 section__description">
                  <i
                    className="ri-wheelchair-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {catData?.seatType}
                </span>

                <span className=" flex items-center gap-1 section__description">
                  <i
                    className="ri-building-2-line"
                    style={{ color: "#f9a826" }}
                  ></i>{" "}
                  {catData?.brand}
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
