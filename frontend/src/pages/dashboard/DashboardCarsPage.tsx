import CarCard from "@/components/CarCard";
import { ICarInterface } from "@/typings";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const DashboardCarsPage = () => {
  const { data, isLoading,isFetching } = useQuery({
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

  if (isLoading || !data || isFetching)
    return (
      <div className="container h-full grid place-content-center">
        <FaSpinner className="animate-spin"/>
      </div>
    );
  const cars = data.data.results || [];

  return (
    <section className="py-10">
      <button className="block mx-auto px-8 py-2  bg-orangeColor  text-xl text-white rounded-md ">
        <Link to={`/dashboard/cars/add`}>Add New Car</Link>
      </button>
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
        {cars?.map((item: ICarInterface) => (
          <CarCard item={item} key={item._id} />
        ))}
      </div>
    </section>
  );
};

export default DashboardCarsPage;
