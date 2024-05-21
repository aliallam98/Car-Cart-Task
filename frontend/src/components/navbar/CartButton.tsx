import CartSheet from "../cart/CartSheet";
import { Button } from "../ui/button";
import { BsBag } from "react-icons/bs";

const CartButton = () => {


  return (
    <CartSheet>
      <Button
        className="h-fit p-1 md:p-2"
        variant={"ghost"}
      >
        <BsBag />
      </Button>
    </CartSheet>
  );
};

export default CartButton;
