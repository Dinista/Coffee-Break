"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Mail, Key } from "lucide-react";

import { useNotification } from "@/context/notificationcontext";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    resetField,
  } = useForm<Inputs>({ mode: "onChange" });
  const { showNotification } = useNotification();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await signIn("credentials", { ...data, redirect: false });

    if (result?.error) {
      showNotification("Invalid Credentials. Try Again!", "error");
      resetField("password");
    }
    if (!result?.error) {
      showNotification("Welcome back!", "success");
      redirect(`/dashboard`);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex items-center justify-center w-96 h-fit bg-slate-100 rounded-3xl flex-col p-10 gap-4">
        <form
          className="flex flex-col gap-4 w-full "
          onSubmit={handleSubmit(onSubmit)}
        >
          <section className="">
            <p className="text-3xl text-slate-900 font-extrabold font-pacifico">
              Welcome Back
            </p>
            <p className="text-base text-gray-500">
              Please Enter Your Credentials
            </p>
          </section>
          <div className="w-full flex justify-between items-center flex-col">
            <div className="w-full flex justify-between items-center gap-2">
              <label className="flex gap-2 items-center">
                <Mail />
              </label>
              <input
                className={`${
                  errors.email ? "border border-red-500 text-red-500" : "border"
                } rounded-sm h-8 p-2 w-full`}
                placeholder="Email"
                aria-label="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 font-medium text-sm self-start ml-6">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* Password Field */}
          <div className="w-full flex justify-between items-center flex-col">
            <div className="w-full flex justify-between items-center gap-2">
              <label className="flex gap-2 items-center">
                <Key aria-label="password" />
              </label>
              <input
                className={`${
                  errors.password
                    ? "border border-red-500 text-red-500"
                    : "border"
                } rounded-sm h-8 p-2 w-full`}
                placeholder="Password"
                aria-label="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
            </div>
            <a href={"/"} className="text-xs self-end text-slate-500">
              forgot password?
            </a>
            {errors.password && (
              <span className="text-red-500 font-medium text-sm self-start ml-6">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <button
              disabled={isSubmitting}
              type="submit"
              className={`bg-slate-900 px-6 py-2 rounded-md font-semibold text-white ${
                isSubmitting && "opacity-60 cursor-not-allowed"
              }`}
            >
              Sign In
            </button>
            <div className="text-xs w-full flex items-center gap-2 text-slate-500">
              <span className="block w-1/2 h-[2px] bg-slate-300" />
              OR
              <span className="block w-1/2 h-[2px] bg-slate-300" />
            </div>
            <button
              disabled={isSubmitting}
              type="button"
              className={`flex gap-2 items-center justify-center bg-white px-6 py-2 rounded-md font-semibold text-slate-900 ${
                isSubmitting && "opacity-60 cursor-not-allowed"
              }`}
            >
              <p className="w-fit">Sign In with google</p>
              <div className="h-5 w-5">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  x="http://www.w3.org/1999/xlink"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
            </button>
          </div>
        </form>
        <a href="/signup" className="text-sm font-semibold text-slate-900">
          Create an account
        </a>
      </div>
      <span className="text-center text-xs text-slate-950">
        @2025 - Bring It back
      </span>
    </div>
  );
};
