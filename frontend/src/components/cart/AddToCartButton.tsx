/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
// import { toast } from "sonner";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import { toast } from "sonner";
import { useQueryClient } from "react-query";

interface IProps {
  carId: string;
  quantity?: number;
  className?: string;
  showIcon?: boolean;
  data:any
}

const AddToCartButton = ({ data,carId, quantity = 1 }: IProps) => {
  const useQueryVariable = useQueryClient();
  const { authUser } = useAuthContext();
  const userId = authUser?.id;

  const addToCartHandler = async () => {
    if (!authUser) return;

    await axios
      .post(
        "http://localhost:5000/api/cart",
        { carId, quantity,data },
        {
          withCredentials: true,
          headers:{
            authorization: `${authUser}` 
          }
        }
      )
      .then((res) => {
        if (res.data.success) {
          toast.success("Product added To Cart .");
          useQueryVariable.invalidateQueries({
            queryKey: ["UserCart", userId],
          });
        }
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  return (
    <button
      onClick={addToCartHandler}
      className=" px-6 py-2  bg-heavyBlueColor text-white uppercase border-r font-bold"
    >
      buy
    </button>
  );
};

export default AddToCartButton;
