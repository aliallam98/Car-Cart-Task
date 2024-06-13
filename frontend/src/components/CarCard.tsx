import { BiCar } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FcEngineering } from "react-icons/fc";
import { Link } from "react-router-dom";
import AddToCartButton from "./cart/AddToCartButton";
import DeleteCarButton from "./DeleteCarButton";
import { ICarInterface } from "@/typings";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import { useState } from "react";

interface IProps {
  item: ICarInterface;
}
const CarCard = ({ item }: IProps) => {
  const { isAdmin } = useAuthContext();
  const [isAdminState] = useState(false || isAdmin);
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
          ${item.price}
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

        {!isAdminState && (
          <div className="grid grid-cols-2 items-center  text-white">
            <AddToCartButton carId={String(item._id)} />
            <Link to={`/cars/${item._id}`} className="px-6 py-2  bg-orangeColor text-center uppercase">
              <button className="">Details</button>
            </Link>
          </div>
        )}
        {isAdminState && (
          <div className="grid grid-cols-2 items-center  text-white">
            <DeleteCarButton carId={item?._id} />
            <Link
              to={`/dashboard/cars/${item?._id}/edit`}
              className="px-6 py-2  bg-orangeColor text-center"
            >
              <button className="">Edit</button>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default CarCard;
