import Logo from "../Logo";
import { Input } from "../ui/input";
import { LuSend } from "react-icons/lu";


const Footer = () => {
  return (
    <footer className="bg-heavyBlueColor text-white py-10">
      <div className="container">
        <div className=" grid md:grid-cols-4  justify-between gap-6">
          <div className="space-y-6">
            <Logo />
            <p className="text-[#b6bad5]">
              Driveline Your Gateway to Automotive Excellence - Explore the road
              ahead with confidence through Driveline. From sleek sedans to
              rugged SUVs, our curated collection offers the perfect blend of
              performance, style, and reliability. Drive your dreams with
              Driveline - Where Every Mile Counts.
            </p>
          </div>

          <div className="flex flex-col gap-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-[#b6bad5]">
              <p>About</p>
              <p>Privacy Policy</p>
              <p>Car Listing</p>
              <p>Contact</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <h3 className="text-xl font-bold">Head Office</h3>
            <div className="flex flex-col gap-2 text-[#b6bad5]">
              <p>Marsa Plaza North-Dubai Festival City</p>
              <p>Phone: +79227421412</p>
              <p>Phone: +201222181840</p>
              <p>Email: kerolosashraf755@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <h3 className="text-xl font-bold text-[#b6bad5]">Newsletter</h3>
            <div className="flex flex-col gap-2">
              <p className="text-[#b6bad5]">Subscribe our newsletter</p>
              <div className="relative">
                <Input placeholder="Email" className="rounded-3xl p-3 px-4" />
                <LuSend className="absolute right-4 top-1/2 -translate-y-1/2"/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 max-md:text-[12px] border-t py-2">
          <p>&copy; Copyright 2024</p>
          <p className="capitalize">Privacy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
