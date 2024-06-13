/* eslint-disable @typescript-eslint/no-explicit-any */
import CarCard from "@/components/CarCard";
import CommonSection from "@/components/CommonSection";
import Helmet from "@/components/Helmet/Helmet";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { ICarInterface } from "@/typings";
import { FaSpinner } from "react-icons/fa";

const CarsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["Cars"],
    queryFn: () =>
      axios.get("http://localhost:5000/api/car", {
        withCredentials: true,
        headers: {
          authorization: JSON.parse(
            localStorage.getItem("Car-Showroom-jwt") as string
          ),
        },
      }),
  });

  if (isLoading || !data) {
    return (
      <div className="min-h-[600px] grid place-content-center">
        <FaSpinner className="animate-spin" />
      </div>
    );
  }
  const cars = data.data.results || [];

  // Filter cars based on search query
  // const filteredCars = carData.filter((car) =>
  //   car.carName.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // console.log(filteredCars)

  const handleSearchInputChange = (e: any) => {
    // console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  // Filter and sort cars based on search query and sort option
  const filteredAndSortedCars = cars
    .filter((car: ICarInterface) =>
      car.carName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice() // Create a copy to prevent mutating the original array
    .sort((a: any, b: any) => {
      if (sortOption === "low") {
        return a.price - b.price;
      } else if (sortOption === "high") {
        return b.price - a.price;
      }
      return 0;
    });

  // Event handler for sorting option change
  const handleSortChange = (e: any) => {
    setSortOption(e.target.value);
    // console.log(sortOption)
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section className="py-10">
        <div className="container">
          <div className="grid md:grid-cols-2 ">
            <div className=" flex items-center gap-3 mb-5 p-4 ">
              <span className=" flex items-center gap-2  ">
                <i className="ri-sort-asc"></i> Sort By
              </span>

              <select
                value={sortOption}
                onChange={handleSortChange}
                className="border p-2 w-64"
              >
                <option value="">Select</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
            <div className="flex items-center gap-3 mb-5 ">
              <div className="search__box ml-auto">
                <input
                  className="border p-2 w-96"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />

                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAndSortedCars?.map((item: ICarInterface) => (
              <CarCard item={item} key={item._id} />
            ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default CarsPage;
