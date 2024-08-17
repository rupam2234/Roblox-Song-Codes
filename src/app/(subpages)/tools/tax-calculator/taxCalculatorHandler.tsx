"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaQuestion } from "react-icons/fa";
import { useState } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { RatingSystem } from "@/components/custom-components/ratingSystem";

const formSchema = z.object({
  beforeTax: z.number().min(0, {
    message: "Add your Robux value",
  }),
  afterTax: z.number().min(0, {
    message: "How much you want to receive after tax?",
  }),
});

const TaxCalculatorHandler = () => {
  const taxRate = 0.3; // 30% tax
  const [beforeTax, setBeforeTax] = useState("");
  const [afterTax, setAfterTax] = useState("");

  // Function to format number to 4 decimal places
  const formatNumber = (value: string) => {
    const num = parseFloat(value);
    return isNaN(num) ? "" : num.toFixed(4).replace(/\.?0+$/, "");
  };

  // Handle change for beforeTax input
  const handleBeforeTaxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    // Handle empty string
    if (value === "") {
      setBeforeTax(value);
      setAfterTax("");
      return;
    }

    // Convert the input value to a number
    const newValue = parseFloat(value);

    // Format the beforeTax value
    const formattedBeforeTax = isNaN(newValue) ? "" : formatNumber(value);
    setBeforeTax(formattedBeforeTax);

    // Calculate afterTax based on formatted beforeTax
    const calculatedAfterTax = isNaN(newValue)
      ? ""
      : formatNumber((newValue * (1 - taxRate)).toString());
    setAfterTax(calculatedAfterTax);
  };

  // Handle change for afterTax input
  const handleAfterTaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Handle empty string
    if (value === "") {
      setAfterTax(value);
      setBeforeTax("");
      return;
    }

    // Convert the input value to a number
    const newValue = parseFloat(value);

    // Format the afterTax value
    const formattedAfterTax = isNaN(newValue) ? "" : formatNumber(value);
    setAfterTax(formattedAfterTax);

    // Calculate beforeTax based on formatted afterTax
    const calculatedBeforeTax = isNaN(newValue)
      ? ""
      : formatNumber((newValue / (1 - taxRate)).toString());
    setBeforeTax(calculatedBeforeTax);
  };

  // Calculate the difference between beforeTax and afterTax
  const calculateDifference = () => {
    const beforeTaxNumber = parseFloat(beforeTax) || 0;
    const afterTaxNumber = parseFloat(afterTax) || 0;
    const difference = beforeTaxNumber - afterTaxNumber;

    // Return "30%" if the difference is 0, otherwise return formatted difference
    return difference === 0 ? "30%" : formatNumber(difference.toString());
  };

  // Determine if labels should be red
  const isBeforeTaxEmpty = beforeTax === "";
  const isAfterTaxEmpty = afterTax === "";

  // Initialize useForm with Zod schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      beforeTax: 0,
      afterTax: 0,
    },
  });

  return (
    <div className="bg-gray-800 w-full rounded-sm">
      <div className="bg-[#5F8C81] rounded-t-sm text-center px-6 py-6 flex justify-center items-center">
        <Image
          src="/media/Robux.png"
          alt="Robux Icon"
          width={35}
          height={35}
          className="mr-2"
        />
        <h2 className="text-[20px] md:text-[30px] text-white font-extrabold">
          Roblox Tax Calculator
        </h2>
      </div>
      <div className="py-6 md:px-24 px-6 text-white">
        <Form {...form}>
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="p-3 space-y-5 md:space-y-1"
          >
            <div className="flex w-full md:justify-center md:items-center">
              <FormField
                control={form.control}
                name="beforeTax"
                render={() => (
                  <FormItem className="grid grid-cols-12 w-full justify-center items-center md:gap-2">
                    <FormLabel
                      className={`col-span-12 md:col-span-3 mt-[6px] ${
                        isBeforeTaxEmpty ? "text-red-400" : ""
                      }`}
                    >
                      Before Tax (R$):
                    </FormLabel>
                    <FormControl className="col-span-11 md:col-span-8">
                      <Input
                        type="number"
                        min={0}
                        className="border-none outline-none bg-inherit w-full"
                        placeholder="Buyer would need"
                        value={beforeTax}
                        onChange={handleBeforeTaxChange}
                      />
                    </FormControl>
                    <HoverCard>
                      <HoverCardTrigger>
                        <FaQuestion className="col-span-1 text-gray-400 hover:text-[#5F8C81] text-[14px] cursor-pointer" />
                      </HoverCardTrigger>
                      <HoverCardContent
                        side="left"
                        className="w-72 text-[13px]"
                      >
                        This is the price of items in Roblox. The buyer is
                        required to pay this amount.
                      </HoverCardContent>
                    </HoverCard>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full md:justify-center md:items-center">
              <FormField
                control={form.control}
                name="afterTax"
                render={() => (
                  <FormItem className="grid grid-cols-12 w-full justify-center items-center md:gap-2">
                    <FormLabel
                      className={`col-span-12 md:col-span-3 mt-[6px] ${
                        isAfterTaxEmpty ? "text-red-400" : ""
                      }`}
                    >
                      After Tax (R$):
                    </FormLabel>
                    <FormControl className="col-span-11 md:col-span-8">
                      <Input
                        type="number"
                        min={0}
                        className="border-none outline-none bg-inherit w-full"
                        placeholder="Seller would get"
                        value={afterTax}
                        onChange={handleAfterTaxChange}
                      />
                    </FormControl>
                    <HoverCard>
                      <HoverCardTrigger>
                        <FaQuestion className="col-span-1 text-gray-400 hover:text-[#5F8C81] text-[14px] cursor-pointer" />
                      </HoverCardTrigger>
                      <HoverCardContent
                        side="left"
                        className="w-72 text-[13px]"
                      >
                        This is the amount of Robux the seller will receive
                        after Roblox platform fees are deducted.
                      </HoverCardContent>
                    </HoverCard>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full md:justify-center md:items-center text-[14px] py-4">
              <div className="grid grid-cols-12 w-full justify-center items-center md:gap-2">
                <div className="col-span-12 md:col-span-3 ">
                  Roblox Tax (R$):
                </div>
                <div className="col-span-11 md:col-span-8">
                  {calculateDifference()}
                </div>
                <HoverCard>
                  <HoverCardTrigger>
                    <FaQuestion className="col-span-1 text-gray-400 hover:text-[#5F8C81] text-[14px] cursor-pointer" />
                  </HoverCardTrigger>
                  <HoverCardContent side="left" className="w-72 text-[13px]">
                    On Roblox&apos;s Marketplace, this fee is a{" "}
                    <a
                      href="https://roblox.fandom.com/wiki/Marketplace_fee"
                      rel="nofollow"
                      target="_blank"
                      className="underline underline-offset-2 hover:no-underline"
                    >
                      percentage of the revenue
                    </a>
                    deducted from all items sold for Robux ( previously known as
                    Tickets).
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </form>
        </Form>
        <div className="flex justify-center mt-6">
          <RatingSystem id={1} />
        </div>
      </div>
    </div>
  );
};

export default TaxCalculatorHandler;
