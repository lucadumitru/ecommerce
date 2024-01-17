"use client";

import { useFormik } from "formik";

import { Input, Button } from "@/components/ui";

export const ContactForm = () => {
  const labelClass = "mb-1 text-[13px] font-semibold";
  const inputClass = "min-h-[50px] items-center rounded-[4px] border border-dark-gray";
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });
  console.log("render contact form");
  return (
    <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="name">
            Your Name <span className="text-red">*</span>
          </label>
          <Input
            required
            className={inputClass}
            clearInput={() => formik.setFieldValue("name", "")}
            id="name"
            placeholder="Your Name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="email">
            Your Email <span className="text-red">*</span>
          </label>
          <Input
            required
            className={inputClass}
            clearInput={() => formik.setFieldValue("email", "")}
            id="email"
            placeholder="Your Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="phone">
            Your Phone Number
          </label>
          <Input
            className={inputClass}
            clearInput={() => formik.setFieldValue("phone", "")}
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            type="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="message">
          Your Email <span className="text-red">*</span>
        </label>
        <textarea
          required
          className="min-h-[50px] rounded-[4px] border border-dark-gray p-2 placeholder:text-[14px]"
          cols={30}
          id="message"
          name="message"
          placeholder="Jot us a note and we’ll get back to you as quickly as possible"
          rows={10}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
      </div>
      <div className="h-[50px] min-w-[150px] self-start">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
