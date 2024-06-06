import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "../ui/separator";

import CartItem from "./CartItem";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";


import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import { fetcher } from "@/lib/utils";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";
import { ICartItem } from "@/typings";


const CartSheet = ({ children }: { children?: React.ReactNode }) => {
  const { authUser } = useAuthContext();
  const userId = authUser?.id;
  const useQueryVariable = useQueryClient();






  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, isLoading } = useQuery<any>({
    queryKey: ["Car-UserCart", userId],
    queryFn: () => fetcher("http://localhost:5000/api/cart/"),
    // refetchOnWindowFocus: false,
  });


  if (isLoading) return <FaSpinner className="animate-spin size-4" />;


  const cartItems = data?.cars?.products || [];


  const clearCartHandler = async () => {
    await axios
      .put(
        "http://localhost:5000/api/cart/",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        useQueryVariable.invalidateQueries({
          queryKey: ["UserCart", userId],
        });
      })
      .catch((error) => toast.error(error.response.message));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle className="text-start">Shop Cart</SheetTitle>
          <Separator />
        </SheetHeader>
        {cartItems?.length > 0 ? (
          <div className="relative p-1 h-[90%]">
            <div className="overflow-auto  h-[70%] mt-1  p-1">
              {cartItems?.map((cartItem:ICartItem) => (
                <CartItem
                  key={cartItem.carId}
                  data={cartItem}
                  userId={userId as string}
                  setRefetch={()=>false}
                  
                />
              ))}
            </div>
            <div className="w-full flex flex-col items-center gap-4 absolute bottom-4">
              <p className="w-full text-start">
                Total Price : {data?.totalPrice}
              </p>
              <Button className="w-72  rounded-3xl">
                <Link to={"/check-out"} className="w-full">
                  Check Out
                </Link>
              </Button>
              <Button
                onClick={clearCartHandler}
                className=" border rounded-3xl  w-72 "
                variant={"ghost"}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-4 mt-40">
            <p>Cart Is Empty Start shopping Now</p>
            <Button className="bg-heavyBlueColor">
              <Link to={"/cars"}>Shop Now</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
