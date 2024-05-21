// import { useAuthContext } from "@/contexts/AuthContextProvider";
// import { fetcher } from "@/lib/utils";
import CartItem from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import { ICar } from "@/typings";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
// import { useQuery, useQueryClient } from "react-query";

const CartPage = () => {
  const { authUser } = useAuthContext();
  const userId = authUser?.id;

  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setRefetch(false);
    const fetchData = async () => {
      axios
        .get("http://localhost:5000/api/cart", {
          withCredentials: true,
          headers: {
            authorization: JSON.parse(
              localStorage.getItem("Car-Showroom-jwt") as string
            ),
          },
        })
        .then((res) => {
          setCart(res.data.results);
        })
        .finally(() => setIsLoading(false));
    };

    fetchData();
  }, [refetch]);

  if (isLoading)
    return (
      <div className="container py-10 grid md:grid-cols-2 gap-10">
        <Skeleton className="h-20 rounded-md bg-black/5" />
        <Skeleton className="h-20 rounded-md bg-black/5" />
        <Skeleton className="h-20 rounded-md bg-black/5" />
        <Skeleton className="h-20 rounded-md bg-black/5" />
      </div>
    );

  const cars = cart?.cart?.cars || [];

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
        setCart([]);
      })
      .catch((error) => toast.error(error.response.message));
  };


  return (
    <section>
      {cars.length > 0 ? (
        <>
          <div className="container py-10 grid md:grid-cols-2 gap-10">
            {cars?.map((car: ICar) => (
              <CartItem data={car} userId={userId!} setRefetch={setRefetch} />
            ))}
          </div>
          <Button
            onClick={clearCartHandler}
            className="block mx-auto mb-10 border rounded-3xl  w-72 "
            variant={"ghost"}
          >
            Clear Cart
          </Button>
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
