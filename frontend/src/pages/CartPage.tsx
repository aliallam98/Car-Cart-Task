import CartItem from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import { ICarInterface } from "@/typings";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useQueryClient } from "react-query";


const CartPage = () => {
  const { authUser } = useAuthContext();
  const userId = authUser?.id;
  const queryClient = useQueryClient();


  // const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const [cart, setCart] = useState<any>([]);
  // const [refetch, setRefetch] = useState(false);

  const { data, isLoading ,isFetching} = useQuery({
    queryKey: ["Cart", userId],
    queryFn: () =>
      axios
        .get("http://localhost:5000/api/cart", {
          withCredentials: true,
          headers: {
            authorization: JSON.parse(
              localStorage.getItem("Car-Showroom-jwt") as string
            ),
          },
        })
        .then((res) => res.data.results),
  });

  // useEffect(() => {
  //   setIsLoading(true);
  //   setRefetch(false);
  //   const fetchData = async () => {
  //     axios
  //       .get("http://localhost:5000/api/cart", {
  //         withCredentials: true,
  //         headers: {
  //           authorization: JSON.parse(
  //             localStorage.getItem("Car-Showroom-jwt") as string
  //           ),
  //         },
  //       })
  //       .then((res) => {
  //         setCart(res.data.results);
  //       })
  //       .finally(() => setIsLoading(false));
  //   };

  //   fetchData();
  // }, [refetch]);

  if (!data || isLoading || isFetching)
    return (
      <div className="container py-10 grid md:grid-cols-2 gap-10">
        <Skeleton className="h-20 rounded-md bg-black/10" />
        <Skeleton className="h-20 rounded-md bg-black/10" />
        <Skeleton className="h-20 rounded-md bg-black/10" />
        <Skeleton className="h-20 rounded-md bg-black/10" />
      </div>
    );


  const cars = data?.cart?.cars || [];

  const clearCartHandler = async () => {
    await axios
      .put(
        "http://localhost:5000/api/cart/",
        {},
        {
          withCredentials: true,
          headers: {
            authorization: JSON.parse(
              localStorage.getItem("Car-Showroom-jwt") as string
            ),
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        queryClient.invalidateQueries({
          queryKey: ["Cart", userId],
        });
      })
      .catch((error) => toast.error(error.response.message));
  };

  const onBookingHandler = async () => {
    axios
      .post(
        "http://localhost:5000/api/booking/",
        { cars },
        {
          withCredentials: true,
          headers: {
            authorization: JSON.parse(
              localStorage.getItem("Car-Showroom-jwt") as string
            ),
          },
        }
      )
      .then(async (res) => {
        toast.success(res.data.message);
        await axios.put(
          "http://localhost:5000/api/cart/",
          {},
          {
            withCredentials: true,
            headers: {
              authorization: JSON.parse(
                localStorage.getItem("Car-Showroom-jwt") as string
              ),
            },
          }
        );
        queryClient.invalidateQueries({
          queryKey: ["Cart", userId],
        });
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <section>
      {cars.length > 0 ? (
        <>
          <div className="container py-10 grid md:grid-cols-2 gap-10">
            {cars?.map((car: ICarInterface) => (
              <CartItem
                data={car}
                userId={userId!}
                // setRefetch={setRefetch}
                key={car?._id}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-10 mb-10">
            <Button
              onClick={onBookingHandler}
              className=" border rounded-3xl w-72 "
              variant={"ghost"}
            >
              Booking
            </Button>
            <Button
              onClick={clearCartHandler}
              className=" border rounded-3xl w-72 "
              variant={"ghost"}
            >
              Clear Cart
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 mt-20 py-20">
          <p>Cart Is Empty Start shopping Now</p>
          <Button>
            <Link to={"/cars"}>Shop Now</Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default CartPage;
