import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import DeleteFromCartButton from "./DeleteFromCartButton";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import { useQueryClient } from "react-query";

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  userId: string;
}
const CartItem = ({ data }: IProps) => {
  const [quantity, setQuantity] = useState<number>(+data.quantity);
  const { authUser } = useAuthContext();
  const userId = authUser?.id;
  const queryClient = useQueryClient()
  const carId = data?.carId?._id;


  useEffect(() => {
    if (quantity !== data.quantity) {
      axios
        .post(
          "http://localhost:5000/api/cart",
          { carId, quantity },
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
          res.data.success && toast.success("Product Updated .");
          queryClient.invalidateQueries({
            queryKey: ["Cart", userId],
          });
        })
        .catch((error) => toast.error(error.response.data.message));
    }
  }, [quantity]);

  if (!data) {
    return <p>loading</p>;
  }


  const amountHandler = async (type: string) => {
    // type == "+" ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
    setQuantity((prevValue) => {
      const newQuantity = type === "+" ? prevValue + 1 : prevValue - 1;
      return Math.max(Math.min(newQuantity, 100), 1);
    });
  };


  // console.log(data?.carId?._id) Done 
  
  return (
    <div className="flex items-center justify-between gap-2 border p-2 mt-2 rounded-2xl">
      <img
        src={data?.carId?.imgUrl}
        alt=""
        width={200}
        height={200}
        className="object-contain rounded-md"
      />
      <div>
        <p>{data?.carId?.carName}</p>
      </div>

      <div className="flex items-center">
        <Button
          type="button"
          className="h-fit p-2 text-xl font-bold"
          variant={"ghost"}
          onClick={() => amountHandler("-")}
        >
          -
        </Button>
        <p>{quantity}</p>

        <Button
          type="button"
          className="h-fit p-2 text-xl font-bold"
          variant={"ghost"}
          onClick={() => amountHandler("+")}
        >
          +
        </Button>
      </div>

      <DeleteFromCartButton carId={data?.carId?._id} userId={userId!}/>

      <p className="text-xl font-semibold text-nowrap">
        $ {+data?.carId?.price * +data?.quantity}
      </p>
    </div>
  );
};

export default CartItem;
