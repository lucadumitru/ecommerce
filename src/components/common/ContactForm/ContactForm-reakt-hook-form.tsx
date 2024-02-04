"use client";

import type { SubmitHandler } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

import { Input, Button } from "@/components/ui";

export interface IFormProps {
  email: string;
  message: string;
  name: string;
  phone: string;
}

export const ContactForm = () => {
  const { register, reset, control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      message: "",
      name: "",
      phone: ""
    } as IFormProps
  });
  const { isSubmitting } = formState;
  const onSubmit: SubmitHandler<IFormProps> = async (data) => {
    const response = await fetch("/api/send", {
      body: JSON.stringify({
        ...data
      }),
      method: "POST"
    });
    if (response.ok) {
      toast.success(`${data.name}, your message has been sent`);
      reset();
    } else {
      toast.error("Something went wrong, please try again");
    }
  };
  const labelClass = "mb-1 text-[13px] font-semibold";
  const inputClass =
    "min-h-[50px] items-center rounded-[4px] border border-dark-gray outline-green focus-within:outline";
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex grid-cols-2 flex-col gap-4 laptop:grid">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="name">
            Your Name <span className="text-red">*</span>
          </label>
          <Controller
            control={control}
            defaultValue=""
            name="name"
            render={({ field: { value, onChange } }) => (
              <Input
                required
                className={inputClass}
                clearInput={() => reset({ name: "" })}
                id="name"
                placeholder="Your Name"
                tabIndex={-1}
                type="text"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="email">
            Your Email <span className="text-red">*</span>
          </label>
          <Controller
            control={control}
            defaultValue=""
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input
                required
                className={inputClass}
                clearInput={() => reset({ email: "" })}
                id="email"
                placeholder="Your Email"
                type="email"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="phone">
            Your Phone Number
          </label>
          <Controller
            control={control}
            defaultValue=""
            name="phone"
            render={({ field: { value, onChange } }) => (
              <Input
                className={inputClass}
                clearInput={() => reset({ phone: "" })}
                id="phone"
                name="phone"
                pattern="^[0-9]*$"
                placeholder="Your Phone Number"
                title="please enter a valid phone number"
                type="tel"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="message">
          What’s on your mind? <span className="text-red">*</span>
        </label>
        <textarea
          className="min-h-[50px] rounded-[4px] border border-dark-gray p-2 placeholder:text-[14px]"
          cols={30}
          id="message"
          placeholder="Jot us a note and we’ll get back to you as quickly as possible"
          rows={10}
          {...register("message", { required: true })}
        />
      </div>
      <div className="h-[50px] min-w-[150px] mobile:self-start">
        <Button isLoading={isSubmitting} loadingText="Sending..." type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
