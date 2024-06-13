/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { useQuery } from "react-query";

const DashboardBookingsPage = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["Cars"],
    queryFn: () =>
      axios.get("http://localhost:5000/api/booking", {
        withCredentials: true,
        headers: {
          authorization: JSON.parse(
            localStorage.getItem("Car-Showroom-jwt") as string
          ),
        },
      }),
    cacheTime: 1000 * 60 * 60 * 7,
    refetchOnMount: true,
  });

  if (isLoading || !data || isFetching)
    return (
      <div className="container h-full grid place-content-center">
        <FaSpinner className="animate-spin" />
      </div>
    );

  const bookings = data.data.results || [];

  

  return (
    <section className="py-10">
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
        {bookings.length ? (
          bookings.map((book: any) => (
            <div className="border rounded-md shadow-md p-4 space-y-4">
              <p className="text-xl font-semibold">
                Booking Owner : {book?.userId?.fullName}
              </p>
              <p>Items : {book.carsIds[0].cars.length}</p>
              <div>
                {book.carsIds &&
                  book?.carsIds[0]?.cars?.map((car: any) => (
                    <p className="mt-2">{car?.carId?.carName}</p>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <p>There is no bookings</p>
        )}
      </div>
    </section>
  );
};

export default DashboardBookingsPage;
