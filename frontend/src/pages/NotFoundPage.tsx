import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <img src="/404.png" alt="notfound" width={600} height={600} />
      <div className="relative -top-20 flex flex-col gap-4 w-96 ">
        <Link to={"/"}>
          <Button className="w-full">Go Home</Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
