import { Textarea } from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { carSchema } from "@/schemas";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import {  useParams , useNavigate} from "react-router-dom";
import { ICarInterface } from "@/typings";
import { useQueryClient } from "react-query";

const EditCarPage = () => {
  const { authUser } = useAuthContext();
  const [isPending, setIsPending] = useState<boolean>(false);
  const [carData, setCarData] = useState<ICarInterface>();
  const params = useParams();
  const carId = params.id;
  const navigate = useNavigate()

  const useQuery = useQueryClient();

  useEffect(() => {
    setIsPending(true);
    axios
      .get(`http://localhost:5000/api/car/${carId}`)
      .then((res) => setCarData(res.data.results))
      .finally(() => {
        setIsPending(false);
      });
  }, [carId]);

  const initValues = {
    carName: "",
    brand: "",
    description: "",
    imgUrl: "",
    price: "",
    rating: "",
    automatic: "",
    gps: "",
    model: "",
    seatType: "",
    speed: "",
  };

  const form = useForm<z.infer<typeof carSchema>>({
    resolver: zodResolver(carSchema),
    values: {
      ...initValues,
      ...carData,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof carSchema>) {
    setIsPending(true);

    axios
      .put(`http://localhost:5000/api/car/${carData?._id}`, values, {
        withCredentials: true,
        headers: {
          authorization: `${authUser}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        form.reset();
        useQuery.invalidateQueries({
          queryKey: ["Cars"],
        });
         return navigate("/dashboard/cars")
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => setIsPending(false));

    //   if (method === "Create") {

    //  }
    //  if (method === "Update") {
    //    setIsPending(true);
    //    const formData = new FormData();
    //    if (file) {
    //      form.setValue("coverImage", file);
    //      formData.append("coverImage", file as File);
    //    }
    //    formData.append("name", values.name);
    //    await axios
    //      .put(`/api/category/${data?._id}`, formData)
    //      .then(async (res) => {
    //        toast.success(res.data.message);
    //        await useQuery.invalidateQueries({
    //          queryKey: ["Category", data?._id],
    //        });
    //        form.reset();
    //        setFile(null);
    //      })
    //      .catch((error) => toast.error(error.response.data.message))
    //      .finally(() => setIsPending(false));
    //  }
  }

  return (
    <div className="border shadow-sm rounded-lg p-4 md:p-6 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mt-10 mx-auto"
        >
          <h1 className="text-center text-3xl font-semibold ">Edit Car Page</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="carName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Car Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>brand</FormLabel>
                  <FormControl>
                    <Input placeholder="brand" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>model</FormLabel>
                  <FormControl>
                    <Input placeholder="model" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="description"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="speed"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>speed</FormLabel>
                  <FormControl>
                    <Input placeholder="speed" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>price</FormLabel>
                  <FormControl>
                    <Input placeholder="price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>rating</FormLabel>
                  <FormControl>
                    <Input placeholder="rating" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="automatic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>automatic</FormLabel>
                  <FormControl>
                    <Input placeholder="automatic" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gps"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>gps</FormLabel>
                  <FormControl>
                    <Input placeholder="gps" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="seatType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>seatType</FormLabel>
                  <FormControl>
                    <Input placeholder="seatType" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="imgUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>imgUrl</FormLabel>
                <FormControl>
                  <Input placeholder="imgUrl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="block mx-auto w-[70%]"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Loading" : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditCarPage;
