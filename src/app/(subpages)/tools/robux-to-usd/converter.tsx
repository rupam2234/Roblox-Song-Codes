"use client";

import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaExchangeAlt, FaQuestion } from "react-icons/fa";
import { z } from "zod";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { RatingSystem } from "@/components/custom-components/ratingSystem";
import { DollarSignIcon, IndianRupee } from "lucide-react";
import { useEffect, useState } from "react";
import CurrencyHandler, { CurrencyTypes } from "./currencyHandler";

const formSchema = z.object({
  RobuxValue: z.number().min(0, {
    message: "How much Robux?",
  }),
  Currency: z.number().min(0, {
    message: "How much USD?",
  }),
});

const Converter = () => {
  const CurrencyData: CurrencyTypes[] = [
    {
      currencyName: "DevEx",
      icon: DollarSignIcon,
      currencyRate: 0.0035,
      currencyTag: "DevEx Rate",
    },
    {
      currencyName: "USD",
      icon: DollarSignIcon,
      currencyRate: 0.0125,
      currencyTag: "USD Rate",
    },
    {
      currencyName: "CAD",
      icon: DollarSignIcon,
      currencyRate: 0.0162,
      currencyTag: "CAD Rate",
    },
    {
      currencyName: "EUR",
      icon: DollarSignIcon,
      currencyRate: 0.0102,
      currencyTag: "EUR Rate",
    },
    {
      currencyName: "GBP",
      icon: DollarSignIcon,
      currencyRate: 0.0088,
      currencyTag: "GBP Rate",
    },
    {
      currencyName: "INR",
      icon: IndianRupee,
      currencyRate: 1.25,
      currencyTag: "INR Rate",
    },
  ];

  const [RobuxValue, setRobuxValue] = useState("");
  const [Currency, setCurrency] = useState("");
  const [selectedCurrencyRate, setSelectedCurrencyRate] = useState<number>(0);
  const [selectedCurrencyName, setSelectedCurrencyName] = useState<string>("");
  const [selectedCurrencyTag, setSelectedCurrencyTag] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<
    "robux" | "currency" | null
  >(null);

  // Function to format number to 4 decimal places
  const formatNumber = (value: string) => {
    const num = parseFloat(value);
    return isNaN(num) ? "" : num.toFixed(4).replace(/\.?0+$/, "");
  };

  // Initialize useForm with Zod schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      RobuxValue: 0,
      Currency: 0,
    },
  });

  // Handle change for RobuxValue input
  const handleRobuxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Handle empty string
    if (value === "") {
      setRobuxValue(value);
      setCurrency("");
      return;
    }

    // Convert the input value to a number
    const newValue = parseFloat(value);

    // Format the RobuxValue value
    const formattedRobuxValue = isNaN(newValue) ? "" : formatNumber(value);
    setRobuxValue(formattedRobuxValue);

    // Calculate Currency based on formatted RobuxValue
    const calculatedCurrency = isNaN(newValue)
      ? ""
      : formatNumber((newValue * selectedCurrencyRate).toString());
    setCurrency(calculatedCurrency);

    setLastUpdatedField("robux");
  };

  // Handle change for Currency input
  const handleCurrencyValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Handle empty string
    if (value === "") {
      setCurrency(value);
      setRobuxValue("");
      return;
    }

    // Convert the input value to a number
    const newValue = parseFloat(value);

    // Format the Currency value
    const formattedCurrencyValue = isNaN(newValue) ? "" : formatNumber(value);
    setCurrency(formattedCurrencyValue);

    // Calculate Robux based on formatted Currency
    const calculatedRobux = isNaN(newValue)
      ? ""
      : formatNumber((newValue / selectedCurrencyRate).toString());
    setRobuxValue(calculatedRobux);

    setLastUpdatedField("currency");
  };

  // UseEffect to update values when selectedCurrencyRate changes
  useEffect(() => {
    if (lastUpdatedField === "robux" && RobuxValue) {
      // Recalculate currency when rate changes if RobuxValue was last updated
      const newValue = parseFloat(RobuxValue);
      const calculatedCurrency = isNaN(newValue)
        ? ""
        : formatNumber((newValue * selectedCurrencyRate).toString());
      setCurrency(calculatedCurrency);
    } else if (lastUpdatedField === "currency" && Currency) {
      // Recalculate robux value when rate changes if Currency was last updated
      const newValue = parseFloat(Currency);
      const calculatedRobux = isNaN(newValue)
        ? ""
        : formatNumber((newValue / selectedCurrencyRate).toString());
      setRobuxValue(calculatedRobux);
    }
  }, [selectedCurrencyRate, lastUpdatedField, RobuxValue, Currency]);

  // to display conversion rate on form
  const PrintConversionRate = () => {
    return (
      <div>
        {selectedCurrencyRate} {selectedCurrencyName} / Robux
      </div>
    );
  };

  return (
    <div className="bg-gray-800 w-full rounded-sm">
      <div className="bg-[#5F8C81] rounded-t-sm text-center px-6 py-6 flex justify-center items-center">
        <div className="rounded-sm bg-gray-300/60 p-2 flex justify-center items-center mr-4 gap-2">
          <Image
            src="/media/Robux.png"
            alt="Robux Icon"
            width={28}
            height={28}
          />
          <FaExchangeAlt className=" text-white" />
          <DollarSignIcon className=" text-black" />
        </div>
        <h2 className="text-[16px] md:text-[30px] text-white font-extrabold">
          Robux To USD Converter
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
                name="RobuxValue"
                render={() => (
                  <FormItem className="grid grid-cols-12 w-full justify-center items-center md:gap-2">
                    <FormLabel
                      className={`col-span-12 md:col-span-3 mt-[6px] flex`}
                    >
                      Robux 
                    </FormLabel>
                    <FormControl className="col-span-11 md:col-span-8">
                      <Input
                        type="number"
                        min={0}
                        className="border-none outline-none bg-inherit w-full"
                        placeholder="How much Robux?"
                        value={RobuxValue}
                        onChange={handleRobuxValue}
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
                        This is the amout of Roblox you want to convert to USD.
                      </HoverCardContent>
                    </HoverCard>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full md:justify-center md:items-center">
              <FormField
                control={form.control}
                name="Currency"
                render={() => (
                  <FormItem className="grid grid-cols-12 w-full justify-center items-center md:gap-2">
                    <FormLabel className={`col-span-12 md:col-span-3 mt-[6px]`}>
                      {/* US Doller ($): */}
                      <CurrencyHandler
                        currencies={CurrencyData}
                        setSelectedCurrencyRate={setSelectedCurrencyRate}
                        setSelectedCurrencyName={setSelectedCurrencyName}
                        setSelectedCurrencyTag={setSelectedCurrencyTag}
                      />
                    </FormLabel>
                    <FormControl className="col-span-11 md:col-span-8">
                      <Input
                        type="number"
                        min={0}
                        className="border-none outline-none bg-inherit w-full"
                        placeholder="How much USD?"
                        value={Currency}
                        onChange={handleCurrencyValue}
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
                        This is the amount of{" "}
                        <a
                          href="https://create.roblox.com/dashboard/devex"
                          rel="nofollow"
                          target="_blank"
                          className="underline hover:no-underline"
                        >
                          USD equivalent
                        </a>{" "}
                        to the Robux input.
                      </HoverCardContent>
                    </HoverCard>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full md:justify-center md:items-center text-[14px] py-4">
              <div className="grid grid-cols-12 w-full justify-center items-center md:gap-2">
                <div className="col-span-12 md:col-span-3 ">
                  {selectedCurrencyTag}
                </div>
                <div className="col-span-11 md:col-span-8">
                  {PrintConversionRate()}
                </div>
                <HoverCard>
                  <HoverCardTrigger>
                    <FaQuestion className="col-span-1 text-gray-400 hover:text-[#5F8C81] text-[14px] cursor-pointer" />
                  </HoverCardTrigger>
                  <HoverCardContent side="left" className="w-72 text-[13px]">
                    Exchange rates can fluctuate over time and may take some
                    time to update on this calculator. However, the system will
                    continuously monitor rate changes and update accordingly.
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </form>
        </Form>
        <div className="flex justify-center mt-6">
          <RatingSystem id={2} />
        </div>
      </div>
    </div>
  );
};

export default Converter;
