"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { LoginSchema } from "../../schemas";
import CardWrapper from "./card-wrapper";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { setAuthUser } = useAuthContext();

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, setIsPending] = useState(false);
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
    setError("");
    setSuccess("");
    setIsPending(true);

    await axios
      .post(`http://localhost:5000/api/auth/login`, values)
      .then((res) => {
        localStorage.setItem(
          "Car-Showroom-jwt",
          JSON.stringify(res.data.results)
        );
        setAuthUser(res.data.results);
        res.data.success && navigate("/");
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setIsPending(false));
  }

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account"
      backButtonHref="/register"
      // showSocial
      type="Login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full bg-heavyBlueColor" disabled={isPending}>
            {isPending ? "Loading" : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
