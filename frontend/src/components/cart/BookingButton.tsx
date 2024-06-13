import axios from "axios";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { ICarInterface } from "@/typings";

const BookingButton = ({ cars }: { cars: ICarInterface[] }) => {
  const onClickHandler = async () => {
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
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  return (
    <Button
      className="border rounded-3xl w-72 bg-heavyBlueColor "
      onClick={onClickHandler}
    >
      Booking
    </Button>
  );
};

export default BookingButton;
