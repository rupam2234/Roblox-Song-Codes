import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SearchFormSchema } from "./constants";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  const form = useForm<z.infer<typeof SearchFormSchema>>({
    resolver: zodResolver(SearchFormSchema),

    defaultValues: {
      SongName: "",
    },
  });

  return (
    <div>
      <Form {...form}>
        <form
          //onSubmit={form.handleSubmit()}
          className="hidden sm:block"
        >
          <FormField
            name="SongName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      placeholder="Type a song name"
                      {...field}
                      className="outline-none w-72 focus-visible:ring-0 bg-gray-100 text-black focus-visible:ring-transparent rounded-none flex-grow"
                    />
                    <Button className="absolute right-2 p-2 bg-transparent hover:bg-transparent">
                      <SearchIcon className="text-gray-400" />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
