import axios from "axios";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ClearCartButton = () => {
  const navigate = useNavigate();
  const onClickHandler = async () => {
    axios
      .put("/api/car/clear")
      .then((res) => {
        toast.success(res.data.message);
        return navigate("/");
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  return (
    <Button className="" onClick={onClickHandler}>
      <BiTrash />
    </Button>
  );
};

export default ClearCartButton;
