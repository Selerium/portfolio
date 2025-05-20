"use client";

import { FormEvent } from "react";
import { primary, secondary } from "../styles/fonts";
import { supabase } from "../stores/supabase";
import { toasterStore } from "../stores/toasterStore";
import Toaster from "../components/toaster";

export default function Connect() {
  const setTitle = toasterStore((state: any) => state.setTitle);
  const setMessage = toasterStore((state: any) => state.setMessage);
  const setShowToaster = toasterStore((state: any) => state.setShowToaster);

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formInfo = new FormData(event.currentTarget);

    const { data, error } = await supabase.from("formResponses").insert({
      first_name: formInfo.get("firstName"),
      last_name: formInfo.get("lastName"),
      email: formInfo.get("email"),
      whatsapp: formInfo.get("whatsapp"),
      enquiry_type: formInfo.get("enquiryType"),
      description: formInfo.get("description"),
    });

    if (error) {
      setTitle("Invalid Form Fields");
      setMessage("Please check through your answers and resubmit.");
      setShowToaster(true);
      setTimeout(() => {
        setShowToaster(false);
      }, 5000);
    }
  }

  return (
    <div
      id="connect"
      className={`h-dvh py-4 box-border w-full flex justify-center items-center relative z-0`}
    >
      <div className="w-1/3 min-w-72 flex flex-col items-center gap-4">
        <h1
          className={`${primary.className} lowercase tracking-tight font-semibold text-5xl`}
        >
          curious? get in touch
        </h1>
        <p
          className={`${secondary.className} tracking-tight text-md font-light`}
        >
          (unless you're a cat - heard that's fatal)
        </p>
        <form
          onSubmit={submitForm}
          className="flex flex-col gap-4 w-full min-w-72 p-4 h-4/5 overflow-y-auto"
        >
          <div className="flex flex-wrap gap-4 w-full justify-center">
            <div className="grow w-1/3 flex flex-col gap-2">
              <label
                className={`${secondary.className} font-light text-md tracking-tight`}
              >
                first name
              </label>
              <input
                name="firstName"
                className={`${secondary.className} font-light text-md tracking-tight lowercase bg-white rounded-lg p-2 text-black`}
                type="text"
                placeholder="first name"
              ></input>
            </div>
            <div className="grow w-1/3 flex flex-col gap-2">
              <label
                className={`${secondary.className} font-light text-md tracking-tight`}
              >
                last name
              </label>
              <input
                name="lastName"
                className={`${secondary.className} font-light text-md tracking-tight lowercase bg-white rounded-lg p-2 text-black`}
                type="text"
                placeholder="last name"
              ></input>
            </div>
            <div className="grow w-1/3 flex flex-col gap-2">
              <label
                className={`${secondary.className} font-light text-md tracking-tight`}
              >
                contact email
              </label>
              <input
                name="email"
                className={`${secondary.className} font-light text-md tracking-tight lowercase bg-white rounded-lg p-2 text-black`}
                type="email"
                placeholder="xxxx@example.com"
              ></input>
            </div>
            <div className="grow w-1/3 flex flex-col gap-2">
              <label
                className={`${secondary.className} font-light text-md tracking-tight`}
              >
                whatsapp number
              </label>
              <input
                name="whatsapp"
                className={`${secondary.className} font-light text-md tracking-tight lowercase bg-white rounded-lg p-2 text-black`}
                type="tel"
                placeholder="+xxx xx xxx xxxx"
              ></input>
            </div>
            <div className="grow w-full flex flex-col gap-2">
              <label
                className={`${secondary.className} font-light text-md tracking-tight`}
              >
                why are you reaching out?
              </label>
              <select
                name="enquiryType"
                className={`${secondary.className} font-light text-md tracking-tight lowercase bg-white rounded-lg p-2 text-black`}
              >
                <option hidden defaultChecked>
                  choose an option
                </option>
                <option className="p-2 bg-white text-black" value={0}>
                  employment offer
                </option>
                <option className="p-2 bg-white text-black" value={1}>
                  get a quote for dev job
                </option>
                <option className="p-2 bg-white text-black" value={2}>
                  just wanna say hi :)
                </option>
              </select>
            </div>
            <div className="grow w-full min-w-72 flex flex-col gap-2">
              <label
                className={`${secondary.className} font-light text-md tracking-tight`}
              >
                leave your thoughts
              </label>
              <textarea
                name="description"
                rows={5}
                className={`${secondary.className} resize-none font-light text-md tracking-tight lowercase bg-white rounded-lg p-2 text-black`}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`uppercase ${primary.className} cursor-pointer tracking-widest font-semibold pl-6 m-4 pr-4 py-2 rounded-lg bg-primary border border-white`}
            >
              submit
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
