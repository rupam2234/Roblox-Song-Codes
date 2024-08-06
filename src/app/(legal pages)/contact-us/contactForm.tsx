"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const ContactFormHandler = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "07745865-4c9e-43de-9d1d-66703052270d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="md:w-4/5">
      <form onSubmit={onSubmit}>
        <div className="space-y-4 text-[15px]">
          <div className="flex flex-col">
            <label className="text-gray-700">Full Name:</label>
            <input
              type="text"
              placeholder="Alex Carter"
              required
              className="field border p-2 rounded-md my-3"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Email Address:</label>
            <input
              type="email"
              placeholder="alex.carter@email.com"
              required
              className="field border p-2 rounded-md my-3"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Message:</label>
            <textarea
              name="message"
              id=""
              placeholder="Hi,&#10;&#10;I'm Alex, and I wanted to reach out regarding..."
              required
              className="border p-2 rounded-md my-3 h-56"
            ></textarea>
            <span
              style={{
                color:
                  result === "Form Submitted Successfully" ? "green" : "red",
              }}
            >
              {result}
            </span>
          </div>
          <Button
            variant={"default"}
            size={"sm"}
            className="bg-[#5F8C81] hover:bg-[#6d9c90]"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactFormHandler;
