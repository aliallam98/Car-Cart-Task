/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
// import { toast } from "sonner";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import { toast } from "sonner";
import { useQueryClient } from "react-query";

interface IProps {
  carId: string;
}

const DeleteCarButton = ({ carId }: IProps) => {
  const useQueryVariable = useQueryClient();
  const { authUser } = useAuthContext();

  const deleteHandler = async () => {
    if (!authUser) return;

    await axios
      .delete(`http://localhost:5000/api/car/${carId}`, {
        withCredentials: true,
        headers: {
          authorization: `${authUser}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          toast.success("Car Deleted.");
          useQueryVariable.invalidateQueries({
            queryKey: ["Cars"],
          });
        }
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  return (
    <button
      onClick={deleteHandler}
      className=" px-6 py-2  bg-heavyBlueColor text-white  "
    >
      Delete
    </button>
  );
};

export default DeleteCarButton;
