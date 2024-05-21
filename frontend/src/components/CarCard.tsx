import { BiCar } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FcEngineering } from "react-icons/fc";
import { Link } from "react-router-dom";
import AddToCartButton from "./cart/AddToCartButton";

interface IProps {
  item: {
    id: number;
    brand: string;
    rating: number;
    carName: string;
    imgUrl: string;
    model: string;
    price: number;
    speed: string;
    gps: string;
    seatType: string;
    automatic: string;
    description: string;
  };
}
const CarCard = ({ item }: IProps) => {
  return (
    <article className="border rounded-md mb-5">
      <img
        src={item.imgUrl}
        alt="car"
        className="block mx-auto object-contain h-[300px]"
      />

      <div className=" mt-4">
        <h4 className="text-center text-2xl text-heavyBlueColor font-semibold">
          {item.carName}
        </h4>
        <h6 className="text-center text-xl text-heavyBlueColor font-semibold">
          ${item.price}.00
        </h6>

        <div className=" flex items-center justify-between px-4 py-2">
          <span className=" flex items-center gap-1">
            <BiCar className="size-5 text-orangeColor" /> {item.model}
          </span>
          <span className=" flex items-center gap-1">
            <CiSettings className="size-5 text-orangeColor" /> {item.automatic}
          </span>
          <span className=" flex items-center gap-1">
            <FcEngineering className="size-5 text-orangeColor" /> {item.speed}
          </span>
        </div>

        <div className="grid grid-cols-2 items-center  text-white">
          <AddToCartButton carId={String(item.id)} data={item}/>


          <button className="px-6 py-2  bg-orangeColor">
            <Link to={`/cars/${item.carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CarCard;
