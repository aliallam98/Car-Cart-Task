import axios from "axios";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { BiTrash } from "react-icons/bi";
import { useQueryClient } from "react-query";

interface IProps {
  carId: string;
  userId: string
}

const DeleteFromCartButton = ({ carId,userId }: IProps) => {
  const queryClient = useQueryClient();

  

  const deleteFromCartHandler = () => {
    axios
      .patch(
        `http://localhost:5000/api/cart/${carId}`,
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
        res.data.success && toast.success("car Deleted From Cart .");
        queryClient.invalidateQueries({
          queryKey: ["Cart", userId],
        });
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error);
      });
  };
  return (
    <Button
      className="space-x-2 h-auto p-2"
      size={"sm"}
      variant={"ghost"}
      onClick={deleteFromCartHandler}
    >
      <BiTrash size={16} />
    </Button>
  );
};

export default DeleteFromCartButton;
