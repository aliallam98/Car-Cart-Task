/* eslint-disable @typescript-eslint/no-explicit-any */
import CarCard from "@/components/CarCard";
import axios from "axios";
import { useQuery } from "react-query";

const HotOffers = () => {
    
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


  if (isLoading || !data) return ;
  const cars = data.data.results || []
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex justify-center items-center flex-col gap-4 text-2xl mb-4 text-heavyBlueColor font-semibold">
          <h6 className="section__subtitle">Come with</h6>
          <h2 className="section__title">Hot Offers</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars?.slice(0, 6).map((item: any) => (
            <CarCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotOffers;
