import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Image from "next/image";
import StepIndicator from "../components/StepIndicator";
import ProfileCard from "../components/ProfileCard";
import Client from "../components/Client";
import "../src/app/globals.css";
import logo from "../public/logo.png";

const Onboarding2 = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number format")
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      router.push("/onboarding3");
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex gap-8 w-full max-w-5xl">
        {/* Left Side Form */}
        <div className="bg-white shadow-lg rounded-lg p-10 w-[60%]">
          <div className="flex justify-start mb-6">
            <Image src={logo} alt="Logo" width={150} height={80} />
          </div>

          <StepIndicator previousStep={1} currentStep={2} />

          <h2 className="text-2xl font-bold mb-2">
            How can your audience connect with you?
          </h2>
          <p className="text-gray-600 mb-6">You can customize the details later.</p>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-2">Email</label>
              <input
                type="text"
                name="email"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="name@domain.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-2">Phone number</label>
              <input
                type="text"
                name="phone"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="(+XX)9999999999"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Continue
            </button>
          </form>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 w-[48%]">
          <div className="mt-2 flex items-center justify-center">
            <ProfileCard />
          </div>
          <div>
            <Client />
          </div>
          <div className="flex justify-center space-x-3 mt-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              LinkedIn
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              Website
            </button>
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <h4 className="text-sm font-semibold">Product Brochure</h4>
              <p className="text-xs text-gray-500">Download below</p>
            </div>
            <div className="p-2 bg-gray-100 rounded-lg">
              <h4 className="text-sm font-semibold">Tech Stack</h4>
              <p className="text-xs text-gray-500">Tech display for my customers</p>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <h4 className="text-sm font-semibold">Demo Video</h4>
              <p className="text-xs text-gray-500">Learn about Acme Inc.</p>
            </div>
            <div className="p-2 bg-gray-100 rounded-lg">
              <h4 className="text-sm font-semibold">Market Expertise</h4>
              <p className="text-xs text-gray-500">SaaS, Cloud Computing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding2;
