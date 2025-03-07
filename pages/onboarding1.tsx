import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import StepIndicator from "../components/StepIndicator";
import ProfileCard from "../components/ProfileCard";
import Client from "../components/Client";
import "../src/app/globals.css";
import logo from "../public/logo.png";

const Onboarding = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      location: "",
      title: "",
      company: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex gap-8 w-full max-w-5xl">
        <div className="bg-white shadow-lg rounded-lg p-10 w-[60%]">
          <div className="flex justify-start mb-6">
            <Image src={logo} alt="Logo" width={150} height={80} />
          </div>

          <StepIndicator currentStep={1} />

          <h2 className="text-2xl font-bold mb-2">Bio hero details</h2>
          <p className="text-gray-600 mb-6">
            We’ll use this info to build your page.
          </p>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block font-medium mb-2">First name*</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="First name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.firstName}
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <label className="block font-medium mb-2">Last name*</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Last name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Place, City, Country"
                value={formik.values.location}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Title</label>
              <input
                type="text"
                name="title"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Marketing Lead"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Company</label>
              <input
                type="text"
                name="company"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Acme"
                value={formik.values.company}
                onChange={formik.handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-4xl hover:bg-blue-600 transition"
            >
              Continue
            </button>
          </form>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 w-[48%]">
          {" "}
          <div className="mt-2 flex items-center justify-center">
            {" "}
            <ProfileCard />
          </div>
          <div>
            <Client />
          </div>
          <div className="flex justify-center space-x-3 mt-2">
            {" "}
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              LinkedIn
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              Website
            </button>
          </div>
          <hr className="my-4" /> 
          <div className="grid grid-cols-2 gap-3">
            {" "}
            <div className="p-2 bg-gray-100 rounded-lg">
              {" "}
              <h4 className="text-sm font-semibold">Product Brochure</h4>
              <p className="text-xs text-gray-500">Download below</p>
            </div>
            <div className="p-2 bg-gray-100 rounded-lg">
              {" "}
              <h4 className="text-sm font-semibold">Tech Stack</h4>
              <p className="text-xs text-gray-500">
                Tech display for my customers
              </p>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {" "}
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

export default Onboarding;
