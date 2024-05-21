import { FcDocument } from "react-icons/fc";
import servicesData from "../../constants/service-data";

const ServicesList = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-10 ">
        {servicesData.map((item) => (
          <ServiceItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceItem = ({ item }: any) => (
  <div className="service__item text-center  shadow-md p-2 py-4 mt-4">
    <span className="mb-3 d-inline-block">
      <FcDocument className="size-14 mb-4 mx-auto" />
    </span>

    <h6 className="text-heavyBlueColor text-xl font-semibold">{item.title}</h6>
    <p className="section__description ">{item.desc}</p>
  </div>
);

export default ServicesList;
